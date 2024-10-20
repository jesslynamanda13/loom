<template>
  <div class="flex flex-col">
    <div class="flex flex-row mt-12 space-x-4">
      <div :class="sidebarWidthClass">
        <TalentSideBarComponent @toggle="toggleSidebar" :currentPage="'/talent/cv-portfolio'" />
      </div>

      <div :class="[mainContentWidthClass, 'flex flex-col space-y-4 mb-12 px-12']">
        <SuccessMessage
          v-if="successMessage"
          :successMessage="successMessage"
          @dismiss="dismissSuccessMessage"
        />
        <WarningMessage v-if="warningMessage" :warningMessage="warningMessage" />
        <p class="text-2xl font-bold">CV & Portfolio</p>
        <p class="mt-2 text-sm text-gray-600">
          Upload your latest CV and portfolio so recruiters can review them.
        </p>
        <div class="mt-4 components flex flex-col space-y-4"></div>
        <TalentCVComponent
          v-if="talentProfile"
          :initialCV="talentProfile.CV"
          @changes-saved="onChangesSaved"
        />
        <TalentPortfolioComponent
          v-if="portfolios"
          :initialPortfolio="portfolios"
          @changes-saved="onChangesSaved"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TalentCVComponent from '@/components/talent/profile/TalentCVComponent.vue'
import TalentService from '@/services/TalentService'
import PortfolioService from '@/services/PortfolioService'
import TalentSideBarComponent from '@/components/talent/profile/TalentSideBarComponent.vue'
import WarningMessage from '@/components/notification/WarningMessage.vue'
import SuccessMessage from '@/components/notification/SuccessMessage.vue'
import TalentPortfolioComponent from '@/components/talent/profile/TalentPortfolioComponent.vue'

export default {
  name: 'TalentCVPortfolioPage',
  components: {
    TalentSideBarComponent,
    TalentCVComponent,
    WarningMessage,
    SuccessMessage,
    TalentPortfolioComponent
  },
  data() {
    return {
      talentProfile: {},
      CV: '',
      isSidebarCollapsed: false,
      warningMessage: '',
      successMessage: '',
      portfolios: []
    }
  },
  computed: {
    sidebarWidthClass() {
      return this.isSidebarCollapsed ? 'w-16' : 'w-64'
    },
    mainContentWidthClass() {
      return this.isSidebarCollapsed ? 'w-full' : 'flex-grow'
    }
  },
  methods: {
    onChangesSaved() {
      this.successMessage = 'Your profile has been successfully updated!'
      setTimeout(() => {
        this.successMessage = ''
      }, 3000)
      this.fetchTalentProfile()
      this.fetchTalentPortofolio()
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    },
    async fetchTalentProfile() {
      try {
        const response = await TalentService.getTalentProfile()
        this.talentProfile = response
        this.CV = response.CV

        if (this.CV === '') {
          this.warningMessage =
            'Your profile seems to be incomplete. Please provide more details to attract employers.'
        }
      } catch (error) {
        console.error('Error fetching talent profile:', error)
      }
    },
    async fetchTalentPortofolio() {
      try {
        const response = await PortfolioService.getPortfolio()
        this.portfolios = response.data['Data']
        console.log('Fetched Portfolio:', response.data['Data'])
        if (this.portfolios.length === 0) {
          this.warningMessage =
            'Your profile seems to be incomplete. Please provide more details to attract employers.'
        }
      } catch (error) {
        console.error('Error fetching talent profile:', error)
      }
    },
    logout() {
      localStorage.removeItem('authToken')
      this.$router.push('/login')
    }
  },
  async mounted() {
    await this.fetchTalentProfile()
    await this.fetchTalentPortofolio()
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row mt-12 space-x-4">
      <div :class="sidebarWidthClass">
        <TalentSideBarComponent @toggle="toggleSidebar" :currentPage="'/talent/profile'" />
      </div>

      <div :class="[mainContentWidthClass, 'flex flex-col space-y-4 mb-12 px-12']">
        <SuccessMessage
          v-if="successMessage"
          :successMessage="successMessage"
          @dismiss="dismissSuccessMessage"
        />
        <WarningMessage v-if="warningMessage" :warningMessage="warningMessage" />
        <p class="text-2xl font-bold">Profile</p>
        <TalentProfileComponent
          v-if="talentProfile.FullName && talentProfile.Bio && talentProfile.Location"
          :fullName="talentProfile.FullName"
          :initialBio="talentProfile.Bio"
          :initialLocation="talentProfile.Location"
          @changes-saved="onChangesSaved"
        />

        <PersonalInformationComponent
          :full-name="talentProfile.FullName"
          :email="talentProfile.Email"
          :phone-number="talentProfile.PhoneNumber"
          @changes-saved="onChangesSaved"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PersonalInformationComponent from '@/components/talent/profile/PersonalInformationComponent.vue'
import TalentService from '@/services/TalentService'
import TalentSideBarComponent from '@/components/talent/profile/TalentSideBarComponent.vue'
import TalentProfileComponent from '@/components/talent/profile/TalentProfileComponent.vue'
import WarningMessage from '@/components/notification/WarningMessage.vue'
import SuccessMessage from '@/components/notification/SuccessMessage.vue'

export default {
  name: 'TalentProfilePage',
  components: {
    TalentSideBarComponent,
    TalentProfileComponent,
    PersonalInformationComponent,
    WarningMessage,
    SuccessMessage
  },
  data() {
    return {
      talentProfile: {},
      bio: '',
      location: '',
      skills: [],
      isSidebarCollapsed: false,
      warningMessage: '',
      successMessage: ''
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
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed
    },
    async fetchTalentProfile() {
      try {
        const response = await TalentService.getTalentProfile()
        this.talentProfile = response
        this.bio = response.Bio
        this.location = response.Location
        this.skills = response.Skills

        console.log('Bio:', this.bio)
        if (this.skills.length === 0 || this.bio === '' || this.location === '') {
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
  }
}
</script>

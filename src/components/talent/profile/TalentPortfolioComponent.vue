<template>
  <div class="content flex flex-col">
    <div class="container bg-white border border-gray-200 rounded-lg py-6 px-8">
      <div class="profile-information">
        <div class="flex flex-row justify-between align-middle items-center">
          <div class="title flex flex-col">
            <p class="font-bold text-lg">Portfolio</p>
          </div>
          <div class="save-changes-button">
            <button
              @click="showAddPortfolioForm = !showAddPortfolioForm"
              class="rounded-md px-4 py-2 text-xs bg-black text-white"
            >
              + Add Portfolio
            </button>
          </div>
        </div>
        <div class="subtitle mt-2">
          <p class="text-sm text-gray-600">
            Provide a compilation of projects and professional materials that exemplifies your
            beliefs, skills, qualifications, education, training, and experiences
          </p>
        </div>
        <WarningMessage v-if="warningMessage" :warningMessage="warningMessage" class="mt-2" />
        <AddPortfolioFormComponent v-if="showAddPortfolioForm" @portfolio-added="addPortfolio" />
        <div class="portfolio-cards mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-6">
          <PortfolioCardComponent
            v-for="(portfolio, index) in localPortfolio"
            :key="index"
            :title="portfolio.Title"
            :description="portfolio.Description"
            :imageSrc="portfolio.CoverImage"
            :link="portfolio.ProjectLink"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WarningMessage from '@/components/notification/WarningMessage.vue'
import AddPortfolioFormComponent from './AddPortfolioFormComponent.vue'
import { EditPortfolioTalentDTO } from '@/models/MsTalent'
import TalentService from '@/services/TalentService'
import PortfolioCardComponent from './PortfolioCardComponent.vue'

export default {
  name: 'TalentPortfolioComponent',
  components: {
    AddPortfolioFormComponent,
    WarningMessage,
    PortfolioCardComponent
  },
  props: {
    initialPortfolio: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log('Initial Portfolio:', this.initialPortfolio)
  },
  data() {
    return {
      showAddPortfolioForm: false,
      warningMessage: ''
    }
  },
  computed: {
    localPortfolio() {
      return this.initialPortfolio
    }
  },

  methods: {
    checkChanges() {
      this.hasChanges = this.localPortfolio !== this.initialPortfolio
    },
    async saveChanges() {
      this.$emit('update:initialPortfolio', this.localPortfolio)

      const request = new EditPortfolioTalentDTO(this.localPortfolio)
      const response = await TalentService.editProfile(request)
      if (response.status === 200) {
        this.hasChanges = false
        this.$emit('changes-saved')
      } else {
        this.$emit('show-warning', 'Failed to save changes')
      }
    },
    addPortfolio() {
      this.$emit('changes-saved')
    }
  }
}
</script>

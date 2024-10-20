<template>
  <div class="content">
    <TalentNavbarComponent :currentPage="'explore-jobs'" />
    <div class="components mt-12 px-12">
      <div class="flex flex-row gap-4">
        <JobDetailsCardComponent
          :postedTime="postedTime"
          :jobTitle="jobTitle"
          :jobLocation="jobLocation"
          :workType="jobType"
          :salary="wage"
          :skills="skills"
          :jobDescription="jobDescription"
          :jobResponsibilities="jobResponsibilities"
          :qualifications="jobQualifications"
          @apply-now-clicked="showModal = true"
        />
        <div class="right">
          <p class="text-lg font-semibold mb-4">Posted by</p>
          <SMEInformation
            companyLogo="/assets/img/default-photo.jpg"
            status="Active"
            :companyName="companyName"
            companyTagline="Clothing store in Jakarta"
            :companyDescription="companyDescription"
            :website="website"
            :email="email"
          />
        </div>
      </div>
    </div>

    <div class="mt-12">
      <FooterComponent />
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <JobApplicationModalComponent @closeModal="showModal = false" />
    </div>
  </div>
</template>

<script>
import TalentNavbarComponent from '@/components/talent/navigation/TalentNavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import JobDetailsCardComponent from '@/components/talent/JobDetailsCardComponent.vue'
import SMEInformation from '@/components/talent/SMEInformationComponent.vue'
import JobApplicationModalComponent from '@/components/talent/application/JobApplicationModalComponent.vue'
import JobService from '@/services/JobService'
export default {
  name: 'JobDetailsPage',
  components: {
    TalentNavbarComponent,
    FooterComponent,
    JobDetailsCardComponent,
    SMEInformation,
    JobApplicationModalComponent
  },

  data() {
    return {
      showModal: false,
      postedTime: '',
      jobTitle: '',
      jobLocation: '',
      jobType: '',
      wage: '',
      skills: [],
      jobDescription: '',
      jobResponsibilities: [],
      jobQualifications: [],
      smeId: '',
      companyName: '',
      companyTagline: '',
      companyDescription: '',
      email: '',
      website: ''
    }
  },
  methods: {
    async getJobDetails() {
      try {
        const response = await JobService.getJobById(this.$route.params.jobId)
        console.log(response)
        if (response !== '') {
          this.postedTime = this.getWeeksSinceCreated(response.CreatedAt)
          this.jobTitle = response.JobTitle
          this.jobLocation = response.Location
          this.jobType = response.JobType
          this.wage = response.Wage
          this.skills = response.Skills
          this.jobDescription = response.JobDescription
          this.jobQualifications = response.Qualification
          this.smeId = response.SMEID
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getSMEDetails() {
      try {
        const response = await JobService.getSMEId(this.smeId)
        console.log('Company', response)
        this.companyName = response.CompanyName
        this.companyDescription = response.CompanyDescription
        this.email = response.Email
        this.website = response.Social
      } catch (error) {
        console.log(error)
      }
    },
    getWeeksSinceCreated(createdAt) {
      const createdDate = new Date(createdAt)
      const currentDate = new Date()

      const differenceInMillis = currentDate - createdDate

      const differenceInWeeks = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24 * 7))

      if (differenceInWeeks <= 1) {
        return '1 week ago'
      } else {
        return `${differenceInWeeks} weeks ago`
      }
    }
  },
  async mounted() {
    await this.getJobDetails()
    await this.getSMEDetails()
  }
}
</script>

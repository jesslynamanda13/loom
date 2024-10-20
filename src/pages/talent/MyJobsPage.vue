<template>
  <div>
    <TalentNavbarComponent :currentPage="'my-jobs'" />
    <div class="content px-24">
      <div class="title">
        <p class="mt-12 font-bold text-2xl">Job Applications</p>
      </div>

      <div class="jobs mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <SavedJobComponent
          companyLogo="/assets/img/default-photo.jpg"
          companyName="Brodo"
          jobTitle="Graphic Designer"
          location="Bali, Indonesia"
          workType="Freelance"
          workArrangement="Onsite"
          salary="IDR 20,000/hour"
          status="In-Review"
          :active="True"
        />
      </div>
    </div>

    <div class="mt-36">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import SavedJobComponent from '@/components/talent/SavedJobComponent.vue'
import TalentNavbarComponent from '@/components/talent/navigation/TalentNavbarComponent.vue'
export default {
  name: 'MyJobsPage',
  components: {
    TalentNavbarComponent,
    FooterComponent,
    SavedJobComponent
    // JobCardComponent
  },
  data() {
    return {
      activeButton: null
    }
  },
  methods: {
    handleButtonClick(button) {
      this.activeButton = button

      switch (button) {
        case 'applied':
          this.sendRequest('applied')
          break
        case 'saved':
          this.sendRequest('saved')
          break
        case 'past':
          this.sendRequest('past')
          break
      }
    },
    sendRequest(type) {
      console.log(`Sending request for ${type} jobs`)
    }
  }
}
</script>

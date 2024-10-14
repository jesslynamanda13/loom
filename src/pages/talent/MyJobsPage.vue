<template>
  <div>
    <TalentNavbarComponent :currentPage="'my-jobs'" />
    <div class="content px-24">
      <div class="title">
        <p class="font-bold text-2xl">Job Applications</p>
      </div>
      <div class="options">
        <div class="flex space-x-4 mt-6">
          <button
            :class="[
              'font-semibold border border-black rounded-lg py-2 px-4',
              activeButton === 'applied'
                ? 'bg-white text-red-800 border-red-800'
                : 'bg-white text-black hover:bg-gray-100'
            ]"
            @click="handleButtonClick('applied')"
          >
            Applied
          </button>
          <button
            :class="[
              'font-semibold border border-black rounded-lg py-2 px-4',
              activeButton === 'saved'
                ? 'bg-white text-red-800 border-red-800'
                : 'bg-white text-black hover:bg-gray-100'
            ]"
            @click="handleButtonClick('saved')"
          >
            Saved
          </button>
          <button
            :class="[
              'font-semibold border border-black rounded-lg py-2 px-4',
              activeButton === 'past'
                ? 'bg-white text-red-800 border-red-800'
                : 'bg-white text-black hover:bg-gray-100'
            ]"
            @click="handleButtonClick('past')"
          >
            Past Jobs
          </button>
        </div>
      </div>
      <div class="jobs mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <SavedJobComponent
          companyLogo="/assets/img/company-logo.png"
          companyName="Tenue d'Attire"
          jobTitle="Frontend Developer"
          location="Jakarta"
          workType="Full-time"
          hoursPerWeek="40 hours"
          workArrangement="Hybrid"
          salary="Rp. 10.000.000/month"
          status="Rejected"
          :active="False"
        />

        <SavedJobComponent
          companyLogo="/assets/img/company-logo.png"
          companyName="Tenue d'Attire"
          jobTitle="Mobile Developer"
          location="Jakarta"
          workType="Full-time"
          hoursPerWeek="40 hours"
          workArrangement="Hybrid"
          salary="Rp. 10.000.000/month"
          status="Hired"
          :active="False"
        />

        <SavedJobComponent
          companyLogo="/assets/img/company-logo.png"
          companyName="Tenue d'Attire"
          jobTitle="Mobile Developer"
          location="Jakarta"
          workType="Full-time"
          hoursPerWeek="40 hours"
          workArrangement="Hybrid"
          salary="Rp. 10.000.000/month"
          status="In-Review"
          :active="False"
        />
      </div>
    </div>

    <div class="mt-12">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import SavedJobComponent from '@/components/talent/SavedJobComponent.vue'
import TalentNavbarComponent from '@/components/talent/TalentNavbarComponent.vue'
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

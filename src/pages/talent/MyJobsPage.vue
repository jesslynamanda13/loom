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
            class="bg-white text-black font-semibold border border-black rounded-lg py-2 px-4 hover:bg-gray-100"
          >
            Applied
          </button>
          <button
            class="bg-white text-black font-semibold border border-black rounded-lg py-2 px-4 hover:bg-gray-100"
          >
            Saved
          </button>
          <button
            class="bg-white text-black font-semibold border border-black rounded-lg py-2 px-4 hover:bg-gray-100"
          >
            Past Jobs
          </button>
        </div>
      </div>
    </div>

    <div class="mt-12">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import TalentNavbarComponent from '@/components/talent/TalentNavbarComponent.vue'
export default {
  name: 'MyJobsPage',
  components: {
    TalentNavbarComponent,
    FooterComponent
    // JobCardComponent
  }
}
</script>

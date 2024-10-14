<template>
  <div
    class="job-card max-w-sm md:max-w-xs px-6 py-6 lg:w-80 border border-gray-200 rounded-lg shadow-lg"
  >
    <div class="flex items-center space-x-2 mb-3">
      <img :src="companyLogo" alt="Company Logo" class="w-6 h-6 rounded-full" />
      <span class="text-xs text-black font-semibold">{{ companyName }}</span>
    </div>
    <p class="text-sm">Looking for</p>
    <h2 class="text-xl font-bold text-gray-800">{{ jobTitle }}</h2>

    <p class="mt-2 text-xs text-gray-600">
      {{ location }} | {{ workType }} ({{ hoursPerWeek }}) | {{ workArrangement }}
    </p>

    <p class="text-xs font-semibold text-gray-800 mt-2">Salary: {{ salary }}</p>
    <p class="mt-4 text-sm font-semibold text-black">Skills:</p>
    <div class="flex space-x-1 mt-2">
      <span
        v-for="skill in skills"
        :key="skill"
        class="px-2 py-1 text-xs bg-orange-200 text-orange-600 rounded-md"
      >
        {{ skill }}
      </span>
    </div>
    <p class="mt-4 text-sm font-semibold text-black">Job Description:</p>
    <p class="mt-2 text-xs text-gray-600">{{ jobDescription }}</p>

    <!-- Buttons -->
    <div class="mt-4 flex flex-col space-y-3">
      <div class="flex flex-row justify-between">
        <button
          @click="navigateToJobDetails"
          class="border text-xs border-black bg-white text-black px-4 py-2 font-semibold rounded-md hover:bg-gray-100 flex items-center justify-between w-full mr-2"
        >
          See details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <button
          class="text-xs border border-black bg-white text-black justify-center font-semibold px-4 py-2 rounded-md hover:bg-gray-100 flex items-center w-full"
        >
          <img src="/assets/img/message-icon.png" class="w-4 mr-2" alt="Chat Icon" />
          Chat now
        </button>
      </div>

      <button
        class="text-xs bg-black text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-800 flex justify-center items-center w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
        Apply now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobCardComponent',
  props: {
    companyName: String,
    companyLogo: String,
    jobTitle: String,
    location: String,
    workType: String,
    hoursPerWeek: String,
    workArrangement: String,
    salary: String,
    skills: Array,
    jobDescription: String
  },
  methods: {
    navigateToJobDetails() {
      this.$router.push({ name: 'JobDetailsPage' })
    }
  }
}
</script>

<style scoped>
.job-card {
  max-width: 350px; /* Smaller width for desktop */
}

@media (max-width: 640px) {
  .job-card {
    max-width: 100%; /* Full width on smaller screens */
  }

  .px-6 {
    padding-left: 1rem; /* Adjust padding for smaller screens */
    padding-right: 1rem;
  }

  .py-4 {
    padding-top: 1rem; /* Adjust padding for smaller screens */
    padding-bottom: 1rem;
  }

  .text-xl {
    font-size: 1.25rem; /* Smaller font size for title */
  }

  .w-full {
    width: 100%; /* Ensure buttons take full width */
  }
}
</style>

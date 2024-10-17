<template>
  <div class="job-card max-w-2xl mx-auto px-6 py-8 bg-white border border-gray-200 rounded-lg">
    <div class="flex">
      <div>
        <p class="text-gray-500">Posted {{ postedTime }}</p>
        <h1 class="text-3xl font-bold mb-2 mt-2">{{ jobTitle }}</h1>
        <div class="flex space-x-3 mt-4 align-middle items-center text-sm">
          <img src="/assets/img/location-icon.png" class="w-3 h-auto" alt="" />
          <p class="text-black">{{ jobLocation }}</p>
        </div>
        <div class="flex space-x-3 mt-3 align-middle items-center text-sm">
          <img src="/assets/img/work-icon.png" class="w-3 h-auto" alt="" />
          <p class="text-black">{{ workType }} ({{ hoursPerWeek }})</p>
        </div>
        <div class="flex space-x-3 mt-3 align-middle items-center text-sm">
          <img src="/assets/img/wage-icon.png" class="w-4 h-auto" alt="" />
          <p class="text-black">{{ salary }}</p>
        </div>
        <div class="flex space-x-3 mt-3 align-middle items-center text-sm">
          <img src="/assets/img/skills-icon.png" alt="" class="w-4 h-auto" />
          <span
            v-for="skill in skills"
            :key="skill"
            class="px-2 py-1 bg-orange-200 text-orange-700 rounded-lg text-sm"
            >{{ skill }}</span
          >
        </div>
        <div class="flex flex-row space-x-4 mt-6">
          <button
            @click="applyNow"
            class="bg-black text-white flex items-center px-4 py-2 rounded-md text-sm"
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
            Apply Now
          </button>

          <button class="text-sm bg-white border border-black text-black px-4 py-2 rounded-md">
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="my-6">
      <div class="border-t border-gray-200"></div>
    </div>

    <!-- Job Description -->
    <div class="mt-6">
      <div class="title flex flex-row gap-2 align-middle items-center">
        <img src="/assets/img/job-desc-icon.png" alt="" class="w-4 h-5" />
        <h2 class="text-xl font-bold">Job Description</h2>
      </div>
      <p class="mt-2 text-black mb-4">{{ jobDescription }}</p>
      <ul class="list-disc list-inside text-black">
        <li v-for="desc in jobResponsibilities" :key="desc">{{ desc }}</li>
      </ul>
    </div>

    <!-- Qualifications -->
    <div class="mt-6">
      <div class="title flex flex-row gap-2 align-middle items-center">
        <img src="/assets/img/qualifications-icon.png" alt="" class="w-5 h-5" />
        <h2 class="text-xl font-bold">Qualifications</h2>
      </div>
      <ul class="mt-2 list-disc list-inside text-black">
        <li v-for="qual in qualifications" :key="qual">{{ qual }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetailsCardComponent',
  methods: {
    applyNow() {
      this.$emit('apply-now-clicked')
    }
  },

  props: {
    postedTime: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    jobLocation: {
      type: String,
      required: true
    },
    workType: {
      type: String,
      required: true
    },
    hoursPerWeek: {
      type: String,
      required: true
    },
    salary: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      required: true
    },
    jobDescription: {
      type: String,
      required: true
    },
    jobResponsibilities: {
      type: Array,
      required: true
    },
    qualifications: {
      type: Array,
      required: true
    }
  }
}
</script>

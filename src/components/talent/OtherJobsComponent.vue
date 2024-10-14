<template>
  <div
    class="border p-4 rounded-lg shadow-sm flex flex-row justify-between align-middle items-center"
  >
    <div class="left flex flex-row gap-4">
      <img :src="companyLogo" class="w-12 h-12" alt="" />
      <div class="component">
        <h4 class="font-semibold">{{ jobTitle }}</h4>
        <p class="text-gray-400 text-xs">{{ location }} | {{ workType }} | {{ workArrangement }}</p>
      </div>
    </div>
    <div class="right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-black"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherJobsComponent',
  props: {
    companyLogo: {
      type: String,
      required: true
    },
    jobTitle: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    workType: {
      type: String,
      required: true
    },
    workArrangement: {
      type: String,
      required: true
    }
  }
}
</script>

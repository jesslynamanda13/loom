<template>
  <div class="bg-white border border-gray-200 rounded-lg w-fit px-8 py-8">
    <!-- Show this only if active is false -->
    <p v-if="!active" class="text-xs italic text-gray-400">This job opening is no longer hiring</p>

    <div class="components mt-4">
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

      <div class="status mt-4">
        <p class="text-md font-semibold">Application Status</p>
        <div class="flex flex-row items-center space-x-2 mt-2">
          <!-- Show rejected icon if status is Rejected -->
          <img
            v-if="status === 'Rejected'"
            src="/assets/img/rejected-icon.png"
            alt="Rejected Icon"
            class="w-3 h-3"
          />
          <img
            v-if="status === 'Hired'"
            src="/assets/img/hired-icon.png"
            alt="Hired Icon"
            class="w-3 h-3"
          />
          <img
            v-if="status === 'In-Review'"
            src="/assets/img/in-review-icon.png"
            alt="Hired Icon"
            class="w-3 h-3"
          />
          <p class="text-sm font-bold" :class="statusStyle">{{ status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SavedJobComponent',
  props: {
    companyLogo: String,
    companyName: String,
    jobTitle: String,
    location: String,
    workType: String,
    hoursPerWeek: String,
    workArrangement: String,
    salary: String,
    status: String,
    active: Boolean
  },
  computed: {
    statusStyle() {
      if (this.status === 'Rejected') {
        return 'text-red-700'
      } else if (this.status === 'Hired') {
        return 'text-green-600'
      } else if (this.status === 'In-Review') {
        return 'text-purple-700'
      } else {
        return ''
      }
    }
  }
}
</script>

<template>
  <div class="p-4 bg-white rounded-lg border border-gray-300 flex-1">
    <header class="mb-4">
      <h2 class="text-lg font-semibold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
        Current Vacancies
      </h2>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div
        v-for="(vacancy, index) in vacancies"
        :key="index"
        @click="goToJobDetail(vacancy)"
        class="cursor-pointer border rounded-lg shadow-md p-4 bg-white"
      >
        <div class="flex justify-between">
          <div class="p-2 rounded-md" :class="randomBgColor(index)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" :class="randomIconColor(index)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
          <p class="text-gray-500 text-sm">Posted {{ new Date(vacancy.createdAt).toLocaleDateString() }}</p>
        </div>

        <div class="my-1">
          <h2 class="text-xl font-semibold">{{ vacancy.title }}</h2>
            <p class="text-yellow-500 text-sm mt-1">
            <span class="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline"
                fill="none"
                viewBox="0 0 28 28"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            {{ vacancy.type }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentVacancies',
  props: {
    vacancies: Array,
  },
  methods: {
    goToJobDetail(vacancy) {
      this.$emit('show-detail', vacancy);
    },
    randomBgColor(index) {
      const bgColors = ['bg-red-100', 'bg-orange-100', 'bg-blue-100', 'bg-green-100'];
      return bgColors[index % bgColors.length];
    },
    randomIconColor(index) {
      const iconColors = ['text-red-500', 'text-orange-500', 'text-blue-500', 'text-green-500'];
      return iconColors[index % iconColors.length];
    }
  }
};
</script>
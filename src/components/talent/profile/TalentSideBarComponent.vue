<template>
  <div class="flex h-full">
    <div
      :class="sidebarClass"
      class="bg-white shadow-lg h-full fixed top-0 left-0 z-10 transition-all duration-300"
    >
      <div class="flex items-center justify-between w-full h-16 bg-white">
        <img
          v-if="!isCollapsed"
          src="/public/assets/img/loom-logo.png"
          alt="Loom Logo"
          class="h-6 w-auto ml-4"
        />
        <button
          @click="toggleSidebar"
          class="focus:outline-none text-gray-800 flex items-center justify-center h-full mr-4"
        >
          <span v-if="!isCollapsed">
            <img
              src="/public/assets/img/cancel-icon.svg"
              alt="Menu"
              class="h-10 w-10"
              style="width: 12px; height: 12%"
            />
          </span>
          <span v-else>
            <img
              src="/public/assets/img/hamburger-icon.svg"
              alt="Menu"
              class="h-10 w-10 ml-5"
              style="width: 24px; height: 24px"
            />
          </span>
        </button>
      </div>

      <ul class="space-y-2 p-3">
        <li v-for="item in menuItems" :key="item.title">
          <router-link
            :to="item.path"
            class="flex items-center p-2 text-gray-800 hover:bg-gray-200 rounded-lg"
            :class="{
              'font-bold': $route.path === item.path,
              'opacity-30 font-normal': $route.path !== item.path
            }"
          >
            <span v-html="item.icon" class="w-6 h-6"></span>
            <span class="ml-3" v-if="!isCollapsed">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>

      <hr class="border-gray-300 my-2" />

      <div class="space-y-2 p-3">
        <!-- Sign Out Option -->
        <a
          @click="logout"
          href="#"
          class="flex items-center p-2 text-red-800 hover:bg-gray-100 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          <span class="ml-3" v-if="!isCollapsed">Sign Out</span>
        </a>
      </div>

      <!-- Back to Home Option -->
      <div class="space-y-2 p-3">
        <router-link
          to="/talent/explore-jobs"
          class="flex items-center p-2 text-yellow-600 hover:bg-gray-100 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18m-6 6 6-6-6-6" />
          </svg>
          <span class="ml-3" v-if="!isCollapsed">Back to Home</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TalentSidebarComponent',
  data() {
    return {
      isCollapsed: false,
      menuItems: [
        {
          title: 'Profile',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM18.75 18a6.75 6.75 0 0 0-13.5 0" /></svg>`,
          path: '/profile'
        },
        {
          title: 'CV & Portfolio',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
          path: '/cv-portfolio'
        }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed
      this.$emit('sidebar-width-changed', this.isCollapsed ? 64 : 16)
    },
    logout() {
      localStorage.removeItem('authToken')
      this.$router.push('/login')
    }
  },
  computed: {
    sidebarClass() {
      return this.isCollapsed ? 'w-16' : 'w-64'
    }
  }
}
</script>

<style scoped>
.size-6 {
  width: 24px;
  height: 24px;
}
</style>

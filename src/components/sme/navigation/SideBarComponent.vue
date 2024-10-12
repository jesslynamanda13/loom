<template>
  <div class="flex h-full">
    <div :class="sidebarClass" class="bg-white shadow-lg h-full fixed top-0 left-0 z-10 transition-all duration-300">
      <div class="flex items-center justify-between w-full h-16 bg-white">
        <img 
          v-if="!isCollapsed" 
          src="/public/assets/img/loom-logo.png" 
          alt="Loom Logo" 
          class="h-10 w-auto ml-4"
        />
        <button @click="toggleSidebar" class="focus:outline-none text-gray-800 flex items-center justify-center h-full mr-4">
          <span v-if="!isCollapsed">
            <img 
              src="/public/assets/img/cancel-icon.svg" 
              alt="Menu" 
              class="h-10 w-10"
              style="width: 12px; height: 12%;"
            />
          </span>
          <span v-else>
            <img 
              src="/public/assets/img/hamburger-icon.svg" 
              alt="Menu" 
              class="h-10 w-10 ml-5"
              style="width: 24px; height: 24px;"
            />
          </span>
        </button>
      </div>

      <div class="p-3 relative bg-white rounded-lg shadow dark:bg-gray-100 mt-2">
        <div class="flex items-center space-x-3">
          <img src="/public/assets/img/store-logo.png" alt="AngelStore" class="h-10 w-10 rounded-full" />
          <div v-if="!isCollapsed" class="flex flex-col">
            <h3 class="font-semibold">AngelStore</h3>
            <p class="text-sm text-gray-400">Accessories</p>
          </div>
        </div>
      </div>

      <hr class="border-gray-300 my-2" />

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
        <a href="#" class="flex items-center p-2 text-red-800 hover:bg-gray-100 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          <span class="ml-3" v-if="!isCollapsed">Sign Out</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      isCollapsed: false,
      menuItems: [
        { 
          title: "Dashboard", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>`,
          path: '/dashboard',
        },
        { 
          title: "Search", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
          path: '/search',
        },
        { 
          title: "My Job", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>`,
        },
        { 
          title: "Post a Job", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>`,
        },
        { 
          title: "Notification", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>`,
        },
        { 
          title: "Message", 
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" /></svg>`,
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('sidebar-width-changed', this.isCollapsed ? 64 : 16);
    },
  },
  computed: {
    sidebarClass() {
      return this.isCollapsed ? 'w-16' : 'w-64';
    },
  },
};
</script>

<style scoped>
  .size-6 {
    width: 24px;
    height: 24px;
  }
</style>

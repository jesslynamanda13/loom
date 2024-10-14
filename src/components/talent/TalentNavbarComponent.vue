<template>
  <nav class="flex items-center justify-between bg-white py-4 px-8 shadow-sm">
    <!-- Desktop Version -->
    <div class="flex items-center space-x-12">
      <img src="/assets/img/loom-logo.png" alt="Logo" class="w-24" />
      <div class="hidden lg:flex space-x-8 mt-2 font-medium">
        <a
          :class="getNavClass('explore-jobs')"
          @click="navigate('/talent/explore-jobs')"
          href="/talent/explore-jobs"
        >
          Explore Jobs
        </a>
        <a
          :class="getNavClass('my-jobs')"
          @click="navigate('/talent/my-jobs')"
          href="/talent/my-jobs"
        >
          My Jobs
        </a>
      </div>
    </div>

    <div class="hidden lg:flex items-center space-x-6">
      <button
        class="message-btn flex items-center space-x-2 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white"
      >
        <div class="message-icon">
          <img src="/assets/img/message-icon.png" class="w-4" />
        </div>
        <span class="text-sm">Messages</span>
      </button>

      <button
        class="notif-btn flex items-center space-x-2 border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white"
      >
        <div class="notif-icon">
          <img src="/assets/img/notif-icon.png" class="w-3" />
        </div>
        <span class="text-sm">Notifications</span>
      </button>

      <!-- Profile Icon -->
      <div class="w-10 h-10 rounded-full bg-gray-300">
        <!-- Profile Picture Placeholder -->
      </div>
    </div>

    <!-- Hamburger Menu Button (Small Screen) -->
    <div class="lg:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div v-if="isMenuOpen" class="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
      <a
        :class="getNavClass('explore-jobs')"
        @click="navigate('explore-jobs')"
        href="#"
        class="block px-4 py-2"
      >
        Explore Jobs
      </a>
      <a
        :class="getNavClass('my-jobs')"
        @click="navigate('my-jobs')"
        href="#"
        class="block px-4 py-2"
      >
        My Jobs
      </a>

      <button
        class="w-full flex justify-start items-center space-x-2 border-t border-gray-200 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black"
      >
        <img src="/assets/img/message-icon.png" class="w-4" />
        <span>Messages</span>
      </button>
      <button
        class="w-full flex justify-start items-center space-x-2 border-t border-gray-200 px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black"
      >
        <img src="/assets/img/notif-icon.png" class="w-4" />
        <span>Notifications</span>
      </button>

      <div
        class="border-t border-gray-200 px-4 py-2 flex items-center space-x-2 text-gray-500 hover:bg-gray-100 hover:text-black"
      >
        <div class="w-6 h-6 rounded-full bg-gray-300"></div>
        <span>Profile</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TalentNavbarComponent',
  data() {
    return {
      isMenuOpen: false
    }
  },
  props: {
    currentPage: {
      type: String,
      required: true
    }
  },
  methods: {
    getNavClass(page) {
      return this.currentPage === page
        ? 'text-black font-semibold lg:border-b-2 lg:border-black pb-1'
        : 'text-gray-400 hover:text-black'
    },
    navigate(page) {
      this.isMenuOpen = false
      console.log('Navigating to', page)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.message-icon img,
.notif-icon img {
  transition: all 0.3s ease;
}

.message-btn:hover img {
  content: url('/assets/img/message-hover-icon.png');
}

.notif-btn:hover img {
  content: url('/assets/img/notif-hover-icon.png');
}
</style>

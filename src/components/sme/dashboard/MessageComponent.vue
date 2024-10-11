<template>
    <div class="p-6 max-w-lg mx-auto bg-white rounded-lg border border-gray-300">
      <header class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>
            Message
        </h2>
        <a href="#" class="text-sm text-[#FEA31B] underline">Mark all as read</a>
      </header>
  
      <div v-for="(message, index) in messages" :key="index" class="flex items-center justify-between border-b py-4">
        <div class="flex items-center">
          <img :src="message.image" alt="Profile" class="w-12 h-12 rounded-full mr-4 object-cover" />
  
          <div>
            <h2 class="font-semibold">{{ message.name }}</h2>
            <p class="text-sm text-gray-500 truncate w-48">{{ message.text }}</p>
          </div>
        </div>
  
        <div class="text-right">
            <p class="text-sm text-gray-400">{{ message.date }}</p>
            <div v-if="message.unreadCount > 0" class="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-orange-200 text-black font-bold text-sm">
                {{ message.unreadCount }}
            </div>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        messages: [
          {
            name: "Sarah Johnson",
            text: "I feel really meet the requirements in here. Can we discuss the pr...",
            date: "Today",
            unreadCount: 2,
            image: "/public/assets/img/profile-pic-6.jpg",
          },
          {
            name: "Michael Green",
            text: "Hello AngelStore, I wanted to inform you that I have success...",
            date: "Today",
            unreadCount: 1,
            image: "/public/assets/img/profile-pic-2.jpg",
          },
          {
            name: "Amanda Lee",
            text: "Dear AngelStore, I wanted to take a moment to express my g...",
            date: "Today",
            unreadCount: 0,
            image: "/public/assets/img/profile-pic-8.jpg",
          },
          {
            name: "Jason Miller",
            text: "I hope you are doing well. I have some questions regarding t...",
            date: "Yesterday",
            unreadCount: 2,
            image: "/public/assets/img/profile-pic-4.jpg",
          }
        ]
      };
    }
  };
</script>
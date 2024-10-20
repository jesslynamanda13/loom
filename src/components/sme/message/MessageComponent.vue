<template>
  <div class="p-4 bg-white rounded-lg flex h-screen">
    <div class="w-1/3 pr-4 shadow rounded-lg">
      <header class="flex justify-between items-center p-2">
        <h2 class="text-lg font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
          </svg>
          Message
        </h2>
        <a href="#" class="text-xs text-[#FEA31B] underline">Mark all as read</a>
      </header>

      <div class="h-screen overflow-y-auto p-2">
        <div v-for="(message, index) in messages" :key="index" class="flex items-center justify-between border-b py-4 cursor-pointer" @click="selectMessage(index)">
          <div class="flex items-center">
            <img :src="message.avatar" alt="Profile" class="w-12 h-12 rounded-full object-cover"/>
            <div>
              <div class="flex flex-row justify-between">
                <h2 class="font-semibold text-sm">{{ message.name }}</h2>
                <p class="text-xs text-gray-400 text-right">{{ message.time }}</p>
              </div>
              <div class="flex items-center space-x-12">
                <p class="text-xs text-gray-500 truncate w-36">{{ message.lastMessage }}</p>
                <div v-if="message.unread > 0" class="w-5 h-5 rounded-full bg-orange-200 text-black text-xs flex items-center justify-center font-bold">
                  {{ message.unread }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-2/3 bg-gray-100 flex flex-col">
      <div class="bg-white p-4 flex items-center justify-between">
        <div class="flex items-center">
          <img :src="selectedMessage.avatar" alt="Profile" class="w-12 h-12 rounded-full mr-4 object-cover"/>
          <div>
            <h3 class="font-semibold">{{ selectedMessage.name }}</h3>
            <p class="text-xs text-gray-500">{{ selectedMessage.email }}</p>
          </div>
        </div>
      </div>

      <div class="flex-1 p-4 bg-gray-50 overflow-y-auto">
        <div v-for="(message, index) in selectedMessage.conversation" :key="index" class="mb-6">
          <p class="text-gray-400 text-xs mb-5 text-center">{{ message.date }}</p>
          <div class="bg-white p-4 rounded-lg shadow-md max-w-md">
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>

      <div class="p-4 bg-white border-t flex items-center">
        <div class="cursor-pointer flex items-center bg-white px-2 py-2 rounded-md gap-2 hover:bg-gray-100 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />          </svg>
        </div>
        <input type="text" placeholder="Send your message..." class="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-orange-300"/>
        <button class="ml-4 p-3 bg-orange-400 text-white rounded-full hover:bg-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'MessageComponent',
    data() {
      return {
        messages: [
          {
            avatar: '/public/assets/img/profile-pic-6.jpg',
            name: 'Sarah Johnson',
            lastMessage: 'Good Afternoon, Brodo. I am Sarah Johnson...',
            time: 'Today',
            email: 'sarah.johnson@gmail.com',
            unread: 2,
            conversation: [
              { date: 'Thursday, 3 October 2024', text: 'Good Afternoon, Brodo, I am Sarah Johnson, and I wanted to reach out to express my appreciation for your brand. I recently purchased a pair of shoes from Brodo, and I am beyond impressed with the quality and comfort they provide. It\'s rare to find a product that seamlessly combines style and durability, and I believe Brodo has mastered that balance.' }
            ]
          },
          {
            avatar: '/public/assets/img/profile-pic-2.jpg',
            name: 'Michael Green',
            lastMessage: 'Hello Brodo, I wanted to inform you that...',
            time: 'Today',
            email: 'michael.green@gmail.com',
            unread: 1,
            conversation: [
              { date: 'Thursday, 3 October 2024', text: 'Hello Brodo, I wanted to inform you that I recently submitted my application for the Web Developer at your company and wanted to express my enthusiasm for the opportunity to be a part of the Brodo team. I’ve long admired your brand for its innovation, quality, and dedication to craftsmanship, and I believe my skills and passion for the industry align well with the goals and values of Brodo.' }
            ]
          },
          {
            avatar: '/public/assets/img/profile-pic-8.jpg',
            name: 'Amanda Lee',
            lastMessage: 'Dear Brodo, I wanted to take a moment...',
            time: 'Today',
            email: 'amanda.lee@gmail.com',
            unread: 3,
            conversation: [
              { date: 'Thursday, 3 October 2024', text: 'Dear Brodo, I wanted to take a moment to express my gratitude for the excellent service and quality products that your team consistently delivers. As a loyal customer, I have always appreciated the attention to detail and craftsmanship that goes into every pair of shoes I’ve purchased from you.' }
            ]
          },
          {
            avatar: '/public/assets/img/profile-pic-4.jpg',
            name: 'Jason Miller',
            lastMessage: 'I hope you are doing well. I have some questions regarding t...',
            time: 'Yesterday',
            email: 'jason.miller@gmail.com',
            unread: 1,
            conversation: [
              { date: 'Thursday, 3 October 2024', text: 'I hope you are doing well. I have some questions regarding the project we discussed earlier. I wanted to clarify a few details to ensure everything is aligned with the expectations and goals we\'ve set. First, could you provide more insight into the overall timeline and any specific milestones we should be aware of? This will help in better managing the deadlines and ensuring that each phase of the project runs smoothly.' }
            ]
          },
        ],
        selectedMessage: {}
      };
    },
    mounted() {
      this.selectedMessage = this.messages[0];
    },
    methods: {
      selectMessage(index) {
        this.selectedMessage = this.messages[index];
      }
    }
  };
</script>
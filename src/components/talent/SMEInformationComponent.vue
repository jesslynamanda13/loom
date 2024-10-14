<template>
  <div class="bg-white border border-gray-200 px-6 py-8 rounded-lg">
    <div class="flex flex-row justify-between items-start gap-4">
      <div class="sme-name flex flex-col items-start">
        <img :src="companyLogo" alt="" class="w-16 h-16" />
      </div>
      <div class="flex flex-row space-x-4">
        <button
          :class="status === 'Active' ? 'bg-green-200' : 'bg-red-200'"
          class="text-black text-sm px-4 rounded-lg w-auto flex items-center"
        >
          <span
            :class="status === 'Active' ? 'bg-green-500' : 'bg-red-500'"
            class="w-2 h-2 rounded-full inline-block mr-2"
          ></span>
          {{ status }}
        </button>
        <button
          class="text-xs border border-black bg-white text-black justify-center font-semibold px-6 py-2 rounded-md hover:bg-gray-100 flex items-center w-full"
        >
          <img src="/assets/img/message-icon.png" class="w-4 mr-2" alt="Chat Icon" />
          Message
        </button>
      </div>
    </div>
    <div class="sub-title">
      <h3 class="mt-2 text-lg font-semibold">{{ companyName }}</h3>
      <p class="text-gray-500 text-xs">{{ companyTagline }}</p>
      <p class="text-black mt-2 text-sm">{{ companyDescription }}</p>
    </div>
    <div class="my-6">
      <div class="border-t border-gray-200"></div>
    </div>
    <div class="contact-info">
      <p class="text-lg font-semibold mb-4">Contact Information</p>
      <div class="flex flex-row justify-between">
        <div class="email flex flex-row space-x-2 items-center">
          <img src="/assets/img/email-icon.png" alt="" class="w-5 h-5" />
          <p class="text-sm">{{ email }}</p>
        </div>
        <div class="social-media flex flex-row space-x-2 items-center">
          <img src="/assets/img/social-media-icon.png" alt="" class="w-5 h-5" />
          <p class="text-sm">{{ website }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SMEInformation',
  props: {
    companyLogo: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    companyName: {
      type: String,
      required: true
    },
    companyTagline: {
      type: String,
      required: true
    },
    companyDescription: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="bg-white rounded-md border border-gray-200 px-6 py-8 max-w-max">
    <div class="content">
      <div class="title flex flex-row justify-between align-top items-start">
        <div class="text-content">
          <p class="text-xl font-bold">Apply to "Mobile Developer"</p>
          <p class="mt-2 text-gray-400">Posted by Tenue d'Attire</p>
        </div>
        <button @click="closeModal" class="mr-4">
          <img src="/assets/img/exit-icon.png" class="w-3 h-3" alt="Exit" />
        </button>
      </div>
      <div class="my-6">
        <div class="border-t border-gray-200"></div>
      </div>

      <div class="lower-content px-6 h-[500px] overflow-y-auto" v-if="step !== 'submitResult'">
        <div class="review-profile flex flex-row align-middle items-center">
          <img src="/assets/img/review-profile-icon.png" class="w-5 h-5 mr-2" alt="" />
          <p class="text-xl font-bold">Review your profile</p>
        </div>
        <!-- Contact Information Section -->
        <div v-if="step === 'contactInfo'">
          <div class="mt-4 contact-information">
            <p class="text-lg font-semibold">Contact Information</p>
            <p class="mt-1 text-gray-400 text-sm">
              This will be how recruiters view your information. Make sure you input your
              information correctly.
            </p>
            <!-- Profile Card -->
            <div
              class="mt-6 profile-card flex flex-row justify-between align-top border border-gray-200 rounded-md px-6 py-4"
            >
              <div class="flex flex-row space-x-4 align-middle items-center">
                <img src="/assets/img/profile-pic-1.jpg" class="w-16 h-16" alt="" />
                <div class="information flex flex-col space-y-1">
                  <p class="font-bold text-lg">Christopher Verrell</p>
                  <p class="text-md">
                    Hi, I’m a mobile developer and web designer 👋🏻 I develop with Flutter and React.
                  </p>
                  <div class="flex flex-row space-x-2 align-middle items-center">
                    <img src="/assets/img/location-icon.png" class="w-3 h-4" alt="" />
                    <p class="text-sm">Based in Jakarta</p>
                  </div>
                </div>
              </div>
              <div class="edit-icon">
                <img src="/assets/img/edit-icon.png" class="w-6 h-6" alt="" />
              </div>
            </div>
          </div>

          <div class="email flex flex-col space-y-4 mt-6">
            <p class="text-lg font-semibold">Email</p>
            <div class="relative">
              <input
                type="email"
                value="christopher@gmail.com"
                class="border border-gray-200 rounded-md px-6 py-4 w-full"
              />
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                <img src="/assets/img/edit-icon.png" class="w-6 h-6" alt="" />
              </span>
            </div>
          </div>

          <div class="phone-number flex flex-col space-y-4 mt-6">
            <p class="text-lg font-semibold">Phone Number</p>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"
                >+62</span
              >
              <input
                type="string"
                value="8123456789"
                class="border border-gray-200 rounded-md px-12 py-4 w-full pl-16"
                placeholder="Enter phone number"
              />
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                <img src="/assets/img/edit-icon.png" class="w-6 h-6" alt="" />
              </span>
            </div>
          </div>

          <div class="actions mt-8 flex justify-end items-end">
            <button
              @click="goToNext"
              class="text-sm bg-black text-white font-medium py-4 px-10 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>

        <div v-if="step === 'cvPortfolio'">
          <div class="mt-4 cv-portfolio w-full">
            <p class="text-lg font-semibold">CV and Portfolio</p>
            <p class="mt-1 text-gray-400 text-sm">
              Upload your latest CV and portfolio so recruiters can review them.
            </p>

            <!-- CV Upload Field -->
            <div class="cv flex flex-col space-y-4 mt-6">
              <p class="text-lg font-semibold">CV Link</p>
              <div class="relative">
                <input
                  type="string"
                  value="https://drive.google.com/123"
                  class="border border-gray-200 rounded-md px-6 py-4 w-full"
                />
                <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                  <img src="/assets/img/edit-icon.png" class="w-6 h-6" alt="" />
                </span>
              </div>
            </div>
            <div class="mt-6 flex flex-col space-y-4">
              <div class="flex flex-col space-y-2">
                <p class="text-lg font-semibold">Portfolio</p>
                <PortfolioCardComponent
                  title="Libeery - Mobile App"
                  description="Libeery allows Binusians to efficiently manage their library needs by reserving lockers for immediate or future use."
                  imageSrc="/assets/img/port-img.png"
                  link="https://libeery.com"
                />
              </div>
            </div>

            <div class="actions mt-8 flex flex-row space-x-4 justify-end items-end">
              <button
                @click="goBack"
                class="text-sm bg-white text-black font-medium py-3 px-10 rounded-lg border-black border-2"
              >
                Back
              </button>
              <button
                @click="submitApplication"
                class="text-sm bg-black text-white font-medium py-3 px-10 rounded-lg border-black border-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="step === 'submitResult'">
      <div class="message mt-6 flex flex-col justify-center items-center px-36 py-24">
        <img src="/assets/img/success-application.png" class="w-28 h-auto" alt="Success" />
        <p class="mt-8 font-semibold text-xl">Your application has been sent!</p>
        <p class="font-semibold text-xl">
          You can view your application in the
          <a href="/talent/my-jobs" class="font-bold underline">My Jobs</a> section.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCardComponent from '../profile/PortfolioCardComponent.vue'

export default {
  name: 'JobApplicationModalComponent',
  components: {
    PortfolioCardComponent
  },
  data() {
    return {
      step: 'contactInfo',
      submitSuccess: false
    }
  },
  methods: {
    goToNext() {
      this.step = 'cvPortfolio'
    },
    goBack() {
      this.step = 'contactInfo'
    },
    submitApplication() {
      this.step = 'submitResult'
      console.log('Submitting application...')
      this.submitSuccess = true
    },
    closeModal() {
      this.$emit('closeModal')
      this.resetForm() // Reset the form when closing
    },
    resetForm() {
      this.step = 'contactInfo' // Reset to initial step
      this.submitSuccess = false // Reset success state
    }
  }
}
</script>

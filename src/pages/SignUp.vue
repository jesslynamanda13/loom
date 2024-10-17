<template>
  <div class="whole">
    <div class="successmessage p-4 px-56">
      <div
        v-if="successMessage"
        id="alert-1"
        class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50"
        role="alert"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.707 5.293a1 1 0 0 0-1.414 0L9 11.586 5.707 8.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414Z"
          />
        </svg>
        <span class="sr-only">Success</span>
        <div class="ms-3 text-sm font-medium">
          {{ successMessage }}
        </div>
        <button
          @click="dismissSuccessMessage"
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#alert-1"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="errormessage p-4 px-56">
      <div
        v-if="errorMessage"
        id="alert-2"
        class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50"
        role="alert"
      >
        <svg
          class="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
          />
        </svg>
        <span class="sr-only">Info</span>
        <div class="ms-3 text-sm font-medium">
          {{ errorMessage }}
        </div>
        <button
          @click="dismissErrorMessage"
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8"
          data-dismiss-target="#alert-2"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex flex-row gap-2 items-center">
      <div class="image">
        <transition name="fade">
          <img
            :key="imageSource"
            :src="imageSource"
            alt="sign-up-asset"
            class="h-screen object-cover w-full"
          />
        </transition>
      </div>
      <div class="sign-up-components px-12">
        <div class="text-title font-bold text-3xl">
          <p>Create New Account<span class="text-red-800">.</span></p>
        </div>
        <div class="mt-2 text-sub text-gray-400 text-sm">
          <p>
            Connect with freelance opportunities, flexible part-time jobs, and MSME partnerships.
          </p>
        </div>
        <div class="mt-8 form">
          <div class="role">
            <div class="text-left">
              <select
                v-model="selectedRole"
                :class="computedClasses"
                class="block w-full px-4 py-2 rounded-md"
              >
                <option value="talent" class="bg-white text-black">I am a talent</option>
                <option value="sme-owner" class="bg-white text-black">I am a SME owner</option>
              </select>
            </div>
          </div>
          <div class="name mt-6">
            <label
              v-if="selectedRole === 'talent'"
              for="name"
              class="block text-sm font-medium text-gray-700"
              >Full Name</label
            >
            <label v-else for="businessName" class="block text-sm font-medium text-gray-700"
              >Business Name</label
            >

            <div class="mt-2 relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                v-model="name"
                @input="clearErrorMessage"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                :placeholder="selectedRole === 'talent' ? 'Bayu Ario' : 'ABC Studio'"
              />
            </div>
          </div>

          <div class="email">
            <label
              v-if="selectedRole === 'talent'"
              for="email"
              class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <label v-else for="businessEmail" class="block text-sm font-medium text-gray-700"
              >Business Email</label
            >
            <div class="mt-2 relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path
                    d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                  />
                  <path
                    d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="email"
                name="email"
                @input="clearErrorMessage"
                v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                :placeholder="
                  selectedRole === 'talent' ? 'bayuario@email.com' : 'abcstudio@email.com'
                "
              />
            </div>
          </div>

          <div class="password">
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-2 relative mb-6">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17 8h-1V6a5 5 0 0 0-10 0v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Zm-8-2a3 3 0 0 1 6 0v2H9V6Zm9 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8Zm-6-3v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z"
                  />
                </svg>
              </div>
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                name="password"
                @input="clearErrorMessage"
                v-model="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5"
                placeholder="******"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                <button type="button" @click="togglePasswordVisibility" class="focus:outline-none">
                  <svg
                    v-if="showPassword"
                    class="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.246.895-.62 1.732-1.096 2.465m-2.414 2.136A9.956 9.956 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 011.096-2.465m2.414-2.136A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A9.956 9.956 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 011.096-2.465m2.414-2.136A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.956 9.956 0 01-1.096 2.465m-2.414 2.136L4.929 4.929"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.875 12a3 3 0 104.125 0 3 3 0 00-4.125 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              @click="validateForm"
              class="mt-4 w-full bg-black text-white text-sm font-medium py-4 px-10 rounded-lg"
            >
              Sign up
            </button>
          </div>
          <div class="sign-up justify-center align-middle items-center flex flex-col">
            <p class="text-xs mt-8 align-middle">
              Already have an account?
              <a href="/login"><span class="font-bold text-red-800 underline">Login now!</span></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { RegisterSMEDTO } from '@/models/MsSMEOwner'
import { RegisterTalentDTO } from '@/models/MsTalent'
import SMEService from '@/services/SMEService'
import TalentService from '@/services/TalentService'

export default {
  name: 'SignUp',
  data() {
    return {
      showPassword: false,
      selectedRole: 'talent',
      name: '',
      email: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    }
  },
  computed: {
    computedClasses() {
      return this.selectedRole === 'talent'
        ? 'bg-[#FFF1E2] text-[#FEA31B]'
        : 'bg-[#FFECEC] text-[#9D0000]'
    },
    imageSource() {
      return this.selectedRole === 'talent'
        ? '/assets/img/sign-up-talent-asset.png'
        : '/assets/img/sign-up-SME-asset.png'
    }
  },
  methods: {
    dismissErrorMessage() {
      this.errorMessage = ''
    },
    clearErrorMessage() {
      this.errorMessage = ''
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },

    validateForm() {
      console.log(this.name, this.email, this.password, this.selectedRole)
      if (!this.name || !this.email || !this.password) {
        this.errorMessage = 'Please fill in all fields before submitting.'
        return
      }

      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{6,}$/

      if (!passwordRegex.test(this.password)) {
        this.errorMessage =
          'Password must be at least 6 characters, include one capital letter, and one number.'
        return
      }

      if (this.selectedRole === 'talent') {
        this.registerTalentDTO = new RegisterTalentDTO(this.name, this.email, this.password)
        this.registerTalent(this.registerTalentDTO)
      } else if (this.selectedRole === 'sme-owner') {
        this.registerSMEDTO = new RegisterSMEDTO(this.name, this.email, this.password)
        this.registerSmeOwner(this.registerSMEDTO)
      }
    },
    async registerSmeOwner(registerSMEDTO) {
      try {
        const response = await SMEService.registerSME(registerSMEDTO)
        if (response['data']['StatusCode'] == 200) {
          this.successMessage = 'Sign-up successful! You will be redirected soon to login.'
          setTimeout(() => {
            this.$router.push('/login')
          }, 3000)
        } else {
          this.errorMessage = response['data']['Message']
        }
      } catch (error) {
        const errorReceived = error.response['data']['Message']
        this.errorMessage = errorReceived
      }
    },
    async registerTalent(registerTalentDTO) {
      try {
        const response = await TalentService.registerTalent(registerTalentDTO)
        if (response['data']['StatusCode'] == 200) {
          this.successMessage = 'Sign-up successful! You will be redirected soon to login.'
          setTimeout(() => {
            this.$router.push('/login')
          }, 3000)
        } else {
          this.errorMessage = response['data']['Message']
        }
      } catch (error) {
        const errorReceived = error.response['data']['Message']
        this.errorMessage = errorReceived
      }
    }
  }
}
</script>

<style scoped>
.successmessage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.errormessage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease; /* Adjust the duration as needed */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

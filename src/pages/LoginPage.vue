<template>
  <div class="whole">
    <div class="errormessage p-4 px-56">
      <ErrorMessage v-if="errorMessage" :errorMessage="errorMessage" @dismiss="clearErrorMessage" />
    </div>
    <div class="flex flex-row gap-2 items-center">
      <div class="image w-1/2">
        <img
          src="/assets/img/login-asset.png"
          alt="login-asset"
          class="h-screen object-cover w-full"
        />
      </div>
      <div class="login-components px-12">
        <div class="text-title font-bold text-3xl">
          <p>Log in to Loom<span class="text-red-800">.</span></p>
        </div>
        <div class="mt-2 text-sub text-gray-400 text-sm">
          <p>Continue your journey at Loom by connecting with top talent and businesses.</p>
        </div>
        <div class="mt-8 form">
          <!-- Email Input -->
          <div class="email">
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
                placeholder="loom@email.com"
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
                v-model="password"
                @input="clearErrorMessage"
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
          </div>
          <button
            @click="validateForm"
            class="mt-4 w-full bg-black text-white text-sm font-medium py-4 px-10 rounded-lg"
          >
            Login
          </button>
          <div class="sign-up justify-center align-middle items-center flex flex-col">
            <p class="text-xs mt-8 align-middle">
              New to Loom?
              <span class="font-bold text-red-800 underline"
                ><a href="/sign-up">Sign up here!</a></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SMEService from '@/services/SMEService'
import TalentService from '@/services/TalentService'
import UserService from '@/services/UserService'
import ErrorMessage from '@/components/notification/ErrorMessage.vue'
export default {
  name: 'LoginPage',
  components: {
    ErrorMessage
  },
  data() {
    return {
      showPassword: false,
      email: '',
      password: '',
      errorMessage: ''
    }
  },

  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    dismissErrorMessage() {
      this.errorMessage = ''
    },
    clearErrorMessage() {
      this.errorMessage = ''
    },
    async validateForm() {
      console.log('clicked')
      console.log(this.email, this.password)
      if (!this.email || !this.password) {
        this.errorMessage = 'Please fill in all fields before submitting.'
        return
      }

      const LoginTalentDTO = {
        email: this.email,
        password: this.password
      }

      var role = ''
      try {
        const response = await UserService.getUserRole(this.email)
        role = response['data']['role']
      } catch (error) {
        this.errorMessage = "Account doesn't exist! Please sign up before logging in."
      }
      console.log(role)
      if (role == 'Talent') {
        this.loginTalent(LoginTalentDTO)
      } else if (role == 'SME') {
        this.loginSME(LoginTalentDTO)
      }
    },
    async loginSME(LoginSMEDTO) {
      try {
        const response = await SMEService.loginSME(LoginSMEDTO)
        if (response['data']['StatusCode'] == 200) {
          var token = response['data']['Token']
          localStorage.setItem('authToken', token)
          this.$router.push('/sme/dashboard')
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.'
        }
      } catch (error) {
        console.error('Login failed:', error)
        this.errorMessage = 'Login failed. Please check your credentials.'
      }
    },
    async loginTalent(LoginTalentDTO) {
      try {
        const response = await TalentService.loginTalent(LoginTalentDTO)
        if (response['data']['StatusCode'] == 200) {
          var token = response['data']['Token']
          localStorage.setItem('authToken', token)
          this.$router.push('/talent/explore-jobs')
        } else {
          this.errorMessage = 'Login failed. Please check your credentials.'
        }
      } catch (error) {
        console.error('Login failed:', error)
        this.errorMessage = 'Login failed. Please check your credentials.'
      }
    }
  }
}
</script>

<style scoped>
.errormessage {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
</style>

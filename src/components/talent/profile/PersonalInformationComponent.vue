<template>
  <div class="content flex flex-col">
    <div class="container mt-4 bg-white border border-gray-200 rounded-lg py-6 px-8">
      <div class="personal-information">
        <div class="title">
          <p class="font-bold text-lg">Personal Information</p>
          <p class="mt-2 text-sm text-gray-600">
            Make it easy for employers to get in touch and learn more about you. Provide accurate
            and up-to-date personal information.
          </p>
        </div>
        <div class="information">
          <div class="fullname flex flex-col space-y-4 mt-6">
            <p class="text-sm">Full Name</p>
            <div class="relative">
              <input
                type="text"
                v-model="localFullName"
                @input="checkChanges"
                class="border border-gray-200 rounded-md px-4 py-2 w-full"
                placeholder="Enter full name"
              />
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
              </span>
            </div>
          </div>

          <div class="email flex flex-col space-y-4 mt-6">
            <p class="text-sm">Email</p>
            <div class="relative">
              <input
                type="text"
                v-model="localEmail"
                @input="checkChanges"
                class="border border-gray-200 rounded-md px-4 py-2 w-full"
                placeholder="Enter email"
              />
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
              </span>
            </div>
          </div>

          <div class="phone-number flex flex-col space-y-4 mt-6">
            <p class="text-sm">Phone Number</p>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500"
                >+62</span
              >
              <input
                type="text"
                v-model="localPhoneNumber"
                @input="checkChanges"
                class="border border-gray-200 rounded-md px-8 py-2 w-full pl-16"
                placeholder="Enter phone number"
              />
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="save-changes-button mt-8 justify-end items-end flex">
        <button
          :class="
            hasChanges ? 'bg-black text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          "
          :disabled="!hasChanges"
          @click="saveChanges"
          v-if="hasChanges"
          class="rounded-md px-6 py-4 text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { EditPersonalInformationTalentDTO } from '@/models/MsTalent'
import TalentService from '@/services/TalentService'

export default {
  name: 'PersonalInformationComponent',
  props: {
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      localFullName: this.fullName,
      localEmail: this.email,
      localPhoneNumber: this.phoneNumber,
      hasChanges: false
    }
  },
  watch: {
    fullName(newVal) {
      this.localFullName = newVal
    },
    email(newVal) {
      this.localEmail = newVal
    },
    phoneNumber(newVal) {
      this.localPhoneNumber = newVal
    }
  },
  methods: {
    checkChanges() {
      this.hasChanges =
        this.localFullName !== this.fullName ||
        this.localEmail !== this.email ||
        this.localPhoneNumber !== this.phoneNumber
    },
    async saveChanges() {
      this.$emit('update:fullName', this.localFullName)
      this.$emit('update:email', this.localEmail)
      this.$emit('update:phoneNumber', this.localPhoneNumber)

      const request = new EditPersonalInformationTalentDTO(
        this.localFullName,
        this.localEmail,
        this.localPhoneNumber
      )

      const response = await TalentService.editProfile(request)
      if (response.status === 200) {
        this.hasChanges = false
        this.$emit('changes-saved')
      } else {
        this.$emit('show-warning', 'Failed to save changes')
      }
    }
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.mb-4 {
  margin-bottom: 1rem;
}
</style>

<template>
  <div class="content flex flex-col">
    <div class="container mt-4 bg-white border border-gray-200 rounded-lg py-6 px-8">
      <div class="personal-information">
        <div class="title">
          <p class="font-bold text-lg">Personal Information</p>
        </div>
        <div class="information">
          <div class="fullname flex flex-col space-y-4 mt-6">
            <p class="text-sm">Full Name</p>
            <div class="relative">
              <input
                type="string"
                v-model="fullName"
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
                type="string"
                v-model="email"
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
                type="string"
                v-model="phoneNumber"
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
export default {
  name: 'PersonalInformationComponent',
  data() {
    return {
      fullName: 'Christopher Verrell',
      email: 'christopher@gmail.com',
      phoneNumber: '8123456789',
      originalData: {
        fullName: 'Christopher Verrell',
        email: 'christopher@gmail.com',
        phoneNumber: '8123456789'
      },
      hasChanges: false
    }
  },
  methods: {
    checkChanges() {
      this.hasChanges =
        this.fullName !== this.originalData.fullName ||
        this.email !== this.originalData.email ||
        this.phoneNumber !== this.originalData.phoneNumber
    },
    saveChanges() {
      this.originalData = {
        fullName: this.fullName,
        email: this.email,
        phoneNumber: this.phoneNumber
      }
      this.hasChanges = false
      alert('Changes saved!') // For demonstration purposes
    },
    toggleEditingName() {
      // Add functionality if needed for additional editing behavior
    },
    toggleEditingEmail() {
      // Add functionality if needed for additional editing behavior
    },
    toggleEditingPhone() {
      // Add functionality if needed for additional editing behavior
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

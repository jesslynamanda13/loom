<template>
  <div class="content flex flex-col">
    <div class="container bg-white border border-gray-200 rounded-lg py-6 px-8">
      <div class="profile-information">
        <div class="title">
          <p class="font-bold text-lg">Display Profile</p>
        </div>
        <div class="mt-6 flex flex-row space-x-4 items-start">
          <img id="profile-picture" src="/assets/img/profile-pic-1.jpg" class="w-16 h-18" alt="" />
          <div class="information flex flex-col w-full">
            <p class="font-bold text-lg">{{ fullName }}</p>
            <div class="bio mt-2 flex flex-col space-y-2">
              <p class="text-sm">Bio</p>
              <div class="relative">
                <div>
                  <textarea
                    v-model="bio"
                    @input="checkChanges"
                    @focus="editingBio = true"
                    @blur="editingBio = false"
                    :maxlength="100"
                    class="border border-gray-200 rounded-md px-4 py-2 w-full h-full"
                    placeholder="Enter your bio"
                  ></textarea>
                  <p v-if="editingBio" class="text-xs text-red-500">
                    {{ remainingCharacters }} characters remaining
                  </p>
                </div>
                <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                  <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
                </span>
              </div>
            </div>

            <div class="location flex flex-col space-y-2 mt-4">
              <p class="text-sm">Location</p>
              <div class="relative">
                <div class="relative">
                  <input
                    type="text"
                    v-model="location"
                    @input="checkChanges"
                    class="border border-gray-200 rounded-md px-4 py-2 w-full"
                    placeholder="Enter your location"
                  />
                  <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                    <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
                  </span>
                </div>
              </div>
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
  name: 'TalentProfileComponent',
  props: {
    fullName: {
      type: String,
      required: true
    },
    initialBio: {
      type: String,
      required: true
    },
    initialLocation: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      bio: this.initialBio,
      location: this.initialLocation,
      originalData: {
        bio: this.initialBio,
        location: this.initialLocation
      },
      hasChanges: false,
      editingBio: false
    }
  },
  computed: {
    remainingCharacters() {
      return 100 - this.bio.length
    }
  },
  methods: {
    checkChanges() {
      this.hasChanges =
        this.bio !== this.originalData.bio || this.location !== this.originalData.location
    },
    saveChanges() {
      this.originalData = {
        bio: this.bio,
        location: this.location
      }
      this.hasChanges = false
      alert('Changes saved!') // For demonstration purposes
    }
  }
}
</script>

<template>
  <div class="content flex flex-col">
    <div class="container bg-white border border-gray-200 rounded-lg py-6 px-8">
      <div class="profile-information">
        <div class="title flex flex-col space-y-2">
          <p class="font-bold text-lg">CV (Curriculum Vitae)</p>
          <p class="text-sm text-gray-600">
            Provide a file containing short written summary of your career, qualifications, and
            education.
          </p>
        </div>

        <div class="mt-6 relative">
          <input
            type="text"
            v-model="localCV"
            @input="checkChanges"
            class="border border-gray-200 rounded-md px-4 py-2 w-full"
            placeholder="Attach your CV link here"
          />
          <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
            <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
          </span>
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
import { EditCVTalentDTO } from '@/models/MsTalent'
import TalentService from '@/services/TalentService'

export default {
  name: 'TalentCVComponent',
  props: {
    initialCV: {
      type: String,
      required: true
    }
  },
  watch: {
    initialCV(newValue) {
      this.localCV = newValue
    }
  },
  data() {
    return {
      localCV: this.initialCV
    }
  },
  methods: {
    checkChanges() {
      this.hasChanges = this.localCV !== this.initialCV
    },
    async saveChanges() {
      this.$emit('update:initialCV', this.localCV)

      const request = new EditCVTalentDTO(this.localCV)
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

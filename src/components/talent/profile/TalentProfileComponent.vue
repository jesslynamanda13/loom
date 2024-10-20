<template>
  <div class="content flex flex-col">
    <div class="container bg-white border border-gray-200 rounded-lg py-6 px-8">
      <div class="profile-information">
        <div class="title">
          <p class="font-bold text-lg">Display Profile</p>
        </div>
        <div class="mt-6 flex flex-row space-x-4 items-start">
          <img
            id="profile-picture"
            src="/assets/img/template-profile-pic.png"
            class="w-16 h-16"
            alt=""
          />
          <div class="information flex flex-col w-full">
            <p class="font-bold text-lg">{{ fullName }}</p>

            <div class="bio mt-2 flex flex-col space-y-2">
              <p class="text-sm">Bio</p>
              <div class="relative">
                <textarea
                  v-model="bio"
                  @input="checkChanges"
                  @focus="editingBio = true"
                  @blur="editingBio = false"
                  :maxlength="100"
                  class="border border-gray-200 rounded-md px-4 py-2 w-full"
                  placeholder="Enter your bio"
                ></textarea>
                <p v-if="editingBio" class="text-xs text-red-500">
                  {{ remainingCharacters }} characters remaining
                </p>
                <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
                  <img src="/assets/img/edit-icon.png" class="w-4 h-4" alt="" />
                </span>
              </div>
            </div>

            <!-- <div class="skills mt-4" v-if="availableSkills">
              <label class="block text-sm font-medium mb-1" for="skills">Skills</label>
              <div class="mt-2">
                <multiselect
                  v-model="selectedSkills"
                  :options="skillNames"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Pick your skills"
                  label="SkillName"
                  track-by="SkillID"
                  class="multiselect-custom"
                >
                  <template v-slot:selection="{ values, isOpen }">
                    <span v-if="values.length && !isOpen" class="multiselect__single">
                      {{ values.length }} skills selected
                    </span>
                  </template>
                </multiselect>
              </div>

              <div class="mt-2 flex flex-wrap items-center gap-2">
                <span
                  v-for="(skill, index) in selectedSkills"
                  :key="index"
                  class="bg-orange-100 text-red-700 px-3 py-1 rounded-lg mr-2"
                >
                  {{ skill.SkillName }}
                  <button @click="removeTag(skill)" class="ml-2 text-gray-400 focus:outline-none">
                    x
                  </button>
                </span>
              </div>
            </div> -->
            <div class="mt-4 location flex flex-col space-y-2">
              <p class="text-sm">Location</p>
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

      <!-- Save Changes Button -->
      <div class="save-changes-button mt-8 flex justify-end">
        <button
          v-if="hasChanges"
          :class="
            hasChanges ? 'bg-black text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          "
          :disabled="!hasChanges"
          @click="saveChanges"
          class="rounded-md px-6 py-4 text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { EditDisplayProfileTalentDTO } from '@/models/MsTalent'
import TalentService from '@/services/TalentService'

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
    },
    initialSkills: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      newTag: '',
      bio: this.initialBio,
      location: this.initialLocation,
      originalData: {
        bio: this.initialBio,
        location: this.initialLocation
      },
      selectedSkill: '',
      hasChanges: false,
      editingBio: false,
      skills: this.initialSkills,
      availableSkills: []
    }
  },
  computed: {
    remainingCharacters() {
      return 100 - this.bio.length
    },

    skillNames() {
      return this.availableSkills.map((skill) => ({
        SkillID: skill.SkillID,
        SkillName: skill.SkillName
      }))
    }
  },
  async mounted() {
    await this.getAllSkills()
  },
  methods: {
    checkChanges() {
      this.hasChanges =
        this.bio !== this.originalData.bio || this.location !== this.originalData.location
    },
    async saveChanges() {
      this.originalData = {
        bio: this.bio,
        location: this.location
      }
      this.hasChanges = false

      try {
        var data = new EditDisplayProfileTalentDTO(this.fullName, this.bio, this.location)
        const response = await TalentService.editProfile(data)
        if (response.status === 200) {
          this.$emit('changes-saved')
        }
      } catch (error) {
        console.error('Error saving changes:', error)
      }
    },
    async getAllSkills() {
      const response = await TalentService.getAllSkills()
      console.log('Skills: ', response['data'])
      this.availableSkills = response['data']
    },

    addSkill() {
      if (this.selectedSkill && !this.skills.includes(this.selectedSkill)) {
        this.skills.push(this.selectedSkill)
        this.$emit('update:skills', this.skills)
      }
      this.selectedSkill = ''
    },

    removeTag(skill) {
      this.selectedSkills = this.selectedSkills.filter(
        (selectedSkill) => selectedSkill.SkillID !== skill.SkillID
      )
    }
  }
}
</script>
<style scoped>
.multiselect-custom {
  width: auto;
  max-width: 300px;
}
</style>

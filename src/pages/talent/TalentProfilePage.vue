<template>
  <div class="flex flex-col">
    <TalentNavbarComponent />
    <div class="flex flex-row mt-12 px-20 space-x-12">
      <div
        class="side-bar bg-white border border-gray-300 rounded-lg flex flex-col py-8 px-12 h-fit space-y-12"
      >
        <div class="nav-links flex flex-col gap-2">
          <p class="font-bold text-black text-lg">Profile</p>
          <p class="font-bold text-gray-400 text-lg">CV & Portfolio</p>
          <p class="font-bold text-gray-400 text-lg">Past applications</p>
        </div>
        <div class="logout-button">
          <button
            @click="logout"
            class="bg-red-500 text-white rounded-md px-4 py-2 text-sm font-bold"
          >
            Logout
          </button>
        </div>
      </div>
      <div class="flex flex-col space-y-4 mb-12 flex-grow">
        <p class="text-2xl font-bold">Profile</p>
        <TalentProfileComponent
          :full-name="talentProfile.FullName"
          :initial-bio="bio"
          :initial-location="location"
        />
        <PersonalInformationComponent
          :full-name="talentProfile.FullName"
          :email="talentProfile.Email"
          :phone-number="talentProfile.PhoneNumber"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TalentNavbarComponent from '@/components/talent/navigation/TalentNavbarComponent.vue'
import TalentProfileComponent from '@/components/talent/profile/TalentProfileComponent.vue'
import PersonalInformationComponent from '@/components/talent/profile/PersonalInformationComponent.vue'
import TalentService from '@/services/TalentService'

export default {
  name: 'TalentProfilePage',
  components: {
    TalentNavbarComponent,
    TalentProfileComponent,
    PersonalInformationComponent
  },
  data() {
    return {
      talentProfile: {},
      bio: '',
      location: ''
    }
  },
  async mounted() {
    try {
      const response = await TalentService.getTalentProfile()
      console.log('Talent Profile Response:', response)
      this.talentProfile = response
      this.bio = response.Bio || 'Default bio'
      this.location = response.Location || 'Default location'
    } catch (error) {
      console.error('Error fetching talent profile:', error)
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('authToken')
      this.$router.push('/login')
    }
  }
}
</script>

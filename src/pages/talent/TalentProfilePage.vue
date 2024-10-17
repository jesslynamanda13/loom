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
          <button class="bg-red-500 text-white rounded-md px-4 py-2 text-sm font-bold">
            Logout
          </button>
        </div>
      </div>
      <div class="flex flex-col space-y-4 mb-12 flex-grow">
        <p class="text-2xl font-bold">Profile</p>
        <TalentProfileComponent />
        <PersonalInformationComponent />
      </div>
    </div>
  </div>
</template>

<script>
import TalentNavbarComponent from '@/components/talent/navigation/TalentNavbarComponent.vue'
import TalentProfileComponent from '@/components/talent/profile/TalentProfileComponent.vue'
import PersonalInformationComponent from '@/components/talent/profile/PersonalInformationComponent.vue'
export default {
  name: 'TalentProfilePage',
  components: {
    TalentNavbarComponent,
    TalentProfileComponent,
    PersonalInformationComponent
  }
}
</script>

<template>
  <div>
    <div @click="goToTalentDetail(talent)" class="cursor-pointer bg-white rounded-lg shadow-md p-4 mb-4 flex items-start">
      <div class="w-16 h-16 rounded-md mr-4 relative">
        <img :src="talent.ProfilePicture" alt="Talent Image" class="w-16 h-16 rounded-md object-cover" @error="setDefaultImage">
      </div>
      <div class="flex-1">
        <div class="flex justify-between items-center w-full">
          <h3 class="font-bold text-xl">{{ talent.FullName }}</h3>
          <button @click.stop="toggleFavorite" class="focus:outline-none">
            <svg 
              :class="{'text-orange-400': isFavorited, 'text-white': !isFavorited}" 
              class="w-6 h-6" 
              fill="currentColor" 
              stroke="#FEA31B" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />     
            </svg>
          </button>
        </div>
        
        <div class="flex flex-row items-center">
          <div class="flex flex-wrap my-2" v-if="talent.skills && talent.skills.length > 0">
            <span v-for="skill in talent.skills" :key="skill" class="bg-orange-100 text-red-700 px-5 py-1 rounded-full text-sm mr-2">
              {{ skill }}
            </span>
          </div>
          <div v-else class="text-gray-500">No Skill to be Display</div>
        </div>

        <p class="text-gray-400 mt-2 mb-8 text-sm">{{ talent.Bio || 'No bio available' }}</p>

        <div class="flex justify-between items-center text-gray-400 text-sm">
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />            
            </svg>
            <span>{{ talent.Location || 'No Location Set' }}</span>
          </div>

          <div class="flex items-center">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <span>{{ talent.AvgRating }}</span>
          </div>

          <div class="flex items-center">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="font-bold">{{ talent.HireCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TalentCard',
  props: {
    talent: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      isFavorited: false
    };
  },
  methods: {
    setDefaultImage(event) {
      event.target.src = '/assets/img/default-photo.svg'; 
    },
    goToTalentDetail(talent) {
      this.$emit('show-detail', talent);
    },
    toggleFavorite() {
      this.isFavorited = !this.isFavorited; 
      this.$emit('toggle-favorite', this.talent.TalentID);
    }
  }
};
</script>
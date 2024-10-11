<template>
    <div>
      <div v-for="(talent, index) in filteredTalents" :key="talent.name">
        <div class="bg-white rounded-lg shadow-md p-4 mb-4 flex items-start">
          <div class="w-16 h-16 rounded-md mr-4 relative">
            <img :src="talent.image" alt="Talent Image" class="w-16 h-16 rounded-md object-cover">
          </div>
          <div class="flex-1">
            <div class="flex justify-between items-center">
              <h3 class="font-bold text-xl">{{ talent.name }}</h3>
              <button @click="toggleFavorite(index)" class="focus:outline-none">
                <svg 
                    :class="{'text-orange-400': talent.isFavorited, 'text-gray-400': !talent.isFavorited}" 
                    class="w-6 h-6" 
                    :fill="talent.isFavorited ? '#FEA31B' : 'none'" 
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
              <p class="text-gray-500 bg-white py-1 text-sm rounded-md mr-2">
                {{ talent.title }}
                <span v-if="talent.skills.length > 0"> 
                  • 
                </span>
              </p>
  
              <div class="flex flex-wrap my-2">
                <span v-for="skill in talent.skills" :key="skill" class="bg-orange-100 text-red-700 px-5 py-1 rounded-full text-sm mr-2">
                  {{ skill }}
                </span>
              </div>
            </div>
            <p class="text-gray-400 mb-5 text-sm">{{ talent.description }}</p>
            <div class="flex justify-between items-center text-gray-400 text-sm">
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />            
                            </svg>
                            <span>{{ talent.location }}</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                            <span>{{ talent.jobType }}</span>
                        </div>

                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span>{{ talent.availability }}</span>
                        </div>

                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <span class="font-bold">{{ talent.price }}</span>
                        </div>
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
      filteredTalents: {
        type: Array,
        required: true,
      }
    },
    methods: {
      toggleFavorite(index) {
        this.$emit('toggle-favorite', index);
      }
    }
  };
</script>  
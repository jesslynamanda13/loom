<template>
    <div class="p-6 bg-white rounded-lg border border-gray-300 flex-1 shadow-sm">
      <div class="flex flex-col lg:flex-row items-start lg:items-center mb-6">
        <img :src="talent.ProfilePicture" alt="Talent Image" class="w-16 h-16 mr-5 rounded-md object-cover" @error="setDefaultImage">
        <div class="mt-4 lg:mt-0">
          <h1 class="text-3xl font-bold text-gray-800 flex items-center">
            {{ talent.FullName }} 
            <span class="flex items-center text-orange-300 text-lg font-semibold ml-5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-300" viewBox="0 0 24 24" fill="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              {{ talent.AvgRating }}
            </span>
          </h1>
          <p class="text-yellow-500 text-sm mt-2">{{ talent.Email }}</p>
        </div>
      </div>
  
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">Bio</h2>
        <p class="text-gray-600 leading-relaxed">{{ talent.Bio || 'No Bio'}}</p>
      </div>
  
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">Skills</h2>
        <div class="flex flex-wrap">
          <span
            v-if="talent.Skills === null"
            class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm mr-2"
          >
            N/A
          </span>
          <span
            v-for="skill in talent.Skills"
            :key="skill"
            class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm mr-2"
          >
            {{ skill }}
          </span>
        </div>
      </div>
  
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">Additional Details</h2>
        <ul class="text-black space-y-2">
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <h2 class="font-semibold text-gray-600 mr-2">Location:</h2> {{ talent.Location || 'No Location'}}
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />            </svg>
            <h2 class="font-semibold text-gray-600 mr-2">Phone Number:</h2> {{ talent.PhoneNumber }}
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h2 class="font-semibold text-gray-600 mr-2">Hire Count:</h2> {{ talent.HireCount }}
          </li>
        </ul>
      </div>
  
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">Curriculum Vitae</h2>
        <div class="p-4 bg-gray-100 rounded-lg flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          <a :href="talent.CV" target="_blank" class="text-gray-700 font-semibold hover:underline">
            {{ talent.FullName }}'s Curriculum Vitae
          </a>
        </div>
      </div>
  
      <div class="mb-6">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">Portfolio</h2>
        <div v-if="portfolio.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(item, index) in portfolio" :key="index" class="border p-4 rounded-lg shadow-md">
            <a :href="item.URL" target="_blank" class="block mb-2">
              <img :src="item.CoverImage" alt="Cover Image" class="w-full h-48 object-cover rounded-lg" />
            </a>
            <h3 class="font-semibold text-lg text-gray-800">{{ item.Title }}</h3>
            <p class="text-gray-600 text-xs">{{ item.Description }}</p>
            <a :href="item.ProjectLink" target="_blank" class="text-blue-500 hover:underline">View Project</a>
          </div>
        </div>
        <div v-else class="text-gray-500">No portfolio available.</div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'TalentDetailComponent',
    props: {
      talent: Object,
      portfolio: Array
    },
    methods:{
      setDefaultImage(event) {
        event.target.src = '/assets/img/template-profile-pic.png'; 
      },
    }
  };
</script>
  
<style scoped>
  @media (min-width: 1024px) {
    .lg\:items-center {
      align-items: center;
    }
  
    .lg\:flex-row {
      flex-direction: row;
    }
  
    .lg\:mt-0 {
      margin-top: 0;
    }
  }
</style>
  
<template>
    <div :style="{ width: containerWidth}" class="p-4 bg-white rounded-lg border border-gray-300 flex-1">
        <header class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 mr-2"
                >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Recent Applicants
            </h2>
            <a href="#" class="text-sm" style="color: #FEA31B;">2 new applicants</a>
        </header>
  
        <div class="grid grid-cols-1 gap-4">
            <div
            v-for="applicant in applicants"
            :key="applicant.id"
            class="p-4 bg-gray-50 rounded-lg shadow-md flex justify-between items-center"
            >
            <div class="flex items-center">
                <img :src="applicant.image" alt="Profile Image" class="w-12 h-12 rounded-full mr-4 object-cover" />
                <div class="flex flex-col">
                <p class="text-lg font-semibold">{{ applicant.name }}</p>
                <p class="text-sm" style="color: #FEA31B;">{{ applicant.jobTitle }}</p>
                </div>
            </div>
    
            <button class="bg-orange-200 hover:bg-orange-300 text-black text-sm font-medium py-2 px-4 rounded transition-all">
                View Profile
            </button>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: "RecentApplicants",
    props: {
      containerWidth: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        applicants: [
          {
            id: 1,
            name: "Sarah Johnson",
            jobTitle: "Graphic Designer",
            image: "/public/assets/img/profile-pic-6.jpg",
          },
          {
            id: 2,
            name: "Michael Green",
            jobTitle: "Instagram Admin",
            image: "/public/assets/img/profile-pic-2.jpg",
          },
          {
            id: 3,
            name: "Amanda Lee",
            jobTitle: "Instagram Admin",
            image: "/public/assets/img/profile-pic-8.jpg",
          },
          {
            id: 4,
            name: "Jason Miller",
            jobTitle: "Graphic Designer",
            image: "/public/assets/img/profile-pic-4.jpg",
          },
          {
            id: 5,
            name: "Emily Parker",
            jobTitle: "Graphic Designer",
            image: "/public/assets/img/profile-pic-7.jpg",
          },
          {
            id: 6,
            name: "Clara Dewi",
            jobTitle: "Instagram Admin",
            image: "/public/assets/img/profile-pic-9.jpg",
          },
        ],
      };
    },
  };
</script>  
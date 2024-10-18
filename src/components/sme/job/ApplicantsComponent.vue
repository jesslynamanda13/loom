<template>
    <div class="p-4 bg-white rounded-lg border border-gray-300">
      <header class="mb-4">
        <h2 class="text-lg font-semibold flex items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
            >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Applicants
        </h2>
      </header>
      <div class="flex justify-between items-center mb-4">
        <input
          v-model="searchQuery"
          @keydown.enter="filterCandidates"
          type="text"
          placeholder="Search by name, role, or anything..."
          class="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-orange-300"
        />
        <div class="flex space-x-4">
          <button @click="sortByName" class="flex items-center bg-gray-100 px-4 py-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />            
            </svg>
            Sort by A-Z
        </button>
          <select v-model="filterTime" class="border rounded-md p-2 border-gray-300">
            <option value="30">Last 30 days</option>
            <option value="60">Last 60 days</option>
            <option value="90">Last 90 days</option>
          </select>
        </div>
      </div>
  
      <table class="min-w-full bg-white border">
        <thead>
          <tr class="w-full text-left border-b text-gray-500 text-sm">
            <th class="p-3">Candidates</th>
            <th class="p-3">Applied Role</th>
            <th class="p-3">Contact</th>
            <th class="p-3">Location</th>
            <th class="p-3">Applied Date</th>
            <th class="p-3">Stage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(candidate, index) in paginatedData" :key="index" class="border-b hover:bg-gray-50">
            <td class="p-3 flex items-center space-x-3">
              <img :src="candidate.profilePicture" class="w-8 h-8 rounded-full" alt="Profile Picture" />
              <div>
                <p class="font-medium">{{ candidate.fullName }}</p>
                <p class="text-sm text-gray-500">{{ candidate.email }}</p>
              </div>
            </td>
            <td class="p-3 text-yellow-500">{{ candidate.role }}</td>
            <td class="p-3 text-sm">{{ candidate.contact }}</td>
            <td class="p-3 text-sm">{{ candidate.location }}</td>
            <td class="p-3 text-sm">{{ candidate.appliedDate }}</td>
            <td class="p-3">
                <select 
                    v-model="candidate.stage" 
                    @change="updateStage(candidate)" 
                    class="cursor-pointer px-2 py-1 text-sm rounded-md font-semibold" 
                    :class="stageClass(candidate.stage)" 
                >
                    <option value="Reviewed">Reviewed</option>
                    <option value="Interviewed">Interviewed</option>
                    <option value="Hired">Hired</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-between items-center mt-4">
        <p>Showing {{ start + 1 }} to {{ end }} of {{ candidates.length }} candidates</p>
        <div class="flex space-x-2">
          <button @click="prevPage" :disabled="currentPage === 1" class="flex items-center bg-orange-100 px-4 py-2 rounded-md gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            Prev
          </button>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="flex items-center bg-orange-100 px-4 py-2 rounded-md gap-2">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    name: 'ApplicantsComponent',
    data() {
      return {
        searchQuery: "",
        filterTime: 30,
        candidates: [
            {
                fullName: "Ahmad Pratama",
                email: "ahmad.pratama@gmail.com",
                role: "Instagram Admin",
                contact: "+62 812 3456 7890",
                location: "Jakarta",
                appliedDate: "Oct 4, 2024",
                stage: "Reviewed",
                profilePicture: "/public/assets/img/profile-pic-1.jpg",
            },
            {
                fullName: "Siti Rahmawati",
                email: "siti.rahmawati@gmail.com",
                role: "Instagram Admin",
                contact: "+62 811 2345 9876",
                location: "Bandung",
                appliedDate: "Sep 29, 2024",
                stage: "Interviewed",
                profilePicture: "/public/assets/img/profile-pic-6.jpg",
            },
            {
                fullName: "Budi Santoso",
                email: "budi.santoso@gmail.com",
                role: "Graphic Designer",
                contact: "+62 822 3456 7891",
                location: "Surabaya",
                appliedDate: "Sep 15, 2024",
                stage: "Interviewed",
                profilePicture: "/public/assets/img/profile-pic-2.jpg",
            },
            {
                fullName: "Dewi Ayu",
                email: "dewi.ayu@gmail.com",
                role: "Instagram Admin",
                contact: "+62 813 9876 5432",
                location: "Yogyakarta",
                appliedDate: "Aug 31, 2024",
                stage: "Hired",
                profilePicture: "/public/assets/img/profile-pic-7.jpg",
            },
            {
                fullName: "Rahmat Hidayat",
                email: "rahmat.hidayat@gmail.com",
                role: "Instagram Admin",
                contact: "+62 812 8765 4321",
                location: "Medan",
                appliedDate: "Oct 5, 2024",
                stage: "Reviewed",
                profilePicture: "/public/assets/img/profile-pic-3.jpg",
            },
            {
                fullName: "Fitri Susanti",
                email: "fitri.susanti@gmail.com",
                role: "Instagram Admin",
                contact: "+62 819 2345 6789",
                location: "Malang",
                appliedDate: "Sep 18, 2024",
                stage: "Interviewed",
                profilePicture: "/public/assets/img/profile-pic-8.jpg",
            },
            {
                fullName: "Andi Wijaya",
                email: "andi.wijaya@gmail.com",
                role: "Graphic Designer",
                contact: "+62 821 3456 7890",
                location: "Makassar",
                appliedDate: "Aug 25, 2024",
                stage: "Reviewed",
                profilePicture: "/public/assets/img/profile-pic-4.jpg",
            },
            {
                fullName: "Rina Setiawan",
                email: "rina.setiawan@gmail.com",
                role: "Instagram Admin",
                contact: "+62 814 5678 1234",
                location: "Bali",
                appliedDate: "Jul 19, 2024",
                stage: "Hired",
                profilePicture: "/public/assets/img/profile-pic-9.jpg",
            },
            {
                fullName: "Arif Kurniawan",
                email: "arif.kurniawan@gmail.com",
                role: "Instagram Admin",
                contact: "+62 823 9876 5432",
                location: "Balikpapan",
                appliedDate: "Sep 9, 2024",
                stage: "Reviewed",
                profilePicture: "/public/assets/img/profile-pic-5.jpg",
            },
            {
                fullName: "Nia Safitri",
                email: "nia.safitri@gmail.com",
                role: "Graphic Designer",
                contact: "+62 815 6789 4321",
                location: "Semarang",
                appliedDate: "Oct 1, 2024",
                stage: "Interviewed",
                profilePicture: "/public/assets/img/profile-pic-10.jpg",
            },
            {
                fullName: "Liliana Muthe",
                email: "liliana.muthe@gmail.com",
                role: "Instagram Admin",
                contact: "+62 816 7890 5432",
                location: "Palembang",
                appliedDate: "Aug 22, 2024",
                stage: "Interviewed",
                profilePicture: "/public/assets/img/profile-pic-11.jpg",
            },
            {
                fullName: "Lisa Melati",
                email: "lisa.melati@gmail.com",
                role: "Graphic Designer",
                contact: "+62 818 2345 6789",
                location: "Bogor",
                appliedDate: "Sep 30, 2024",
                stage: "Hired",
                profilePicture: "/public/assets/img/profile-pic-12.jpg",
            },
            {
                fullName: "Susanti Mustia",
                email: "susanti.mustia@gmail.com",
                role: "Instagram Admin",
                contact: "+62 817 5678 1234",
                location: "Pontianak",
                appliedDate: "Jul 25, 2024",
                stage: "Reviewed",
                profilePicture: "/public/assets/img/profile-pic-13.jpg",
            },
        ],
        isSorted: false, 
        currentPage: 1,
        pageSize: 10,
      };
    },
    mounted() {
        this.originalCandidates = [...this.candidates];
    },
    computed: {
      totalPages() {
        return Math.ceil(this.candidates.length / this.pageSize);
      },
      start() {
        return (this.currentPage - 1) * this.pageSize;
      },
      end() {
        return Math.min(this.start + this.pageSize, this.candidates.length);
      },
      paginatedData() {
        return this.candidates.slice(this.start, this.end);
      },
      filteredCandidates() {
        const search = this.searchQuery.toLowerCase().trim();
        if (search === "") {
            return this.originalCandidates;
        }
        return this.originalCandidates.filter(candidate => {
            const fullNameMatches = candidate.fullName && candidate.fullName.toLowerCase().includes(search);
            const roleMatches = candidate.role && candidate.role.toLowerCase().includes(search);
            const stageMatches = candidate.stage && candidate.stage.toLowerCase().includes(search);
            return fullNameMatches || roleMatches || stageMatches;
        });
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      },
      stageClass(stage) {
        switch (stage) {
            case "Reviewed":
                return "bg-purple-100 text-purple-700";
            case "Interviewed":
                return "bg-yellow-100 text-yellow-700";
            case "Hired":
                return "bg-green-100 text-green-700";
            case "Rejected":
                return "bg-pink-100 text-pink-700";
            default:
                return "bg-blue-100 text-blue-700";
        }
      },
      sortByName() {
        if (!this.isSorted) {
            this.candidates.sort((a, b) => a.fullName.localeCompare(b.fullName));
            this.isSorted = true;
        } else {
            this.candidates = [...this.originalCandidates];
            this.isSorted = false;
        }
      },
      filterCandidates() {
            this.candidates = this.filteredCandidates;
            this.currentPage = 1; 
      },
      updateStage(candidate) {
        console.log(`Updated ${candidate.fullName} to stage: ${candidate.stage}`);
      },
    },
  };
</script>
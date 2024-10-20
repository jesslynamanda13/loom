<template>
  <div id="app">
    <section class="search flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>

      <div :class="[mainContentWidthClass, 'p-4']">
        <template v-if="!selectedTalent">
          <SearchTalent @search-talent="handleSearch" />
          <div v-if="filteredTalents.length === 0" class="text-center text-gray-500 py-10">
            <p>No talent found.</p>
          </div>
          <div v-else>
            <div v-for="(talent, index) in filteredTalents" :key="talent.TalentID" class="mb-4">
              <TalentCard 
                :talent="talent" 
                @show-detail="goToTalentDetail(talent)" 
                @toggle-favorite="handleToggleFavorite(index)"
              />
            </div>
          </div>
        </template>

        <template v-else>
          <button @click="backToTalentList" class="flex items-center text-gray-500 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <TalentDetailComponent :talent="selectedTalent" />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
import SearchTalent from '@/components/sme/search/SearchTalent.vue';
import TalentCard from '@/components/sme/search/TalentCard.vue';
import TalentDetailComponent from '@/components/sme/search/TalentDetailComponent.vue';
import TalentService from '@/services/TalentService';

export default {
  name: 'SearchPage',
  components: {
    SideBarComponent,
    SearchTalent,
    TalentCard,
    TalentDetailComponent,
  },
  data() {
    return {
      isSidebarCollapsed: false,
      searchQuery: '',
      selectedTalent: null,
      talents: [],
      talentData: {
        TalentID: '',
        email: '',
        FullName: '',
        Bio: '',
        PhoneNumber: '',
        ActiveStatus: false,
        Skills: [],
        AvgRating: 0,
        HireCount: 0,
        ProfilePicture: '/public/assets/img/default-photo.svg',
        CV: '',
        Portofolio: null,
        Location: 'Jakarta, Indonesia'
      }
    };
  },
  computed: {
    sidebarWidthClass() {
      return this.isSidebarCollapsed ? 'w-16' : 'w-64';
    },
    mainContentWidthClass() {
      return this.isSidebarCollapsed ? 'w-[calc(100%-4rem)]' : 'w-[calc(100%-16rem)]';
    },
    filteredTalents() {
      const query = this.searchQuery.toLowerCase();
      return this.talents.filter((talent) => {
        const nameMatches = talent.FullName && talent.FullName.toLowerCase().includes(query);
        const skillsMatch = talent.Skills && Array.isArray(talent.Skills) &&
          talent.Skills.some(skill => skill.toLowerCase().includes(query));
        return nameMatches || skillsMatch;
      });
    }
  },
  async created() { 
    await this.fetchAllTalents();
  },
  methods: {
    async fetchAllTalents() {
      try {
        const talents = await TalentService.getAllTalents();
        if (talents && talents.length > 0) {
          this.talents = talents;
        }
      } catch (error) {
        console.error('Error fetching talents:', error);
      }
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    handleSearch(query) {
      this.searchQuery = query; 
    },
    handleToggleFavorite(index) {
      this.talents[index].isFavorited = !this.talents[index].isFavorited;
    },
    goToTalentDetail(talent) {
      this.selectedTalent = talent; 
    },
    backToTalentList() {
      this.selectedTalent = null; 
    }
  }
};
</script>
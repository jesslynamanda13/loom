<template>
  <div class="bg-orange-100 p-4 rounded-xl flex flex-col mb-5">
    <h1 class="text-2xl font-semibold text-yellow-700 mb-2 text-left">Find Your Dream Talent</h1>
    
    <p class="text-gray-600 text-left mb-4 opacity-60">
      With comprehensive profiles showcasing portfolios and reviews from previous clients, 
      you can confidently choose the right talent to bring your vision to life.
    </p>

    <div class="flex items-center w-full bg-white p-2 rounded-xl">
      <svg class="h-6 w-6 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input 
        type="text" 
        placeholder="Search your talent specifically here..." 
        v-model="searchQuery" 
        @keyup.enter="onSearch"
        class="w-full px-4 py-2 outline-none text-sm text-gray-700"
      />

      <button 
        @click="onSearch" 
        class="bg-orange-200 text-black text-sm font-semibold px-10 py-2 rounded-lg hover:bg-orange-300 transition duration-200">
        Search
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchTalent",
    data() {
      return {
        searchQuery: '', 
      };
    },
    methods: {
      onSearch() {
        console.log('Search Query:', this.searchQuery);
        this.$emit('search-talent', this.searchQuery); 
      }
    }
  };
</script>

<template>
  <div id="app">
    <section class="dashboard flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>
      
      <div :class="mainContentWidthClass">
        <VacanciesList />

      </div>


    </section>
  </div>
</template>

<script>
import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
import VacanciesList from '@/components/sme/dashboard/CurrentVacancyComponent.vue'; 

export default {
  name: 'DashboardPage',
  components: {
    SideBarComponent,
    VacanciesList,
  },
  data() {
    return {
      isSidebarCollapsed: false,
    };
  },
  computed: {
    sidebarWidthClass() {
      return this.isSidebarCollapsed ? 'w-16' : 'w-64'; 
    },
    mainContentWidthClass() {
      return this.isSidebarCollapsed ? 'w-[calc(100%-4rem)]' : 'w-[calc(100%-16rem)]'; 
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
}
</script>

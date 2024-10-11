<template>
  <div id="app">
    <section class="dashboard flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>
      
      <div :class="[mainContentWidthClass, 'p-4']">
        <div class="mb-6 w-full">
          <VacanciesList />
        </div>

        <div class="flex gap-2">
          <div class="w-1/2">
            <RecentApplicants />
          </div>
          
          <div class="w-1/2 flex flex-col gap-4">
            <div>
              <NotificationComponent />
            </div>
            
            <div>
              <MessageComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
import VacanciesList from '@/components/sme/dashboard/CurrentVacancyComponent.vue'; 
import RecentApplicants from '@/components/sme/dashboard/RecentApplicants.vue';
import NotificationComponent from '@/components/sme/dashboard/NotificationComponent.vue';
import MessageComponent from '@/components/sme/dashboard/MessageComponent.vue';

export default {
  name: 'DashboardPage',
  components: {
    SideBarComponent,
    VacanciesList,
    RecentApplicants,
    NotificationComponent,
    MessageComponent,
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

<template>
    <div id="app">
      <section class="dashboard flex">
        <div :class="sidebarWidthClass">
          <SideBarComponent @toggle="toggleSidebar" />
        </div>
        
        <div :class="[mainContentWidthClass, 'p-4']">
          <div class="mb-5 w-full">
            <VacanciesList />
          </div>

          <div class="mb-5 w-full">
            <ApplicantsList />
          </div>

        </div>
      </section>
    </div>
</template>

<script>
    import VacanciesList from '@/components/sme/dashboard/CurrentVacancyComponent.vue';
    import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
    import ApplicantsList from '@/components/sme/job/ApplicantsComponent.vue';

    export default{
        name: 'MyJobPage',
        components: {
            SideBarComponent,
            VacanciesList,
            ApplicantsList,
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
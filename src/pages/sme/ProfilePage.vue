<template>
    <div id="app">
      <section class="search flex">
        <div :class="sidebarWidthClass">
          <SideBarComponent @toggle="toggleSidebar" />
        </div>
  
        <div :class="[mainContentWidthClass, 'p-4']">
            <SMEProfileDetailComponent />
        </div>
      </section>
    </div>  
</template>

<script>
    import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
    import SMEProfileDetailComponent from '@/components/sme/profile/SMEProfileDetailComponent.vue';

    export default{
        name: 'ProfilePage',
        components: {
            SideBarComponent,
            SMEProfileDetailComponent,
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
                return this.isSidebarCollapsed ? 'w-full' : 'flex-grow';
            },
        },
        methods: {
            toggleSidebar() {
                this.isSidebarCollapsed = !this.isSidebarCollapsed;
            },
        },
    }

</script>
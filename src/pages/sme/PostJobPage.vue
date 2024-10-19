<template>
    <div id="app">
      <section class="postjob flex">
        <div :class="sidebarWidthClass">
          <SideBarComponent @toggle="toggleSidebar" />
        </div>
  
        <div :class="[mainContentWidthClass, 'p-4']">
            <PostJobFormComponent />
        </div>
      </section>
    </div>  
</template>

<script>
    import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
    import PostJobFormComponent from '@/components/sme/post/PostJobFormComponent.vue';

    export default {
        name: 'PostJobPage',
        components: {
            SideBarComponent,
            PostJobFormComponent,
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
    };
</script>
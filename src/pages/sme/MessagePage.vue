<template>
    <div id="app">
      <section class="message flex">
        <div :class="sidebarWidthClass">
          <SideBarComponent @toggle="toggleSidebar" />
        </div>
  
        <div :class="[mainContentWidthClass, 'p-4']">
            <MessageComponent />
        </div>
      </section>
    </div>  
</template>

<script>
    import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
    import MessageComponent from '@/components/sme/message/MessageComponent.vue';

    export default{
        name: 'MessagePage',
        components: {
            SideBarComponent,
            MessageComponent
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
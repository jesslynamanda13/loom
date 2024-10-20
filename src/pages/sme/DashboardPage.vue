<template>
  <div id="app">
    <section class="dashboard flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>
      
      <div :class="[mainContentWidthClass, 'p-4']">
        <div class="mb-6 w-full">
          <VacanciesList :vacancies="jobs" @show-detail="goToJobDetail"/>
        </div>

        <div class="flex gap-2">
          <div class="w-1/2">
            <RecentApplicants />
          </div>
          
          <div class="w-1/2">  
            <MessageComponent />
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
  import MessageComponent from '@/components/sme/dashboard/QuickMessageComponent.vue';

  export default {
    name: 'DashboardPage',
    components: {
      SideBarComponent,
      VacanciesList,
      RecentApplicants,
      MessageComponent,
    },
    data() {
            return {
                isSidebarCollapsed: false,
                selectedJob: null,
                jobs:[
                {
                  "title": "Instagram Admin",
                  "description": "Manage daily postings, stories, and engagement on our Instagram page. Responsible for content scheduling and follower interaction.",
                  "qualifications": "Experience managing social media platforms, especially Instagram. Knowledge of content creation and analytics tools.",
                  "type": "Part-time",
                  "arrangement": "Remote",
                  "wage": "IDR 100,000/hour",
                  "active": true,
                  "createdAt": "3 October 2024",
                  "location": "Bali, Indonesia",
                  "skills": ["Social Media Management", "Content Creation", "Analytics", "Customer Engagement"],
                  "applicants": 37
                },
                {
                  "title": "Graphic Designer",
                  "description": "Create visually stunning designs for both print and digital media. Collaborate with the marketing team to ensure cohesive branding across all channels.",
                  "qualifications": "Proficiency in Adobe Creative Suite (Photoshop, Illustrator). A strong portfolio showcasing both print and digital design projects.",
                  "type": "Freelance",
                  "arrangement": "Hybrid",
                  "wage": "IDR 150,000/hour",
                  "active": true,
                  "createdAt": "2 October 2024",
                  "location": "Bandung, Indonesia",
                  "skills": ["Adobe Photoshop", "Illustrator", "Branding", "Typography", "Print Design"],
                  "applicants": 22
                }
                ]
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
      },
      goToJobDetail(job){
        this.selectedJob = job;
      },
    }
  }
</script>

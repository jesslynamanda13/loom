<template>
  <div id="app">
    <section class="search flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>

      <div :class="[mainContentWidthClass, 'p-4']">
        <template v-if="!selectedTalent">
          <SearchTalent @search-talent="handleSearch" />
          <TalentCard 
            :filteredTalents="filteredTalents" 
            @toggle-favorite="handleToggleFavorite" 
            @show-detail="goToTalentDetail" 
          />
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
        talents: [
          {
            name: 'Michael Johnson',
            email: 'michael.johnson@gmail.com',
            password: 'password123',
            bio: 'Creative graphic designer with over 5 years of experience in creating visually appealing designs for various brands.',
            phoneNumber: '+62 812-3456-7890',
            image: '/public/assets/img/profile-pic-1.jpg',
            activeStatus: true,
            skills: ['Adobe Photoshop', 'Illustrator', 'UI/UX Design', 'Branding', 'Sketch'],
            avgRating: 4.5,
            cv: 'https://example.com/cv/michaeljohnson.pdf',
            portfolio: [
              {
                title: 'Brand Identity for XYZ Corp',
                description: 'Developed a comprehensive brand identity for XYZ Corp including logos, business cards, and social media templates.',
                link: 'https://example.com/portfolio/xyzcorp'
              },
              {
                title: 'UI Design for ABC App',
                description: 'Designed a modern and intuitive user interface for ABC App, a mobile application for managing personal finances.',
                link: 'https://example.com/portfolio/abcapp'
              }
            ],
            location: 'Jakarta, Indonesia',
            jobType: 'Freelance',
            availability: 'Open to new projects',
            price: 'IDR 100,000/hr',
            isFavorited: false
          },
          {
            name: 'Sarah Smith',
            email: 'sarah.smith@gmail.com',
            password: 'password123',
            bio: 'Experienced web developer specializing in front-end technologies with a passion for building responsive and user-friendly web applications.',
            phoneNumber: '+62 813-4567-8901',
            image: '/public/assets/img/profile-pic-10.jpg',
            activeStatus: true,
            skills: ['JavaScript', 'Vue.js', 'HTML', 'CSS', 'Node.js'],
            avgRating: 4.7,
            cv: 'https://example.com/cv/sarahsmith.pdf',
            portfolio: [
              {
                title: 'E-commerce Website',
                description: 'Developed a fully responsive e-commerce website for a local retailer with shopping cart and payment gateway integration.',
                link: 'https://example.com/portfolio/ecommerce'
              },
              {
                title: 'Corporate Website for DEF Ltd',
                description: 'Built a corporate website for DEF Ltd, focusing on clean design and optimal performance.',
                link: 'https://example.com/portfolio/defltd'
              }
            ],
            location: 'Bandung, Indonesia',
            jobType: 'Full-time',
            availability: 'Available in 2 weeks',
            price: 'IDR 200,000/hr',
            isFavorited: false
          },
          {
            name: 'Emily Davis',
            email: 'emily.davis@gmail.com',
            password: 'password123',
            bio: 'Professional content writer with a knack for storytelling and creating engaging content for various platforms.',
            phoneNumber: '+62 814-5678-9012',
            image: '/public/assets/img/profile-pic-11.jpg',
            activeStatus: true,
            skills: ['SEO', 'Blogging', 'Copywriting', 'Social Media'],
            avgRating: 4.8,
            cv: 'https://example.com/cv/emilydavis.pdf',
            portfolio: [
              {
                title: 'SEO-Optimized Blog Articles',
                description: 'Wrote a series of SEO-optimized blog articles that boosted organic traffic for a client by 25%.',
                link: 'https://example.com/portfolio/seoarticles'
              },
              {
                title: 'Social Media Campaigns for GHI Brand',
                description: 'Created content and managed social media campaigns that increased GHI Brand’s engagement by 40%.',
                link: 'https://example.com/portfolio/ghicampaign'
              }
            ],
            location: 'Yogyakarta, Indonesia',
            jobType: 'Part-time',
            availability: 'Available now',
            price: 'IDR 120,000/hr',
            isFavorited: false
          },
          {
            name: 'David Lee',
            email: 'david.lee@gmail.com',
            password: 'password123',
            bio: 'Results-driven digital marketer with expertise in developing effective online marketing strategies to boost brand visibility.',
            phoneNumber: '+62 815-6789-0123',
            image: '/public/assets/img/profile-pic-5.jpg',
            activeStatus: true,
            skills: ['SEO', 'PPC', 'Social Media', 'Analytics', 'Email Marketing'],
            avgRating: 4.6,
            cv: 'https://example.com/cv/davidlee.pdf',
            portfolio: [
              {
                title: 'SEO and PPC Campaign for JKL Corp',
                description: 'Managed SEO and PPC campaigns that increased web traffic by 50% for JKL Corp.',
                link: 'https://example.com/portfolio/jklcampaign'
              },
              {
                title: 'Email Marketing Strategy for MNO Ltd',
                description: 'Developed and implemented an email marketing strategy that resulted in a 30% increase in customer retention.',
                link: 'https://example.com/portfolio/emailstrategy'
              }
            ],
            location: 'Surabaya, Indonesia',
            jobType: 'Part-Time',
            availability: 'Available for consultation',
            price: 'IDR 180,000/hr',
            isFavorited: false
          }
        ],
        selectedTalent: null,
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
              const nameMatches = talent.name && talent.name.toLowerCase().includes(query);

              const skillsMatch = talent.skills && Array.isArray(talent.skills) &&
                  talent.skills.some(skill => skill.toLowerCase().includes(query));

              return nameMatches || skillsMatch;
          });
      }
    },
    methods: {
      toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      },
      handleSearch(query) {
        console.log('Received Search Query:', query);
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
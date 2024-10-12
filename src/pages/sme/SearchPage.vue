<template>
  <div id="app">
    <section class="search flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>

      <div :class="[mainContentWidthClass, 'p-4']">
        <SearchTalent @search-talent="handleSearch" />
        <TalentCard :filteredTalents="filteredTalents" @toggle-favorite="handleToggleFavorite" />
      </div>
    </section>
  </div>
</template>

<script>
  import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
  import SearchTalent from '@/components/sme/search/SearchTalent.vue';
  import TalentCard from '@/components/sme/search/TalentCard.vue';

  export default {
    name: 'SearchPage',
    components: {
      SideBarComponent,
      SearchTalent,
      TalentCard,
    },
    data() {
      return {
        isSidebarCollapsed: false,
        searchQuery: '',
        talents: [
          {
            name: 'Michael Johnson',
            title: 'Graphic Designer',
            image: 'public/assets/img/profile-pic-1.jpg',
            skills: ['Adobe Photoshop', 'Illustrator', 'UI/UX Design', 'Branding', 'Sketch'],
            description: 'Creative graphic designer with over 5 years of experience in creating visually appealing designs for various brands. Skilled in both print and digital media.',
            location: 'Jakarta, Indonesia',
            jobType: 'Freelance',
            availability: 'Open to new projects',
            price: 'IDR 100,000/hr',
            isFavorited: false,
          },
          {
            name: 'Sarah Smith',
            title: 'Web Developer',
            image: 'public/assets/img/profile-pic-10.jpg',
            skills: ['JavaScript', 'Vue.js', 'HTML', 'CSS', 'Node.js'],
            description: 'Experienced web developer specializing in front-end technologies with a passion for building responsive and user-friendly web applications.',
            location: 'Bandung, Indonesia',
            jobType: 'Full-time',
            availability: 'Available in 2 weeks',
            price: 'IDR 200,000/hr',
            isFavorited: false 
          },
          {
            name: 'Emily Davis',
            title: 'Content Writer',
            image: 'public/assets/img/profile-pic-11.jpg',
            skills: ['SEO', 'Blogging', 'Copywriting', 'Social Media'],
            description: 'Professional content writer with a knack for storytelling and creating engaging content for various platforms.',
            location: 'Yogyakarta, Indonesia',
            jobType: 'Part-time',
            availability: 'Available now',
            price: 'IDR 120,000/hr',
            isFavorited: false 
          },
          {
            name: 'David Lee',
            title: 'Digital Marketer',
            image: 'public/assets/img/profile-pic-5.jpg',
            skills: ['SEO', 'PPC', 'Social Media', 'Analytics', 'Email Marketing'],
            description: 'Results-driven digital marketer with expertise in developing effective online marketing strategies to boost brand visibility.',
            location: 'Surabaya, Indonesia',
            jobType: 'Consultant',
            availability: 'Available for consultation',
            price: 'IDR 180,000/hr',
            isFavorited: false 
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
      },
      filteredTalents() {
        return this.talents.filter((talent) =>
          talent.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          talent.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          talent.skills.some(skill => skill.toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      }
    },
    methods: {
      toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      },
      handleSearch(query) {
        this.searchQuery = query;
      },
      handleToggleFavorite(index) {
        this.talents[index].isFavorited = !this.talents[index].isFavorited;
      }
    }
  };
</script>
<template>
  <div id="app">
    <section class="myjob flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>

      <div :class="[mainContentWidthClass, 'p-4']">
        <template v-if="!selectedJob">
          <div class="mb-5 w-full">
            <VacanciesList :vacancies="jobs" @show-detail="goToJobDetail" />
          </div>
          <ApplicantsList />
        </template>

        <template v-else>
          <button @click="backToJobList" class="flex items-center text-gray-500 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <JobDetailComponent :job="selectedJob" :candidates="applicantsList" />
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import VacanciesList from '@/components/sme/dashboard/CurrentVacancyComponent.vue'
import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue'
import ApplicantsList from '@/components/sme/job/ApplicantsComponent.vue'
import JobDetailComponent from '@/components/sme/job/JobDetailComponent.vue'
import SMEService from '@/services/SMEService';

export default {
  name: 'MyJobPage',
  components: {
    SideBarComponent,
    VacanciesList,
    ApplicantsList,
    JobDetailComponent
  },
  data() {
    return {
      isSidebarCollapsed: false,
      selectedJob: null,
      jobs: [],
      applicantsList: [
        {
          fullName: 'Ahmad Pratama',
          email: 'ahmad.pratama@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 812 3456 7890',
          location: 'Jakarta',
          appliedDate: 'Oct 4, 2024',
          stage: 'Reviewed',
          profilePicture: '/public/assets/img/profile-pic-1.jpg'
        },
        {
          fullName: 'Siti Rahmawati',
          email: 'siti.rahmawati@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 811 2345 9876',
          location: 'Bandung',
          appliedDate: 'Sep 29, 2024',
          stage: 'Interviewed',
          profilePicture: '/public/assets/img/profile-pic-6.jpg'
        },
        {
          fullName: 'Budi Santoso',
          email: 'budi.santoso@gmail.com',
          role: 'Graphic Designer',
          contact: '+62 822 3456 7891',
          location: 'Surabaya',
          appliedDate: 'Sep 15, 2024',
          stage: 'Interviewed',
          profilePicture: '/public/assets/img/profile-pic-2.jpg'
        },
        {
          fullName: 'Dewi Ayu',
          email: 'dewi.ayu@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 813 9876 5432',
          location: 'Yogyakarta',
          appliedDate: 'Aug 31, 2024',
          stage: 'Hired',
          profilePicture: '/public/assets/img/profile-pic-7.jpg'
        },
        {
          fullName: 'Rahmat Hidayat',
          email: 'rahmat.hidayat@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 812 8765 4321',
          location: 'Medan',
          appliedDate: 'Oct 5, 2024',
          stage: 'Reviewed',
          profilePicture: '/public/assets/img/profile-pic-3.jpg'
        },
        {
          fullName: 'Fitri Susanti',
          email: 'fitri.susanti@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 819 2345 6789',
          location: 'Malang',
          appliedDate: 'Sep 18, 2024',
          stage: 'Interviewed',
          profilePicture: '/public/assets/img/profile-pic-8.jpg'
        },
        {
          fullName: 'Andi Wijaya',
          email: 'andi.wijaya@gmail.com',
          role: 'Graphic Designer',
          contact: '+62 821 3456 7890',
          location: 'Makassar',
          appliedDate: 'Aug 25, 2024',
          stage: 'Reviewed',
          profilePicture: '/public/assets/img/profile-pic-4.jpg'
        },
        {
          fullName: 'Rina Setiawan',
          email: 'rina.setiawan@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 814 5678 1234',
          location: 'Bali',
          appliedDate: 'Jul 19, 2024',
          stage: 'Hired',
          profilePicture: '/public/assets/img/profile-pic-9.jpg'
        },
        {
          fullName: 'Arif Kurniawan',
          email: 'arif.kurniawan@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 823 9876 5432',
          location: 'Balikpapan',
          appliedDate: 'Sep 9, 2024',
          stage: 'Reviewed',
          profilePicture: '/public/assets/img/profile-pic-5.jpg'
        },
        {
          fullName: 'Nia Safitri',
          email: 'nia.safitri@gmail.com',
          role: 'Graphic Designer',
          contact: '+62 815 6789 4321',
          location: 'Semarang',
          appliedDate: 'Oct 1, 2024',
          stage: 'Interviewed',
          profilePicture: '/public/assets/img/profile-pic-10.jpg'
        },
        {
          fullName: 'Liliana Muthe',
          email: 'liliana.muthe@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 816 7890 5432',
          location: 'Palembang',
          appliedDate: 'Aug 22, 2024',
          stage: 'Interviewed',
          profilePicture: '/public/assets/img/profile-pic-11.jpg'
        },
        {
          fullName: 'Lisa Melati',
          email: 'lisa.melati@gmail.com',
          role: 'Graphic Designer',
          contact: '+62 818 2345 6789',
          location: 'Bogor',
          appliedDate: 'Sep 30, 2024',
          stage: 'Hired',
          profilePicture: '/public/assets/img/profile-pic-12.jpg'
        },
        {
          fullName: 'Susanti Mustia',
          email: 'susanti.mustia@gmail.com',
          role: 'Instagram Admin',
          contact: '+62 817 5678 1234',
          location: 'Pontianak',
          appliedDate: 'Jul 25, 2024',
          stage: 'Reviewed',
          profilePicture: '/public/assets/img/profile-pic-13.jpg'
        }
      ],
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
    goToJobDetail(job) {
      this.selectedJob = job;
    },
    backToJobList() {
      this.selectedJob = null;
    },
    async fetchJobs() {
      try {
        const jobs = await SMEService.getAllJobs();
        this.jobs = jobs.map(job => ({
          id: job.JobID,
          title: job.JobTitle,
          description: job.JobDescription,
          type: job.JobType,
          arrangement: job.JobArrangement,
          wage: job.Wage,
          createdAt: job.CreatedAt,
          location: job.Location,
          qualifications: job.Qualification
        }));
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    }
  },
  mounted() {
    this.fetchJobs();
  }
};
</script>
<template>
  <div id="app">
    <section class="myjob flex">
      <div :class="sidebarWidthClass">
        <SideBarComponent @toggle="toggleSidebar" />
      </div>

      <div :class="[mainContentWidthClass, 'p-4 space-y-5']">
        <template v-if="!selectedJob">
          <div class="w-full">
            <VacanciesList :vacancies="jobs" @show-detail="goToJobDetail" />
          </div>
          <ApplicantsList :applicants="applicantsList" />
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
import VacanciesList from '@/components/sme/dashboard/CurrentVacancyComponent.vue';
import SideBarComponent from '@/components/sme/navigation/SideBarComponent.vue';
import ApplicantsList from '@/components/sme/job/ApplicantsComponent.vue';
import JobDetailComponent from '@/components/sme/job/JobDetailComponent.vue';
import SMEService from '@/services/SMEService';
import ApplicantsService from '@/services/ApplicantsService';

export default {
  name: 'MyJobPage',
  components: {
    SideBarComponent,
    VacanciesList,
    ApplicantsList,
    JobDetailComponent,
  },
  data() {
    return {
      isSidebarCollapsed: false,
      selectedJob: null,
      jobs: [],
      applicantsList: [], 
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
      console.log("Selected Job:", job); 
      this.selectedJob = job;

      if (job.JobID) {
          this.fetchApplicantsForJob(job.JobID); 
      } else {
          console.error("JobID is undefined for the selected job.");
      }
    },
    backToJobList() {
      this.selectedJob = null;
      this.applicantsList = []; 
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
    },
    async fetchApplicants(jobId) {
      try {
        console.log(jobId);
        const applicants = await ApplicantsService.getApplicantsByJob(jobId);
        return applicants.map(applicant => ({
          fullName: applicant.FullName,
          email: applicant.Email,
          role: applicant.Role,
          contact: applicant.Contact,
          location: applicant.Location,
          appliedDate: applicant.AppliedDate,
          stage: applicant.Stage,
          profilePicture: applicant.ProfilePicture
        }));
      } catch (error) {
        console.error('Error fetching applicants:', error);
        return [];
      }
    },
    async fetchApplicantsForJob(jobId) {
      const applicants = await this.fetchApplicants(jobId);
      this.applicantsList = applicants;
    },
    async fetchAllApplicantsForJobs() {
      for (const job of this.jobs) {
        const applicants = await this.fetchApplicants(job.id); 
        this.applicantsList.push(...applicants); 
      }
    }
  },
  async mounted() {
    await this.fetchJobs();
    await this.fetchAllApplicantsForJobs(); 
  }
};
</script>

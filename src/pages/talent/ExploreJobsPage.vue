<template>
  <div class="">
    <TalentNavbarComponent :currentPage="'explore-jobs'" />

    <div class="relative h-64">
      <img
        src="/assets/img/explore-jobs-bg.png"
        alt="Background Image"
        class="w-full h-full object-cover"
      />

      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-2xl md:text-3xl font-semibold text-center">
          Find jobs with no hassle with loom!
        </h1>
      </div>
      <div class="absolute inset-x-0 bottom-0 mb-8 flex justify-center">
        <div class="relative w-5/6 md:w-1/2">
          <input
            type="text"
            v-model="searchQuery"
            class="w-full px-4 py-4 border border-gray-400 rounded-md pr-10 shadow-sm"
            placeholder="Search by job title, SME name, and skills"
          />

          <div class="absolute right-6 top-1/2 transform -translate-y-1/2">
            <img src="/assets/img/search-bar-icon.png" class="lg:w-6 w-4" />
          </div>
        </div>
      </div>
    </div>

    <div class="search-results px-24 mt-8">
      <div class="filter-results flex justify-between items-center">
        <div class="text-lg font-semibold w-1/2">
          Showing "<span class="font-bold">{{ displayResultsText }}</span
          >" results
        </div>

        <div class="flex items-center space-x-4">
          <div class="image-filt">
            <img src="/assets/img/filter-icon.png" alt="" class="w-4" />
          </div>

          <div class="relative inline-block">
            <button
              @click="toggleWorkArrangementDropdown"
              :class="[
                selectedWorkArrangement !== 'Work Arrangement' ? 'border-red-800' : 'border-black',
                'bg-white',
                'border',
                'text-black',
                'font-medium',
                'rounded-lg',
                'text-sm',
                'px-5',
                'py-2.5',
                'text-center',
                'inline-flex',
                'items-center'
              ]"
              type="button"
            >
              <span :class="selectedOptionClass">{{ selectedWorkArrangement }}</span>
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  :stroke="selectedWorkArrangement !== 'Work Arrangement' ? '#9D0000' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              v-if="isWorkArrangementDropdownOpen"
              id="workArrangementDropdown"
              class="cursor-pointer z-10 absolute font-medium bg-white border border-black rounded-lg shadow w-44 mt-1"
              @mouseleave="hideWorkArrangementDropdown"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    @click.prevent="selectWorkArrangementOption('Remote')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Remote</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="selectWorkArrangementOption('On-site')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >On-site</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="selectWorkArrangementOption('Hybrid')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Hybrid</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="cursor-pointer relative inline-block">
            <button
              @click="toggleJobTypeDropdown"
              :class="[
                selectedJobType !== 'Type' ? 'border-red-800' : 'border-black',
                'bg-white',
                'border',
                'text-black',
                'font-medium',
                'rounded-lg',
                'text-sm',
                'px-5',
                'py-2.5',
                'text-center',
                'inline-flex',
                'items-center'
              ]"
              type="button"
            >
              <span :class="selectedJobTypeClass">{{ selectedJobType }}</span>
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  :stroke="selectedJobType !== 'Type' ? '#9D0000' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              v-if="isJobTypeDropdownOpen"
              id="jobTypeDropdown"
              class="z-10 absolute font-medium bg-white border border-black rounded-lg shadow w-44 mt-1"
              @mouseleave="hideJobTypeDropdown"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    @click.prevent="selectJobTypeOption('Freelance')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Freelance</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="selectJobTypeOption('Part-time')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Part-time</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="selectJobTypeOption('Full-time')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Full-time</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="cursor-pointer relative inline-block">
            <button
              @click="toggleSkillsDropdown"
              :class="[
                'bg-white',
                selectedSkillsCount > 0 ? 'border-red-800' : 'border-black',
                'border',
                'text-black',
                'font-medium',
                'rounded-lg',
                'text-sm',
                'px-5',
                'py-2.5',
                'text-center',
                'inline-flex',
                'items-center'
              ]"
              type="button"
            >
              <span
                :class="selectedSkillsCount > 0 ? 'text-red-800' : 'text-black'"
                class="font-medium"
              >
                {{ selectedSkillsCount > 0 ? `Selected(${selectedSkillsCount})` : 'Skills' }}
              </span>
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  :stroke="selectedSkillsCount > 0 ? '#9D0000' : 'black'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              v-if="isSkillsDropdownOpen"
              class="z-10 absolute font-medium bg-white border border-black rounded-lg shadow w-64 mt-1 max-h-64 overflow-auto"
              @mouseleave="hideSkillsDropdown"
            >
              <ul class="py-2 text-sm text-gray-700">
                <li v-for="(skill, index) in skills" :key="index">
                  <label
                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      :value="skill"
                      v-model="selectedSkills"
                      class="form-checkbox h-4 w-4 text-red-800 border-gray-300 rounded"
                    />
                    <span>{{ skill }}</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <template v-if="filteredJobs.length > 0">
          <JobCardComponent
            v-for="(job, index) in filteredJobs"
            :key="index"
            :jobId="job.JobID"
            :companyName="job.CompanyName"
            :jobTitle="job.JobTitle"
            :location="job.Location"
            :workType="job.JobType"
            :workArrangement="job.JobArrangement"
            :salary="job.Wage"
            :skills="job.Skills"
            :jobDescription="job.JobDescription"
            @applyJob="handleApplyJob"
          />
        </template>
        <template v-else>
          <div
            class="col-span-full text-center text-sm p-24 text-gray-500 mt-4 flex flex-col items-center space-y-12"
          >
            <img src="/assets/img/not-found.png" class="w-24" />
            <p>There are no matching jobs available to your filters :(</p>
          </div>
        </template>
      </div>
    </div>
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <JobApplicationModalComponent @closeModal="showModal = false" />
    </div>
    <div class="mt-12">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import TalentNavbarComponent from '@/components/talent/navigation/TalentNavbarComponent.vue'
import JobCardComponent from '@/components/talent/JobCardComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import JobApplicationModalComponent from '@/components/talent/application/JobApplicationModalComponent.vue'
import SkillsService from '@/services/SkillsService'
import JobService from '@/services/JobService'

export default {
  name: 'ExploreJobsPage',
  components: {
    TalentNavbarComponent,
    JobCardComponent,
    FooterComponent,
    JobApplicationModalComponent
  },
  data() {
    return {
      showModal: false,
      isWorkArrangementDropdownOpen: false,
      isJobTypeDropdownOpen: false,
      selectedWorkArrangement: 'Work Arrangement',
      selectedJobType: 'Type',
      isSkillsDropdownOpen: false,
      selectedSkills: [],
      skills: [],
      jobs: [],
      searchQuery: ''
    }
  },
  created() {
    this.fetchSkills()
  },
  async mounted() {
    this.fetchJobs()
  },
  computed: {
    filteredJobs() {
      return this.jobs.filter((job) => {
        const matchesWorkArrangement =
          this.selectedWorkArrangement === 'Work Arrangement' ||
          job.JobArrangement === this.selectedWorkArrangement

        const matchesJobType =
          this.selectedJobType === 'Type' || job.JobType === this.selectedJobType

        const matchesSkills =
          this.selectedSkills.length === 0 ||
          this.selectedSkills.every((skill) => job.Skills.includes(skill))

        const matchesSearchQuery =
          job.JobTitle.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          job.Skills.some((skill) =>
            skill.toLowerCase().includes(this.searchQuery.toLowerCase())
          ) ||
          job.JobType.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          job.JobArrangement.toLowerCase().includes(this.searchQuery.toLowerCase())
        return matchesWorkArrangement && matchesJobType && matchesSkills && matchesSearchQuery
      })
    },
    selectedOptionClass() {
      return this.selectedWorkArrangement !== 'Work Arrangement'
        ? 'text-red-800 border-red-500'
        : 'text-black'
    },
    selectedJobTypeClass() {
      return this.selectedJobType !== 'Type' ? 'text-red-800 border-red-500' : 'text-black'
    },
    selectedSkillsCount() {
      return this.selectedSkills.length
    },
    displayResultsText() {
      const selectedFilters = []

      if (this.selectedWorkArrangement !== 'Work Arrangement') {
        selectedFilters.push(this.selectedWorkArrangement)
      }

      if (this.selectedJobType !== 'Type') {
        selectedFilters.push(this.selectedJobType)
      }

      if (this.selectedSkillsCount > 0) {
        selectedFilters.push(...this.selectedSkills)
      }

      return selectedFilters.length > 0 ? selectedFilters.join(', ') : 'All'
    }
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await JobService.getJobs()
        this.jobs = Array.from(response)
        console.log(this.jobs)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchSkills() {
      try {
        const response = await SkillsService.getAllSkills()
        console.log(response['data'])
        this.skills = response['data'].skills.map((skill) => skill.SkillName)
      } catch (error) {
        console.log(error)
      }
    },
    toggleWorkArrangementDropdown() {
      this.isWorkArrangementDropdownOpen = !this.isWorkArrangementDropdownOpen
    },
    hideWorkArrangementDropdown() {
      this.isWorkArrangementDropdownOpen = false
    },
    selectWorkArrangementOption(option) {
      this.selectedWorkArrangement = option
      this.isWorkArrangementDropdownOpen = false
    },
    toggleJobTypeDropdown() {
      this.isJobTypeDropdownOpen = !this.isJobTypeDropdownOpen
    },
    hideJobTypeDropdown() {
      this.isJobTypeDropdownOpen = false
    },
    selectJobTypeOption(option) {
      this.selectedJobType = option
      this.isJobTypeDropdownOpen = false
    },
    toggleSkillsDropdown() {
      this.isSkillsDropdownOpen = !this.isSkillsDropdownOpen
    },
    hideSkillsDropdown() {
      this.isSkillsDropdownOpen = false
    },
    handleApplyJob() {
      this.showModal = true
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
  border-color: #3182ce;
}
.form-checkbox:checked {
  background-color: #9d0000;
}
.work-arr-dropdown {
  cursor: pointer;
}
</style>

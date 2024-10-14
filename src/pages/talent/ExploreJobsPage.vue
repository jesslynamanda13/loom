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
      <!-- search bar -->
      <div class="absolute inset-x-0 bottom-0 mb-8 flex justify-center">
        <div class="relative w-5/6 md:w-1/2">
          <input
            type="text"
            class="w-full px-4 py-4 border border-gray-400 rounded-md pr-10 shadow-sm"
            placeholder="Search by job title, SME name, and skills"
          />

          <div class="absolute right-6 top-1/2 transform -translate-y-1/2">
            <img src="/assets/img/search-bar-icon.png" class="lg:w-6 w-4" />
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Results Section -->
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

          <!-- Work Arrangement Dropdown -->
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

            <!-- Dropdown menu -->
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

          <!-- Job Type Dropdown -->
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

            <!-- Dropdown menu -->
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
                    @click.prevent="selectJobTypeOption('Part-Time')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Part-Time</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="selectJobTypeOption('Full-Time')"
                    class="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >Full-Time</a
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

            <!-- Dropdown menu for skills -->
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
        <JobCardComponent
          companyName="Tenue de Attire"
          companyLogo="/assets/img/company-logo.png"
          jobTitle="Mobile Developer"
          location="Jakarta"
          workType="Part-Time"
          hoursPerWeek="20 hours per week"
          workArrangement="Remote"
          salary="Rp. 600.000/week"
          :skills="['Mobile Development', 'UI/UX Design']"
          jobDescription="As a Mobile Developer at Tenue d'Attire, you will play a key role in designing,..."
        />

        <JobCardComponent
          companyName="Creative Studio"
          companyLogo="/assets/img/company-logo.png"
          jobTitle="Graphic Designer"
          location="Jakarta"
          workType="Full-Time"
          hoursPerWeek="40 hours per week"
          workArrangement="On-Site"
          salary="Rp. 8.000.000/month"
          :skills="['Graphic Design', 'Adobe Suite']"
          jobDescription="As a Graphic Designer at Creative Studio, you will create visual concepts,..."
        />

        <JobCardComponent
          companyName="Tech Innovations"
          companyLogo="/assets/img/company-logo.png"
          jobTitle="Software Engineer"
          location="Jakarta"
          workType="Full-Time"
          hoursPerWeek="40 hours per week"
          workArrangement="Hybrid"
          salary="Rp. 10.000.000/month"
          :skills="['JavaScript', 'Node.js']"
          jobDescription="As a Software Engineer at Tech Innovations, you will develop software applications,..."
        />
        <JobCardComponent
          companyName="Tenue de Attire"
          companyLogo="/assets/img/company-logo.png"
          jobTitle="Mobile Developer"
          location="Jakarta"
          workType="Part-Time"
          hoursPerWeek="20 hours per week"
          workArrangement="Remote"
          salary="Rp. 600.000/week"
          :skills="['Mobile Development', 'UI/UX Design']"
          jobDescription="As a Mobile Developer at Tenue d'Attire, you will play a key role in designing,..."
        />

        <JobCardComponent
          companyName="Creative Studio"
          companyLogo="/assets/img/company-logo.png"
          jobTitle="Graphic Designer"
          location="Jakarta"
          workType="Full-Time"
          hoursPerWeek="40 hours per week"
          workArrangement="On-Site"
          salary="Rp. 8.000.000/month"
          :skills="['Graphic Design', 'Adobe Suite']"
          jobDescription="As a Graphic Designer at Creative Studio, you will create visual concepts,..."
        />

        <JobCardComponent
          companyName="Tech Innovations"
          companyLogo="/assets/img/company-logo.png"
          jobTitle="Software Engineer"
          location="Jakarta"
          workType="Full-Time"
          hoursPerWeek="40 hours per week"
          workArrangement="Hybrid"
          salary="Rp. 10.000.000/month"
          :skills="['JavaScript', 'Node.js']"
          jobDescription="As a Software Engineer at Tech Innovations, you will develop software applications,..."
        />
      </div>
    </div>
    <div class="mt-12">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import TalentNavbarComponent from '@/components/talent/TalentNavbarComponent.vue'
import JobCardComponent from '@/components/talent/JobCardComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'ExploreJobsPage',
  components: {
    TalentNavbarComponent,
    JobCardComponent,
    FooterComponent
  },
  data() {
    return {
      isWorkArrangementDropdownOpen: false,
      isJobTypeDropdownOpen: false,
      selectedWorkArrangement: 'Work Arrangement',
      selectedJobType: 'Type',
      isSkillsDropdownOpen: false,
      selectedSkills: [],
      skills: [
        'Business Management',
        'Digital Marketing',
        'Data Analysis',
        'Software Development',
        'Project Management',
        'Graphic Design',
        'Financial Analysis',
        'Communication',
        'Sales Strategy',
        'Customer Service',
        'Social Media Management',
        'Leadership',
        'UX/UI Design',
        'Negotiation',
        'Public Speaking',
        'Networking',
        'Coding',
        'Content Creation',
        'Research',
        'Time Management',
        'Web Development',
        'SEO (Search Engine Optimization)',
        'Copywriting',
        'Video Editing',
        'Photography',
        'Virtual Assistance',
        'Translation',
        'App Development',
        'E-commerce Management',
        'Affiliate Marketing'
      ]
    }
  },
  computed: {
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
    }
  }
}
</script>

<style scoped>
/* Optional styles for the input field */
input:focus {
  outline: none;
  border-color: #3182ce; /* Example for focus state */
}
.form-checkbox:checked {
  background-color: #9d0000; /* Checkbox color */
}
.work-arr-dropdown {
  cursor: pointer;
}
</style>

<template>
  <div class="mx-auto p-4 bg-white rounded-lg border border-gray-300">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-semibold text-gray-500"> {{ job.title }} </h2>
      <div class="flex space-x-2">
        <div class="cursor-pointer flex items-center bg-white shadow px-2 py-2 rounded-md gap-2 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </div>
        <div class="cursor-pointer flex items-center bg-white shadow px-2 py-2 rounded-md gap-2 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <div class="w-full mx-auto">
        <div class="border-b border-gray-300 mb-6">
          <nav class="flex space-x-4">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              @click="activeTab = index"
              :class="[
                activeTab === index ? 'border-yellow-500 text-yellow-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
              ]"
              type="button"
            >
              <div class="flex items-center gap-2">
                <svg :class="activeTab === index ? 'text-yellow-500' : 'text-gray-500'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path v-if="index === 0" stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  <path v-else stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                {{ tab.name }}
              </div>
            </button>
          </nav>
        </div>

        <div>
          <div v-if="activeTab === 0">
            <div class="flex flex-col mb-4">
              <h1 class="text-xl font-semibold mb-2">Description</h1>
              <p class="text-gray-500"> {{ job.description }}</p>
            </div>

            <div class="flex flex-col mb-4">
              <h1 class="text-xl font-semibold mb-2">Qualification</h1>
              <p class="text-gray-500"> {{ job.qualifications }}</p>
            </div>

            <div class="flex flex-col mb-4">
              <h1 class="text-xl font-semibold mb-2">Type</h1>
              <p class="text-gray-500"> {{ job.type }}</p>
            </div>

            <div class="flex flex-col mb-4">
              <h1 class="text-xl font-semibold mb-2">Arrangement</h1>
              <p class="text-gray-500"> {{ job.arrangement }}</p>
            </div>

            <div class="flex flex-col mb-4">
              <h1 class="text-xl font-semibold mb-2">Location</h1>
              <p class="text-gray-500"> {{ job.location }}</p>
            </div>

            <div class="flex flex-col mb-4">
              <h1 class="text-xl font-semibold mb-2">Skills Required</h1>
              <div class="flex flex-wrap my-2">
                <span v-for="skill in job.skills" :key="skill" class="bg-orange-100 text-red-700 px-5 py-1 rounded-full text-sm mr-2">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-if="filteredApplicants.length === 0" class="text-center text-gray-500 py-4">
              There is no applicants yet
            </div>
            <ApplicantsList v-else :candidates="filteredApplicants" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ApplicantsList from '@/components/sme/job/ApplicantsComponent.vue';

  export default {
    name: 'JobDetailComponent',
    props: {
      job: {
        type: Object,
        required: true,
      },
      candidates: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        activeTab: 0,
        tabs: [
          { name: 'Job Details' },
          { name: 'Applicants' }
        ]
      }
    },
    computed: {
      filteredApplicants() {
        return this.candidates.filter(applicant => applicant.jobId === this.job.id);
      }
    },
    components: {
      ApplicantsList
    },
  }
</script>
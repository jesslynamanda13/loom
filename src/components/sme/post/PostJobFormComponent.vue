<template>
  <div class="mx-auto p-4 bg-white rounded-lg border border-gray-300">
    <h2 class="text-2xl font-semibold mb-6 text-gray-500">Post a Job</h2>

    <success-message
      v-if="successMessage"
      :successMessage="successMessage"
      @dismiss="successMessage = ''"
    />

    <form @submit.prevent="createJob">
      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="jobTitle">Job Title <span class="text-red-700"> * </span></label>
        <input 
          type="text" 
          v-model="form.jobTitle" 
          id="jobTitle" 
          class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Content Writer"
          required
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="jobDescription">Job Description <span class="text-red-700"> * </span></label>
        <textarea 
          v-model="form.jobDescription"
          id="jobDescription"
          class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Job description here..."
          required
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="qualifications">Qualification & Responsibilities <span class="text-red-700"> * </span></label>
        <textarea 
          v-model="form.qualifications"
          id="qualifications"
          class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Qualifications and responsibilities here..."
          required
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="location">Location <span class="text-red-700"> * </span></label>
        <input 
          type="text" 
          v-model="form.location" 
          id="location" 
          class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="Jakarta"
          required
        />
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm font-medium mb-1" for="jobType">Job Type <span class="text-red-700"> * </span></label>
          <select 
            v-model="form.jobType"
            id="jobType"
            class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          >
            <option value="Freelance">Freelance</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-1" for="arrangement">Arrangement <span class="text-red-700"> * </span></label>
          <select 
            v-model="form.arrangement"
            id="arrangement"
            class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            required
          >
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-1" for="wage">Wage</label>
        <input 
          type="text" 
          v-model="form.wage"
          id="wage"
          class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="IDR 1,000,000 - 3,000,000"
        />
      </div>

      <div class="mb-10">
        <label class="block text-sm font-medium mb-1" for="skills">
          Skills <span class="text-red-700"> * </span>
        </label>

        <div class="flex flex-wrap items-center gap-2">
          <span
            v-for="(tag, index) in form.skills"
            :key="index"
            class="bg-orange-100 text-red-700 px-3 py-1 rounded-lg mr-2 flex items-center justify-start"
          >
            {{ tag.SkillName }}
            <button @click="removeTag(index)" class="ml-2 text-gray-400 focus:outline-none">x</button>
          </span>

          <select
            v-model="selectedSkill"
            @change="addTag"
            class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <option disabled value="">Select a Skill</option>
            <option v-for="skill in skills" :key="skill.SkillID" :value="skill">{{ skill.SkillName }}</option>
          </select>
        </div>
      </div>

      <div class="flex justify-end">
        <button type="button" class="text-gray-500 mr-4">Cancel</button>
        <button 
          type="submit" 
          class="bg-orange-200 text-black px-6 py-2 rounded-md hover:bg-orange-300 font-semibold transition-all"
        >
          Create This Job
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import SuccessMessage from '@/components/notification/SuccessMessage.vue';
  import SkillsService from '@/services/SkillsService';
  import SMEService from '@/services/SMEService';

  export default {
    name: 'PostJobFormComponent',
    components: {
      SuccessMessage,
    },
    data() {
      return {
        form: {
          jobTitle: '',
          jobDescription: '',
          qualifications: '',
          location: '',
          jobType: 'Freelance',
          arrangement: 'Onsite',
          wage: '',
          skills: [],
        },
        skills: [],
        selectedSkill: null,
        successMessage: '',
      };
    },
    methods: {
      async fetchAllSkills() {
        try {
          const response = await SkillsService.getAllSkills();
          this.skills = response['data'].skills;
        } catch (error) {
          console.log(error);
        }
      },
      async createJob() {
        try {
          const smeProfile = await SMEService.getSMEProfile();
          const smeID = smeProfile.SMEID;

          const jobDTO = {
            SMEID: smeID,
            JobTitle: this.form.jobTitle,
            JobDescription: this.form.jobDescription,
            JobType: this.form.jobType,
            Qualification: this.form.qualifications,
            JobArrangement: this.form.arrangement,
            Wage: this.form.wage,
            Active: true,
            Location: this.form.location,
            Skills: this.form.skills,
          };

          const response = await SMEService.postJob(jobDTO);
          console.log('Job posted successfully:', response);

          if (response.status === 201) {
            this.successMessage = 'Job created successfully';
          }
        } catch (error) {
          console.error('Error creating job:', error);
        }
      },
      addTag() {
        if (this.selectedSkill) {
          this.form.skills.push(this.selectedSkill);
          this.selectedSkill = null;
        }
      },
      removeTag(index) {
        this.form.skills.splice(index, 1);
      },
    },
    async mounted() {
      await this.fetchAllSkills();
    },
  };
</script>
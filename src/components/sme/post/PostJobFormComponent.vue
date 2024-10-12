<template>
    <div class="mx-auto p-4 bg-white rounded-lg border border-gray-300">
      <h2 class="text-2xl font-semibold mb-6 text-gray-500">Post a Job</h2>
  
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
  
        <div class="mb-4">
          <label class="block text-sm font-medium mb-1" for="skills">Skills <span class="text-red-700"> * </span></label>
          <div class="flex flex-wrap items-center gap-2">
            <span v-for="(tag, index) in form.skills" :key="index" class="bg-orange-100 text-red-700 px-3 py-1 rounded-lg mr-2 items-center justify-start">
              {{ tag }}
              <button @click="removeTag(index)" class="ml-2 text-gray-400 focus:outline-none justify-end items-center">x</button>
            </span>
            <input 
              type="text" 
              v-model="newTag" 
              @keydown.enter.prevent="addTag"
              placeholder="+ Add Skills"
              class="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
        </div>
  
        <div class="mb-4 flex items-center">
          <label class="block text-sm font-medium mr-4" for="postNow">Post This Job Right Now?</label>
          <input 
            type="checkbox" 
            v-model="form.postNow" 
            id="postNow"
            class="toggle-checkbox"
          />
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
  export default {
    name: 'PostJobFormComponent',
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
          postNow: false,
        },
        newTag: '',
      };
    },
    methods: {
      createJob() {
        console.log(this.form);
      },
      addTag() {
        const trimmedTag = this.newTag.trim();
        if (trimmedTag && !this.form.skills.includes(trimmedTag)) {
          this.form.skills.push(trimmedTag);
        }
        this.newTag = '';
      },
      removeTag(index) {
        this.form.skills.splice(index, 1);
      },
    },
  };
</script>
  
<style scoped>
  .toggle-checkbox {
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-color: white;
    transition: all 0.2s;
  }
  .toggle-checkbox:checked {
    background-color: #74C68A;
  }
</style>
  
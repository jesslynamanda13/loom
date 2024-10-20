<template>
  <div class="portfolio-form bg-white p-6 w-full">
    <h2 class="text-lg font-bold mb-4">Add Portfolio</h2>

    <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700"
          >Title <span class="text-red-700">*</span></label
        >
        <input
          v-model="title"
          type="text"
          id="title"
          class="p-4 mt-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter project title"
          required
        />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description <span class="text-red-700">*</span></label
        >
        <textarea
          v-model="description"
          id="description"
          class="p-4 mt-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter project description"
          rows="3"
          required
        ></textarea>
      </div>
      <div>
        <label for="imageLink" class="block text-sm font-medium text-gray-700"
          >Image Link <span class="text-red-700">*</span></label
        >
        <input
          v-model="imageLink"
          type="text"
          id="imageLink"
          class="p-4 mt-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div>
        <label for="projectLink" class="block text-sm font-medium text-gray-700"
          >Project Link <span class="text-red-700">*</span></label
        >
        <input
          v-model="projectLink"
          type="text"
          id="projectLink"
          class="p-4 mt-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter project URL"
          required
        />
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-red-700 text-white text-sm py-2 px-6 rounded-md hover:bg-gray-700 transition duration-200"
        >
          Add Portfolio
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { AddPortfolioDTO } from '@/models/Portfolio'
import PortfolioService from '@/services/PortfolioService'

export default {
  name: 'AddPortfolioFormComponent',
  data() {
    return {
      title: '',
      description: '',
      imageLink: '',
      projectLink: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const request = new AddPortfolioDTO(
          this.title,
          this.description,
          this.imageLink,
          this.projectLink
        )
        const response = await PortfolioService.addPortfolio(request)

        if (response.status === 200) {
          this.$emit('portfolio-added', response)
        }
      } catch (error) {
        console.log(error)
      }

      this.title = ''
      this.description = ''
      this.imageLink = ''
      this.projectLink = ''
    }
  }
}
</script>

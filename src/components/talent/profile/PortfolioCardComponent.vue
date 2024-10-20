<template>
  <div class="portfolio-card w-full">
    <div class="bg-white rounded-lg border border-gray-300 p-6 w-fit">
      <div class="image-section mb-4">
        <img :src="imageSrc" :alt="title" class="rounded-lg w-64 h-32" />
      </div>

      <div class="text-section">
        <h2 class="text-lg font-bold">{{ title }}</h2>
        <p class="text-xs text-gray-400 mt-2">Description</p>
        <p class="text-sm text-gray-600 mt-1 w-64">
          {{ truncatedDescription }}
          <span v-if="description.length > 40">
            <button @click="toggleDescription" class="text-blue-500 underline text-sm">
              {{ showFullDescription ? 'View Less' : 'View More' }}
            </button>
          </span>
        </p>
      </div>

      <div class="link-section mt-4">
        <p class="font-bold text-black">Link</p>
        <a
          :href="link"
          class="text-sm block mt-2 border border-black rounded-md px-4 py-2 w-fit underline"
          target="_blank"
        >
          {{ truncatedLink }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCardComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showFullDescription: false
    }
  },
  computed: {
    truncatedDescription() {
      return this.showFullDescription || this.description.length <= 40
        ? this.description
        : this.description.slice(0, 80) + '...'
    },
    truncatedLink() {
      return this.link.length > 25 ? this.link.slice(0, 25) + '...' : this.link
    }
  },
  methods: {
    toggleDescription() {
      // Toggle between full and truncated description
      this.showFullDescription = !this.showFullDescription
    }
  }
}
</script>

<style scoped>
button {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
}
</style>

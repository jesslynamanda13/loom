<template>
  <div id="app">
    <NavbarComponent />
    <section class="landing">
      <div class="content">
        <div class="headline mt-24 bg-lines">
          <HeadlineComponent />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeadlineComponent from '@/components/landing/HeadlineComponent.vue'
import NavbarComponent from '@/components/landing/NavbarComponent.vue'

export default {
  name: 'LandingPage',
  components: {
    NavbarComponent,
    HeadlineComponent
  }
}
</script>

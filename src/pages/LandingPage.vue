<template>
  <div id="app">
    <NavbarComponent />
    <section class="landing">
      <div class="content">
        <div class="headline mt-24 bg-lines">
          <HeadlineComponent />
        </div>
        <div class="features">
          <FeaturesComponent />
        </div>
        <div class="about">
          <AboutComponent />
        </div>
        <div class="footer">
          <FooterComponent />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AboutComponent from '@/components/landing/AboutComponent.vue'
import FeaturesComponent from '@/components/landing/FeaturesComponent.vue'
import HeadlineComponent from '@/components/landing/HeadlineComponent.vue'
import NavbarComponent from '@/components/landing/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'LandingPage',
  components: {
    NavbarComponent,
    HeadlineComponent,
    FeaturesComponent,
    AboutComponent,
    FooterComponent
  }
}
</script>

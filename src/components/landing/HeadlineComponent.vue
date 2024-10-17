<template>
  <section class="headline">
    <div>
      <div class="content flex flex-col gap-6 align-middle items-center">
        <div class="headlines flex flex-col font-bold text-5xl gap-3 items-center">
          <p>Empower Your Business</p>
          <p>One Job at a Time</p>
        </div>
        <div class="subtitle w-1/2">
          <p class="text-center">
            Loom is Indonesia’s first platform that bridges freelancers and SMEs. We aim to
            streamline collaboration by providing a seamless space for freelancers to offer their
            services and for SMEs to easily post jobs.
          </p>
        </div>
        <div class="button z-20">
          <button
            @click="navigateSignUp"
            class="bg-black text-white text-sm font-medium py-4 px-10 rounded-lg"
          >
            Get Started
          </button>
        </div>
      </div>
      <div class="image relative mt-[-230px] z-0">
        <img src="/assets/img/headline-images.png" alt="Landing Image" class="landing-image" />
      </div>
      <div class="image relative">
        <img src="/assets/img/divider-flag.png" alt="Divider Flag" class="divider-flag" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeadlineComponent',
  methods: {
    navigateSignUp() {
      this.$router.push('/sign-up')
    }
  }
}
</script>

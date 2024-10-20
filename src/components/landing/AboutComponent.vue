<template>
  <section class="about">
    <div class="mt-32">
      <div class="flex flex-col">
        <!-- set this background -->
        <img class="z-0" src="/assets/img/about-img.png" />
        <div class="about-text px-48 z-20 mt-[-1000px]">
          <div class="gap-2">
            <p class="font-bold text-2xl text-center align-middle justify-center">About</p>
            <p class="text-base text-center mt-4">
              Loom contributes to achieving <b>SDG 8</b>: “Promote sustained, inclusive and
              sustainable economic growth, full and productive employment and decent work for all”
              by fostering sustained, inclusive, and sustainable economic growth through its
              platform, which connects talents with SMEs.
            </p>
          </div>

          <div class="about-points flex flex-row gap-24 align-middle justify-center mt-12">
            <div class="poin-1 flex flex-col gap-2 w-60 text-center items-center">
              <img class="w-16" src="/assets/img/about-point1.png" />
              <p class="font-bold text-lg">Productive Employment for All</p>
              <p class="text-sm">
                Loom bridges the employment gap for those outside traditional full-time roles,
                including remote workers, part-time professionals, and gig workers.
              </p>
            </div>

            <div class="poin-2 flex flex-col gap-2 w-60 text-center items-center">
              <img class="w-16" src="/assets/img/about-point2.png" />
              <p class="font-bold text-lg">Support for Small and Medium Enterprises</p>
              <p class="text-sm">
                Loom empowers SMEs by enabling them to hire freelancers for specific projects,
                allowing sustainable growth without the overhead of full-time employment.
              </p>
            </div>

            <div class="poin-3 flex flex-col gap-2 w-60 text-center items-center">
              <img class="w-16" src="/assets/img/about-point3.png" />
              <p class="font-bold text-lg">Sustainable Economic Practice</p>
              <p class="text-sm">
                Loom promotes the gig economy by enabling flexible, sustainable work arrangements,
                allowing SMEs to hire as needed, minimizing waste, and maximizing efficiency.
              </p>
            </div>
          </div>
          <div
            class="mt-24 indonesia flex flex-col align-middle justify-center text-center items-center"
          >
            <div class="image w-3/5">
              <img src="/assets/img/indonesia-img.png" />
            </div>
            <div class="text-content">
              <p class="font-bold text-xl">Today, Indonesia.</p>
              <p class="font-bold text-xl">Tomorrow, Asia, and beyond.</p>
              <p class="text-base mt-6 px-4">
                Loom aims to support Indonesia's economic growth and life improvement. As we expand,
                our goal is to drive economic development across Asia and beyond, empowering SMEs
                and talents globally.
              </p>
            </div>
          </div>
          <div
            class="mt-20 mb-20 ready-to-transform flex flex-row align-middle items-center gap-20 justify-center"
          >
            <div class="left w-56">
              <p class="font-bold text-2xl">Ready to transform the way you work?</p>
              <button
                @click="navigateToSignUp"
                class="mt-4 bg-black text-white text-sm font-medium py-4 px-10 rounded-lg"
              >
                Sign up
              </button>
              <p class="text-xs text-gray-400 mt-6">
                Loom services are all free, with no subscriptions or hidden fees.
              </p>
            </div>
            <div class="right w-96">
              <img src="/assets/img/ready-to-transform-img.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent',
  methods: {
    navigateToSignUp() {
      this.$router.push('/sign-up')
    }
  }
}
</script>

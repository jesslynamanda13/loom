<template>
  <section class="footer">
    <div class="content px-20 py-12">
      <div class="flex flex-row items-end justify-between">
        <div class="left flex flex-col">
          <div class="logo">
            <img class="w-32" src="/assets/img/loom-logo.png" />
          </div>
          <div class="text-content mt-2">
            <p class="text-base font-medium w-64">Empowering your business.</p>
            <p class="text-base font-medium w-64">One job at a time.</p>
          </div>
          <div class="media-social flex flex-row gap-4 mt-8">
            <img class="w-6" src="/assets/img/instagram.png" />
            <img class="w-6" src="/assets/img/linkedin.png" />
          </div>
        </div>
        <div class="right">
          <p class="underline text-red-900 font-medium text-sm">Help</p>
          <p class="underline text-red-900 font-medium text-sm">Privacy & Policy</p>
        </div>
      </div>
      <div class="mt-8">
        <hr />
        <p class="text-sm font-medium mt-4">© 2024 Loom Team. All Rights Reserved.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #f9f9f9;
}
</style>

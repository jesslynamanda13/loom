<template>
  <section class="features">
    <div>
      <div class="content flex flex-col gap-12 align-middle items-center px-16 mt-12">
        <div class="flex flex-row align-middle justify-center gap-64 items-center">
          <div class="text w-96 gap-4">
            <p class="font-bold text-lg">For SMEs,</p>
            <p class="font-bold text-3xl">loom is a place to tell that you’re hiring talents!</p>
            <div class="subtitle mt-6">
              <p>
                You can easily create job openings for your business, whether you need part-time
                employees or freelance workers—find the right talent all in one place!
              </p>
            </div>
          </div>
          <div class="image w-96">
            <img src="/assets/img/job-openings-box.png" alt="Job Openings Box" />
          </div>
        </div>

        <div>
          <div class="flex flex-row align-middle justify-center gap-56 items-center">
            <div class="image w-96">
              <img src="/assets/img/profiles-box.png" alt="Profiles Box" />
            </div>
            <div class="text w-96 gap-4">
              <p class="font-bold text-lg">For talents,</p>
              <p class="font-bold text-3xl">loom is a place to land your next opportunity!</p>
              <div class="subtitle mt-6">
                <p>
                  You can create a standout profile, showcase your portfolio, apply to job openings,
                  and message directly with SMEs to advance your carreer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesComponent'
}
</script>

<template>
  <div class="content">
    <TalentNavbarComponent :currentPage="'explore-jobs'" />
    <div class="components mt-12 px-12">
      <div class="flex flex-row gap-4">
        <div
          class="job-card max-w-2xl mx-auto px-6 py-8 bg-white border border-gray-200 rounded-lg"
        >
          <div class="flex">
            <div>
              <p class="text-gray-500">Posted 2 weeks ago</p>
              <h1 class="text-3xl font-bold mb-2 mt-2">Mobile Developer</h1>
              <div class="flex space-x-3 mt-4 align-middle items-center text-sm">
                <img src="/assets/img/location-icon.png" class="w-3 h-auto" alt="" />
                <p class="text-black">Remote | Based in Jakarta</p>
              </div>
              <div class="flex space-x-3 mt-3 align-middle items-center text-sm">
                <img src="/assets/img/work-icon.png" class="w-3 h-auto" alt="" />
                <p class="text-black">Part-Time (20 hours / week)</p>
              </div>
              <div class="flex space-x-3 mt-3 align-middle items-center text-sm">
                <img src="/assets/img/wage-icon.png" class="w-4 h-auto" alt="" />
                <p class="text-black">Rp. 600.000 (Weekly)</p>
              </div>
              <div class="flex space-x-3 mt-3 align-middle items-center text-sm">
                <img src="/assets/img/skills-icon.png" alt="" class="w-4 h-auto" />
                <span class="px-2 py-1 bg-orange-200 text-orange-700 rounded-lg text-sm"
                  >Mobile Development</span
                >
                <span class="px-2 py-1 bg-orange-200 text-orange-700 rounded-lg text-sm"
                  >UI/UX Design</span
                >
              </div>
              <div class="flex flex-row space-x-4 mt-6">
                <button class="bg-black text-white flex items-center px-4 py-2 rounded-md text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  Apply Now
                </button>

                <button
                  class="text-sm bg-white border border-black text-black px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div class="my-6">
            <div class="border-t border-gray-200"></div>
          </div>

          <!-- Job Description -->
          <div class="mt-6">
            <div class="title flex flex-row gap-2 align-middle items-center">
              <img src="/assets/img/job-desc-icon.png" alt="" class="w-4 h-5" />
              <h2 class="text-xl font-bold">Job Description</h2>
            </div>
            <p class="mt-2 text-black mb-4">
              As a Mobile Developer at Tenue d'Attire, you will play a key role in designing,
              developing, and maintaining mobile applications that align with the company’s
              fashion-forward vision.
            </p>
            <ul class="list-disc list-inside text-black">
              <li>Translating UI/UX designs into fully functional mobile applications.</li>
              <li>Writing clean, maintainable code for Android/iOS platforms.</li>
              <li>Integrating APIs and third-party libraries as needed.</li>
              <li>Troubleshooting, debugging, and optimizing app performance.</li>
              <li>Ensuring app stability and maintaining app versioning.</li>
              <li>Staying up-to-date with mobile development trends, tools, and technologies.</li>
            </ul>
          </div>

          <!-- Qualifications -->
          <div class="mt-6">
            <div class="title flex flex-row gap-2 align-middle items-center">
              <img src="/assets/img/qualifications-icon.png" alt="" class="w-5 h-5" />
              <h2 class="text-xl font-bold">Qualifications</h2>
            </div>
            <ul class="mt-2 list-disc list-inside text-black">
              <li>Proven experience in mobile app development (Android/iOS).</li>
              <li>Proficiency in Java/Kotlin (for Android) or Swift (for iOS).</li>
              <li>Strong understanding of mobile UI/UX principles.</li>
              <li>Experience with RESTful APIs, databases, and backend integration.</li>
              <li>Familiarity with Git and version control systems.</li>
              <li>Strong problem-solving and analytical skills.</li>
              <li>Ability to work in a collaborative team environment.</li>
            </ul>
          </div>
        </div>

        <div class="right">
          <p class="text-lg font-semibold mb-4">Posted by</p>
          <div class="bg-white border border-gray-200 px-6 py-8 rounded-lg">
            <div class="flex flex-row justify-between items-start gap-4">
              <div class="sme-name flex flex-col items-start">
                <img src="/assets/img/company-logo.png" alt="" class="w-16 h-16" />
              </div>
              <div class="flex flex-row space-x-4">
                <button
                  class="bg-green-200 text-black text-sm px-4 rounded-lg w-auto flex items-center"
                >
                  <span class="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
                  Active
                </button>
                <button
                  class="text-xs border border-black bg-white text-black justify-center font-semibold px-6 py-2 rounded-md hover:bg-gray-100 flex items-center w-full"
                >
                  <img src="/assets/img/message-icon.png" class="w-4 mr-2" alt="Chat Icon" />
                  Message
                </button>
              </div>
            </div>
            <div class="sub-title">
              <h3 class="mt-2 text-lg font-semibold">Tenue d'Attire</h3>
              <p class="text-gray-500 text-xs">Clothing store in Jakarta</p>
              <p class="text-black mt-2 text-sm">
                At TdA, we're not just creating cool clothes, it's about redefining how people
                connect with and enjoy city living.
              </p>
            </div>
            <div class="my-6">
              <div class="border-t border-gray-200"></div>
            </div>
            <div class="contact-info">
              <p class="text-lg font-semibold mb-4">Contact Information</p>
              <div class="flex flex-row justify-between">
                <div class="email flex flex-row space-x-2 items-center">
                  <img src="/assets/img/email-icon.png" alt="" class="w-5 h-5" />
                  <p class="text-sm">info@tenuedeattire.com</p>
                </div>
                <div class="social-media flex flex-row space-x-2 items-center">
                  <img src="/assets/img/social-media-icon.png" alt="" class="w-5 h-5" />
                  <p class="text-sm">https://tenuedeattire.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Similar Jobs -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">More Openings at Tenue d'Attire</h3>
            <div class="grid grid-cols-1 gap-4">
              <div
                class="border p-4 rounded-lg shadow-sm flex flex-row justify-between align-middle items-center"
              >
                <div class="left flex flex-row gap-4">
                  <img src="/assets/img/company-logo.png" class="w-12 h-12" alt="" />
                  <div class="component">
                    <h4 class="font-semibold">Mobile Developer (iOS)</h4>
                    <p class="text-gray-400 text-xs">Jakarta | Freelance | On-site</p>
                  </div>
                </div>
                <div class="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Similar Jobs -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">Similar jobs to "Mobile Developer"</h3>
            <div class="grid grid-cols-1 gap-4">
              <div
                class="border p-4 rounded-lg shadow-sm flex flex-row justify-between align-middle items-center"
              >
                <div class="left flex flex-row gap-4">
                  <img src="/assets/img/company-logo.png" class="w-12 h-12" alt="" />
                  <div class="component">
                    <h4 class="font-semibold">Mobile Developer (iOS)</h4>
                    <p class="text-gray-400 text-xs">Jakarta | Freelance | On-site</p>
                  </div>
                </div>
                <div class="right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12">
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import TalentNavbarComponent from '@/components/talent/TalentNavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'JobDetailsPage',
  components: {
    TalentNavbarComponent,
    FooterComponent
  }
}
</script>

<template>
  <div class="content">
    <TalentNavbarComponent :currentPage="'explore-jobs'" />
    <div class="components mt-12 px-12">
      <div class="flex flex-row gap-4">
        <JobDetailsCardComponent
          postedTime="2 weeks ago"
          jobTitle="Mobile Developer"
          jobLocation="Remote | Based in Jakarta"
          workType="Part-Time"
          hoursPerWeek="20 hours / week"
          salary="Rp. 600.000 (Weekly)"
          :skills="['Mobile Development', 'UI/UX Design']"
          jobDescription="As a Mobile Developer at Tenue d'Attire, you will play a key role in designing, developing, and maintaining mobile applications that align with the company’s fashion-forward vision."
          :jobResponsibilities="[
            'Translating UI/UX designs into fully functional mobile applications.',
            'Writing clean, maintainable code for Android/iOS platforms.',
            'Integrating APIs and third-party libraries as needed.',
            'Troubleshooting, debugging, and optimizing app performance.',
            'Ensuring app stability and maintaining app versioning.',
            'Staying up-to-date with mobile development trends, tools, and technologies.'
          ]"
          :qualifications="[
            'Proven experience in mobile app development (Android/iOS).',
            'Proficiency in Java/Kotlin (for Android) or Swift (for iOS).',
            'Strong understanding of mobile UI/UX principles.',
            'Experience with RESTful APIs, databases, and backend integration.',
            'Familiarity with Git and version control systems.',
            'Strong problem-solving and analytical skills.',
            'Ability to work in a collaborative team environment.'
          ]"
        />
        <div class="right">
          <p class="text-lg font-semibold mb-4">Posted by</p>
          <SMEInformation
            companyLogo="/assets/img/company-logo.png"
            status="Active"
            companyName="Tenue d'Attire"
            companyTagline="Clothing store in Jakarta"
            companyDescription="At TdA, we're not just creating cool clothes, it's about redefining how people connect with and enjoy city living."
            email="info@tenuedeattire.com"
            website="https://tenuedeattire.com"
          />
          <!-- Company Other Jobs -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">More Openings at Tenue d'Attire</h3>
            <div class="grid grid-cols-1 gap-4">
              <OtherJobsComponent
                companyLogo="/assets/img/company-logo.png"
                jobTitle="Mobile Developer (iOS)"
                location="Jakarta"
                workType="Freelance"
                workArrangement="On-site"
              />
            </div>
          </div>

          <!-- Similar Jobs -->
          <div class="mt-8">
            <h3 class="text-lg font-semibold mb-4">Similar jobs to "Mobile Developer"</h3>
            <div class="grid grid-cols-1 gap-4">
              <OtherJobsComponent
                companyLogo="/assets/img/company-logo.png"
                jobTitle="Mobile Developer (iOS)"
                location="Jakarta"
                workType="Freelance"
                workArrangement="On-site"
              />
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
import JobDetailsCardComponent from '@/components/talent/JobDetailsCardComponent.vue'
import SMEInformation from '@/components/talent/SMEInformationComponent.vue'
import OtherJobsComponent from '@/components/talent/OtherJobsComponent.vue'
export default {
  name: 'JobDetailsPage',
  components: {
    TalentNavbarComponent,
    FooterComponent,
    JobDetailsCardComponent,
    SMEInformation,
    OtherJobsComponent
  }
}
</script>

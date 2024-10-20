<template>
  <div class="content flex flex-col">
    <div class="container mt-4 bg-white border border-gray-200 rounded-lg py-6 px-8">
      <header class="flex flex-col mb-6">
        <div class="flex items-center mb-6">
          <img :src="companyLogo" alt="Company Logo" class="w-16 h-16 rounded-full" />
          <div class="ml-5">
            <h1 class="text-xl font-semibold text-gray-800 ml-1">{{ companyName }}</h1>
            <div class="flex flex-row items-center gap-5">
              <p class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {{ location }}
              </p>
              <p class="text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                {{ phoneNumber }}
              </p>
            </div>
          </div>

          <div class="ml-auto">
            <div class="flex items-center gap-3">
              <span class="px-5 py-2 text-sm font-medium rounded-full" :class="statusClass">{{ activeStatus ? 'Online' : 'Offline' }}</span>
              <button class="px-5 py-2 flex flex-row bg-white shadow rounded-lg hover:bg-gray-100 transition-all">
                <div class="text-gray-500 mr-1">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h2 class="text-gray-500">{{ email }}</h2>
              </button>

              <div class="cursor-pointer flex items-center bg-white shadow px-2 py-2 rounded-md gap-2 hover:bg-gray-100" @click="openEditModal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <section class="mb-6">
          <h2 class="text-lg font-semibold text-gray-700">About {{ companyName }}</h2>
          <p class="text-gray-600 mt-2">{{ companyDescription || 'Company description is not available.' }}</p>
        </section>

        <div class="flex gap-10">
          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Company Type</h3>
            <span class="inline-block px-4 py-2 font-medium bg-orange-100 text-red-700 rounded-full">
              {{ smeType.SMETypeName || 'Unknown Type' }}
            </span>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-700 mb-2">Social Media/Website</h3>
            <div v-if="!social">
              <p class="text-gray-600">Not available</p>
            </div>
            <div v-else>
              <div class="flex justify-between items-center space-x-2">
                <a :href="social" target="_blank" class="px-4 py-2 flex items-center space-x-2 text-black bg-orange-100 rounded-lg hover:bg-orange-200 transition-all">
                  <span class="[&>svg]:h-5 [&>svg]:w-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm75.6-15.3c-3.4-15.5-10.2-29.9-19.6-43.1-1.7-2.4-4.3-3.9-7.2-3.9H342.6c-1.2 0-2.4 0-3.6.1-13.6 1.1-26.6 7.4-37.6 18.4s-16.4 24-17.5 37.6c-.5 5.2.4 10.6 2.5 15.4 2 4.8 5.1 8.6 9.3 11.6-7.1 1.8-15 2.8-23 2.8H224c-30.9 0-56.1 25.3-56.1 56.1v75.6c0 30.9 25.2 56.1 56.1 56.1h112c6.1 0 12.1-.9 17.9-2.5 15.6-3.6 29.4-11.5 41.7-22.8 12.3-11.2 21.1-24.9 26.1-39.4 5-14.5 6.5-29.3 4.4-43.3zm-36.5 48.9c-5.8 29.1-34.4 48.8-64.6 48.8H224c-17.7 0-34.5-6.5-48-18.2-13.5-11.9-21.2-28.9-21.2-46.3v-75.6c0-17.7 7.7-34.7 21.2-46.6 13.5-11.9 30.3-18.2 48-18.2h35.4c30.2 0 58.8 19.7 64.6 48.8 1.7 8.5 3.4 17.7 2.4 27.1-1.2 14.6-6.7 28.5-14.8 39.3-3.1 4.1-5.8 8.8-8.5 13.5-1.2 2.3-3.2 4-5.5 5.1-12.2 5.5-27.5 6.5-41.8 6.5h-35.4c-30.2 0-58.8-19.7-64.6-48.8-1.7-8.5-3.4-17.7-2.4-27.1 1.2-14.6 6.7-28.5 14.8-39.3 3.1-4.1 5.8-8.8 8.5-13.5 1.2-2.3 3.2-4 5.5-5.1 12.2-5.5 27.5-6.5 41.8-6.5h35.4c30.2 0 58.8 19.7 64.6 48.8 1.7 8.5 3.4 17.7 2.4 27.1-1.2 14.6-6.7 28.5-14.8 39.3-3.1 4.1-5.8 8.8-8.5 13.5-1.2 2.3-3.2 4-5.5 5.1-12.2 5.5-27.5 6.5-41.8 6.5H224c-30.2 0-58.8-19.7-64.6-48.8-1.7-8.5-3.4-17.7-2.4-27.1 1.2-14.6 6.7-28.5 14.8-39.3 3.1-4.1 5.8-8.8 8.5-13.5 1.2-2.3 3.2-4 5.5-5.1 12.2-5.5 27.5-6.5 41.8-6.5h35.4c30.2 0 58.8 19.7 64.6 48.8z" />
                    </svg>
                  </span>
                  <h2 class="text-gray-600">{{ social }}</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div v-if="isEditModalOpen" class="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div class="bg-white rounded-lg p-6 w-screen max-w-lg max-h-full overflow-y-auto" style="margin-top: 50px;">
          <h2 class="text-xl font-semibold mb-4">Edit Profile</h2>
          <form @submit.prevent="saveChanges">
              <div class="mb-4">
                  <label class="block mb-1">Company Name:</label>
                  <input v-model="editedCompanyName" type="text" class="border rounded w-full py-2 px-3" required />
              </div>
              <div class="mb-4">
                  <label class="block mb-1">Company Description:</label>
                  <textarea v-model="editedCompanyDescription" class="border rounded w-full py-2 px-3" required></textarea>
              </div>
              <div class="mb-4">
                  <label class="block mb-1">Location:</label>
                  <input v-model="editedLocation" type="text" class="border rounded w-full py-2 px-3" required />
              </div>
              <div class="mb-4">
                  <label class="block mb-1">Phone Number:</label>
                  <input v-model="editedPhoneNumber" type="text" class="border rounded w-full py-2 px-3" required />
              </div>
              <div class="mb-4">
                  <label class="block mb-1">Email:</label>
                  <input v-model="editedEmail" type="email" class="border rounded w-full py-2 px-3" required />
              </div>
              <div class="mb-4">
                  <label class="block mb-1">CEO:</label>
                  <input v-model="editedCEO" type="text" class="border rounded w-full py-2 px-3" required />
              </div>
              <div class="mb-4">
                  <label class="block mb-1">Social Media Links:</label>
                  <input v-model="editedSocial" type="text" class="border rounded w-full py-2 px-3" placeholder="e.g., https://twitter.com/yourcompany" />
              </div>
              <div class="mb-4">
                  <label class="block mb-1">Active Status:</label>
                  <select v-model="editedActiveStatus" class="border rounded w-full py-2 px-3" required>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                  </select>
              </div>
              <div class="mb-4">
                  <label class="block mb-1">SME Type:</label>
                  <input v-model="editedSMETypeID" type="text" class="border rounded w-full py-2 px-3" required />
              </div>
              <div class="flex justify-between">
                  <button type="button" class="bg-gray-300 px-4 py-2 rounded" @click="closeEditModal">Cancel</button>
                  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
              </div>
          </form>
      </div>
  </div>

  </div>
</template>

<script>
import SMEService from '@/services/SMEService';

export default {
  data() {
    return {
      smeID: '',
      email: '',
      companyName: '',
      companyDescription: '',
      ceo: '',
      social: '',
      phoneNumber: '',
      activeStatus: false,
      smeType: {
        SMETypeID: '',
        SMETypeName: '',
        SMETypeDescription: ''
      },
      companyLogo: '/public/assets/img/default-photo.jpg',
      location: 'Jakarta, Indonesia',
      isEditModalOpen: false,
    };
  },
  computed:{
    statusClass() {
      return this.activeStatus
        ? 'bg-green-100 text-green-600'
        : 'bg-red-100 text-red-600';
    }
  },
  async mounted(){
    await this.fetchSMEProfile();
  },
  methods: {
    async fetchSMEProfile() {
      try {
        const data = await SMEService.getSMEProfile();

        this.smeID = data.SMEID || 'N/A';
        this.email = data.Email || 'Not available';
        this.companyName = data.CompanyName || 'Unknown Company';
        this.companyDescription = data.CompanyDescription || 'No description available.';
        this.ceo = data.CEO || 'No CEO information';
        this.social = data.Social;
        this.phoneNumber = data.PhoneNumber || 'Phone number not available';
        this.activeStatus = data.ActiveStatus || false;
        this.smeType = {
          SMETypeID: data.SMEType.SMETypeID || 'N/A',
          SMETypeName: data.SMEType.SMETypeName || 'Beauty, Skincare',
          SMETypeDescription: data.SMEType.SMETypeDescription || 'N/A',
        };
      } catch (error) {
        console.error('Error fetching SME profile:', error);
      }
    },
    openEditModal() {
      console.log('Edit modal opened');
      this.editedCompanyName = this.companyName;
      this.editedCompanyDescription = this.companyDescription;
      this.editedLocation = this.location;
      this.editedPhoneNumber = this.phoneNumber;
      this.editedEmail = this.email;
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    saveChanges() {
      const editSMEDTO = {
          companyName: this.editedCompanyName,
          companyDescription: this.editedCompanyDescription,
          CEO: this.editedCEO, 
          social: this.editedSocial, 
          phoneNumber: this.editedPhoneNumber,
          activeStatus: this.editedActiveStatus, 
          SMETypeID: this.editedSMETypeID 
      };

      this.SMEService.editSME(editSMEDTO)
      .then(response => {
          console.log('SME details updated successfully:', response);
          this.closeEditModal();
      })
      .catch(error => {
          console.error('Error saving changes:', error);
      });
    }
  }
};
</script>
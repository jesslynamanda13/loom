import api from './api'
import { jwtDecode } from 'jwt-decode'

const SMEService = {
  async loginSME(LoginSMEDTO) {
    try {
      const response = await api.post('/public/sme-login', LoginSMEDTO)
      return response
    } catch (error) {
      console.error('Error logging in sme:', error)
      throw error
    }
  },

  async registerSME(RegisterSMEDTO) {
    try {
      const response = await api.post('/public/sme-register', RegisterSMEDTO)
      return response
    } catch (error) {
      console.error('Error registering sme:', error)
      throw error
    }
  },

  async getSMEID() {
    const token = localStorage.getItem('authToken')

    if (!token) {
      throw new Error('Token not found')
    }

    const decodedToken = jwtDecode(token)

    const SMEId = decodedToken['user_id']
    return SMEId
  },

  async getSMEProfile() {
    try {
      const token = localStorage.getItem('authToken')

      if (!token) {
        throw new Error('Token not found')
      }

      const SMEId = await this.getSMEID()
      console.log('SMEId:', SMEId);

      if (!SMEId) {
        throw new Error('SMEID not found in token')
      }

      const response = await api.get(`/private/get-sme-detail?sme_id=${SMEId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
      return response.data['Data']
    } catch (error) {
      console.error('Error fetching talent profile:', error)
      throw error
    }
  },

  async postJob(jobDTO) {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error('Token not found');
      }

      const response = await api.post('/private/post-a-job', jobDTO, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error posting job:', error);
      throw error;
    }
  },

  async getAllJobs() {
    try {
      const token = localStorage.getItem('authToken');
      console.log(token)
  
      if (!token) {
        throw new Error('Token not found');
      }
  
      const SMEId = await this.getSMEID();
      console.log('SMEId:', SMEId);
      if (!SMEId) {
        throw new Error('SMEID not found in token');
      }
  
      const response = await api.post(
        `/private/get-job-posted?sme_id=${SMEId}`,
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
  
      console.log('Response data:', response.data['Jobs']);
  
      if (!response.data || !response.data.Jobs) {
        throw new Error('Invalid response structure or no jobs found');
      }
  
      return response.data['Jobs'];
    } catch (error) {
      console.error('Error fetching all jobs:', error);
      throw error;
    }
  },

  async editSME(editSMEDTO) {
    try {
      const token = localStorage.getItem('authToken')

      if (!token) {
        throw new Error('Token not found')
      }

      const response = await api.post('/private/edit-sme', editSMEDTO, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response.data
    } catch (error) {
      console.error('Error editing SME details:', error)
      throw error
    }
  }
}

export default SMEService

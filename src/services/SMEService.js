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

  async getSMEProfile() {
    try {
      const token = localStorage.getItem('authToken')

      if (!token) {
        throw new Error('Token not found')
      }

      const decodedToken = jwtDecode(token)

      const SMEId = decodedToken['user_id']

      if (!SMEId) {
        throw new Error('SMEID not found in token')
      }

      const response = await api.get(`/private/get-sme-detail?sme_id=${SMEId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response.data['Data']
    } catch (error) {
      console.error('Error fetching talent profile:', error)
      throw error
    }
  },

  async getAllSkills() {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await api.get('/private/get-all-skills', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data || !response.data.Skills) {
        throw new Error('No skills found');
      }

      console.log('Fetched Skills:', response.data.Skills);
      return response.data.Skills;
    } catch (error) {
      console.error('Error fetching skills:', error);
      throw error;
    }
  }, 
}

export default SMEService

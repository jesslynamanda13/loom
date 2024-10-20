import { jwtDecode } from 'jwt-decode'
import api from './api'

const TalentService = {
  async loginTalent(LoginTalentDTO) {
    try {
      const response = await api.post('/public/talent-login', LoginTalentDTO)
      return response
    } catch (error) {
      console.error('Error logging in talent:', error)
      throw error
    }
  },

  async registerTalent(RegisterTalentDTO) {
    try {
      const response = await api.post('/public/talent-register', RegisterTalentDTO)
      return response
    } catch (error) {
      console.error('Error registering talent:', error)
      throw error
    }
  },

  async getTalentProfile() {
    try {
      const token = localStorage.getItem('authToken')

      if (!token) {
        throw new Error('Token not found')
      }

      const decodedToken = jwtDecode(token)

      const talentId = decodedToken['user_id']

      if (!talentId) {
        throw new Error('TalentID not found in token')
      }

      const response = await api.get(`/private/get-talent-detail?talent_id=${talentId}`, {
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

  async getAllTalents() {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        throw new Error('Token not found');
      }

      const response = await api.get('/private/get-all-talent', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data || !response.data.Talents) {
        throw new Error('No talents found');
      }

      console.log('Fetched Talents:', response.data.Talents);
      return response.data.Talents;
    } catch (error) {
      console.error('Error fetching talents:', error);
      throw error;
    }
  },  
}

export default TalentService

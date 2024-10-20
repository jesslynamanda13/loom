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
  async getTalentID() {
    const token = localStorage.getItem('authToken')

    if (!token) {
      throw new Error('Token not found')
    }

    const decodedToken = jwtDecode(token)

    const talentId = decodedToken['user_id']
    return talentId
  },
  async getTalentProfile() {
    try {
      const token = localStorage.getItem('authToken')
      const talentId = await this.getTalentID()

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

  async editProfile(EditTalentDTO) {
    try {
      const token = localStorage.getItem('authToken')
      const talentId = await this.getTalentID()

      if (!token) {
        throw new Error('Token not found')
      }

      const response = await api.post(`/private/edit-talent?talent_id=${talentId}`, EditTalentDTO, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return response
    } catch (error) {
      console.error('Error editing talent profile:', error)
      throw error
    }
  }
}

export default TalentService

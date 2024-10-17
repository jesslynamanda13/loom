import api from './api'

const TalentService = {
  async loginTalent(LoginTalentDTO) {
    try {
      const response = await api.post('/talent-login', LoginTalentDTO)
      return response
    } catch (error) {
      console.error('Error logging in talent:', error)
      throw error
    }
  },

  async registerTalent(RegisterTalentDTO) {
    try {
      const response = await api.post('/talent-register', RegisterTalentDTO)
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

      const response = await api.get('/get-talent-profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response.data
    } catch (error) {
      console.error('Error fetching talent profile:', error)
      throw error
    }
  }
}

export default TalentService

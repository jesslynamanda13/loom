import api from './api'

const SkillsService = {
  async getAllSkills() {
    try {
      const token = localStorage.getItem('authToken')

      if (!token) {
        throw new Error('Token not found')
      }

      const response = await api.get('/private/get-all-skills', {
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

export default SkillsService

import api from './api'

const UserService = {
  async getUserRole(email) {
    try {
      const response = await api.post('/check-user-role', { email })
      return response
    } catch (error) {
      console.error('Error fetching user role:', error)
      throw error
    }
  }
}

export default UserService

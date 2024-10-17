import api from './api'

const SMEService = {
  async loginSME(LoginSMEDTO) {
    try {
      const response = await api.post('/sme-login', LoginSMEDTO)
      return response
    } catch (error) {
      console.error('Error logging in sme:', error)
      throw error
    }
  },

  async registerSME(RegisterSMEDTO) {
    try {
      const response = await api.post('/sme-register', RegisterSMEDTO)
      return response
    } catch (error) {
      console.error('Error registering sme:', error)
      throw error
    }
  }
}

export default SMEService

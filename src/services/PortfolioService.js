import api from './api'

const PortfolioService = {
  async addPortfolio(portfolioDTO) {
    try {
      const token = localStorage.getItem('authToken')
      if (!token) {
        throw new Error('Token not found')
      }

      const response = await api.post('/private/add-portofolio', portfolioDTO, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response
    } catch (error) {
      console.error('Error adding portfolio:', error)
      throw error
    }
  },

  async getPortfolio() {
    try {
      const token = localStorage.getItem('authToken')
      if (!token) {
        throw new Error('Token not found')
      }

      const response = await api.get('/private/get-portofolio', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log('Pure response from server:', response)
      return response
    } catch (error) {
      console.error('Error fetching portfolio:', error)
      throw error
    }
  }
}

export default PortfolioService

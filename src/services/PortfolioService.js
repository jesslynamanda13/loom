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
  },

  async getPortfolioByTalentId(talentId) {
    try {
      const token = localStorage.getItem('authToken')
      console.log('TalentID: ', talentId)
  
      if (!talentId) {
        throw new Error('TalentID is required to fetch portfolio')
      }
  
      const response = await api.get(`/private/get-portofolio-by-talent-id?talent_id=${talentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log(response)
      return response.data['Data']
    } catch (error) {
      console.error('Error fetching talent portfolio:', error)
      throw error
    }
  }
}

export default PortfolioService

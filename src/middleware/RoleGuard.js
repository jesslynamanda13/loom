import api from '@/services/api'

export default async function checkUserRole() {
  try {
    const response = await api.get('/check-user-role-by-jwt', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    })
    return response['data']['Role']
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.error('User is not authenticated.')
      return 'unauthenticated'
    } else {
      console.error('Error checking user role:', error)
      return null
    }
  }
}

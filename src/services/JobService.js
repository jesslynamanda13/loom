import api from './api'

const JobService = {
  async getJobs() {
    try {
      const response = await api.get('/private/get-all-job')
      if (response) {
        const jobs = response['data']['Jobs']

        const jobsWithSkills = await Promise.all(
          jobs.map(async (job) => {
            const skills = await this.getSkillsByJobId(job.JobID)
            return {
              ...job,
              Skills: skills
            }
          })
        )
        console.log('jobsWithSkills:', jobsWithSkills)
        return jobsWithSkills
      }
    } catch (error) {
      console.error('Error getting jobs:', error)
      throw error
    }
  },
  async getSkillsByJobId(jobId) {
    try {
      const response = await api.get(`/private/jobs/${jobId}/skills`)
      const skills = response.data.Skills || []
      const skillNames = skills.map((skill) => skill.SkillName)

      return skillNames
    } catch (error) {
      console.error(`Error getting skills for job ID ${jobId}:`, error)
      return []
    }
  },
  async getJobById(jobId) {
    try {
      const response = await api.get(`/private/jobs/${jobId}`)
      if (response) {
        const job = response.data['Data']
        const skills = await this.getSkillsByJobId(job.JobID)
        const jobWithSkills = {
          ...job,
          Skills: skills
        }
        return jobWithSkills
      }
    } catch (error) {
      console.error(`Error getting job by ID ${jobId}:`, error)
      return null
    }
  },
  async getSMEId(smeId) {
    try {
      const response = await api.get(`/private/get-sme-detail`, {
        params: {
          sme_id: smeId
        }
      })
      console.log('SME ID:', response)
      return response.data['Data']
    } catch (error) {
      console.error('Error fetching SME profile:', error)
      throw error
    }
  }
}

export default JobService

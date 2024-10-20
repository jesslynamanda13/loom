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
  }
}

export default JobService

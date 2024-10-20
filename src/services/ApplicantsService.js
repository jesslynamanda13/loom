import api from './api';
import { jwtDecode } from 'jwt-decode';

const ApplicantsService = {
    async getApplicantsByJob(jobId) {
        try {
            const token = localStorage.getItem('authToken');
    
            if (!token) {
                throw new Error('Token not found');
            }
    
            const decodedToken = jwtDecode(token);
            const SMEId = decodedToken['user_id'];
            console.log("SME ID: ", SMEId);
    
            if (!SMEId) {
                throw new Error('SME ID not found in token');
            }
    
            console.log("Job ID: ", jobId);
    
            const response = await api.post(
                '/private/get-all-applicants-by-job-id',
                { job_id: jobId }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            console.log('Response from API:', response);
    
            if (!response.data || response.data.ListAppID === null) {
                console.error('No applicants found for this job.');
                return [];  
            }
    
            return response.data.ListAppID;
        } catch (error) {
            console.error('Error fetching applicants:', error.response ? error.response.data : error.message);
            throw error;
        }
    }
};

export default ApplicantsService;

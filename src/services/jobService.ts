import axios from 'axios';

const API_URL = 'https://localhost:44309/api/job/relationships';

export const getJobs = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        accept: '*/*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching lead data', error);
    throw error; 
  }
};

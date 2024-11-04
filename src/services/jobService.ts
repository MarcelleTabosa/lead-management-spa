import { JobProps } from "../pages/Lead/Props";
import apiClient from "./apiClient";

export const getJobs = async () => {
  try {
    const response = await apiClient.get("/job/relationships");
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching lead data', error);
    throw error; 
  }
};

export const updateJob = async (job: JobProps) => {
  try {
    const response = await apiClient.put(`/job/${job.id}`, job);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching lead data', error);
    throw error; 
  }
};


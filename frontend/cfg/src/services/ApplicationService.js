import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/applications';

export const submitApplication = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/submitApplication`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting the application:', error);
    throw error;
  }
};

export const fetchApplications = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/allapps`);
    return response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }
};

export const fetchRenewalApplications = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/renewal`);
    return response.data;
  } catch (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }
};



export const approveApplication = async (id, remark) => {
  try {
    const response = await axios.post(`${BASE_URL}/approve/${id}`, null, {
      params: { remark },
    });
    return response.data;
  } catch (error) {
    console.error('Error approving application:', error);
    throw error;
  }
};
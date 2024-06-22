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

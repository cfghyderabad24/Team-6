import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/volunteer';

export const fetchVolunteers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/applications/volunteer`);
    return response.data;
  } catch (error) {
    console.error('Error fetching volunteers:', error);
    throw error;
  }
};

export const fetchVolunteerDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching volunteer details:', error);
    throw error;
  }
};

export const scheduleInterview = async (email, interviewDetails) => {
  const params = new URLSearchParams();
  params.append('to', email);
  params.append('subject', 'Interview Schedule');
  params.append('body', `
    Dear Student,
    
    Your interview is scheduled as follows:
    Date: ${interviewDetails.date}
    Time: ${interviewDetails.time}
    Mode: ${interviewDetails.mode}
    ${interviewDetails.mode === 'online' ? `Video Link: ${interviewDetails.videoLink}` : ''}
    
    Thank you.
  `);

  try {
    const response = await axios.post(`http://localhost:8080/api/mailing/send-email/interview`, params);
    console.log('Email sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const updateVolunteerStatus = async (id, remark, status) => {
  try {
    const params = new URLSearchParams();
    params.append('remark', remark);
    params.append('status', status);

    const response = await axios.post(`${BASE_URL}/applications/${id}/verify`, params);
    return response.data;
  } catch (error) {
    console.error('Error updating volunteer status:', error);
    throw error;
  }
};
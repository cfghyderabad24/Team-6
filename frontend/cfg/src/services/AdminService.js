import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/admin';

export const fetchFounders = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching founders:', error);
    throw error;
  }
};

export const fetchFounderDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/getById/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching founder details:', error);
    throw error;
  }
};

export const scheduleFounderInterview = async (email, interviewDetails) => {
  const emailBody = `
    Dear Founder,

    Your interview is scheduled as follows:
    Date: ${interviewDetails.date}
    Time: ${interviewDetails.time}
    Mode: ${interviewDetails.mode}
    ${interviewDetails.mode === 'online' ? `Video Link: ${interviewDetails.videoLink}` : ''}

    Thank you.
  `;

  const emailData = {
    to: email,
    subject: 'Interview Schedule',
    body: emailBody,
  };

  try {
    const response = await axios.post(`http://localhost:8080/api/mailing/send-email/interview`, emailData);
    console.log('Email sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
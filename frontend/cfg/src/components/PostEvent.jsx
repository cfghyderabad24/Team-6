import React, { useState } from 'react';
import './PostEvent.css';

const students = [
  { id: 1, name: 'Student One', email: 'student1@example.com' },
  { id: 2, name: 'Student Two', email: 'student2@example.com' },
  // Add more students as needed
];

const initialRequests = [
  { id: 1, studentName: 'Student One', requestedDate: new Date().toISOString().split('T')[0] },
  { id: 2, studentName: 'Student Two', requestedDate: new Date().toISOString().split('T')[0] },
  // Add more initial requests if needed
];

const PostEvent = ({ events, setEvents }) => {
  const [type, setType] = useState('Event');
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    duration: '',
    image: null,
  });

  const [meetingDetails, setMeetingDetails] = useState({
    studentId: students[0].id,
    date: new Date().toISOString().split('T')[0],
    time: '',
    mode: 'Online',
  });

  const [bookDetails, setBookDetails] = useState({
    bookName: '',
    currentStudent: null,
    requests: initialRequests,
  });

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (type === 'Event') {
      setEventDetails({ ...eventDetails, [name]: value });
    } else if (type === 'Career Guidance') {
      setMeetingDetails({ ...meetingDetails, [name]: value });
    } else if (type === 'Book Availability') {
      setBookDetails({ ...bookDetails, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    setEventDetails({ ...eventDetails, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'Event') {
      const newEvent = { ...eventDetails, id: events.length + 1, type, registeredStudents: [] };
      setEvents([...events, newEvent]);
    } else if (type === 'Career Guidance') {
      const newEvent = { ...meetingDetails, id: events.length + 1, type, registeredStudents: students };
      setEvents([...events, newEvent]);
    } else if (type === 'Book Availability') {
      const newEvent = { ...bookDetails, id: events.length + 1, type, registeredStudents: students, currentStudent: bookDetails.requests[0], requests: bookDetails.requests.slice(1) };
      setEvents([...events, newEvent]);
    }
    console.log({ eventDetails, meetingDetails, bookDetails });
  };

  const handleRequest = () => {
    setBookDetails(prevDetails => ({
      ...prevDetails,
      requests: [...prevDetails.requests, { id: prevDetails.requests.length + 1, studentName: `Student ${prevDetails.requests.length + 1}`, requestedDate: new Date().toISOString().split('T')[0] }]
    }));
  };

  return (
    <div className="post-event">
      <h2>Post New {type}</h2>
      <label>
        Type:
        <select name="type" value={type} onChange={handleTypeChange}>
          <option value="Event">Event</option>
          <option value="Career Guidance">Career Guidance</option>
          <option value="Book Availability">Book Availability</option>
        </select>
      </label>

      <form onSubmit={handleSubmit}>
        {type === 'Event' && (
          <>
            <label>
              Title:
              <input type="text" name="title" value={eventDetails.title} onChange={handleChange} required />
            </label>
            <label>
              Description:
              <textarea name="description" value={eventDetails.description} onChange={handleChange} required></textarea>
            </label>
            <label>
              Date:
              <input type="date" name="date" value={eventDetails.date} onChange={handleChange} required />
            </label>
            <label>
              Duration (days):
              <input type="number" name="duration" value={eventDetails.duration} onChange={handleChange} required />
            </label>
            <label>
              Image:
              <input type="file" onChange={handleImageChange} required />
            </label>
          </>
        )}

        {type === 'Career Guidance' && (
          <>
            <label>
              Student:
              <select name="studentId" value={meetingDetails.studentId} onChange={handleChange}>
                {students.map(student => (
                  <option key={student.id} value={student.id}>{student.name}</option>
                ))}
              </select>
            </label>
            <label>
              Date:
              <input type="date" name="date" value={meetingDetails.date} onChange={handleChange} required />
            </label>
            <label>
              Time:
              <input type="time" name="time" value={meetingDetails.time} onChange={handleChange} required />
            </label>
            <label>
              Mode:
              <select name="mode" value={meetingDetails.mode} onChange={handleChange}>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </label>
          </>
        )}

        {type === 'Book Availability' && (
          <>
            <label>
              Book Name:
              <input type="text" name="bookName" value={bookDetails.bookName} onChange={handleChange} required />
            </label>
            <button type="button" onClick={handleRequest}>Request Book</button>
            {bookDetails.currentStudent && (
              <div>
                <h4>Current Student: {bookDetails.currentStudent.studentName}</h4>
                <p>Request Date: {bookDetails.currentStudent.requestedDate}</p>
              </div>
            )}
            <ul>
              {bookDetails.requests.map(request => (
                <li key={request.id}>{request.studentName} - {request.requestedDate}</li>
              ))}
            </ul>
          </>
        )}

        <button type="submit">Post {type}</button>
      </form>
    </div>
  );
};

export default PostEvent;

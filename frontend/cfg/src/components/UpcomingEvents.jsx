import React, { useState } from 'react';
import './UpcomingEvents.css';

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

const initialEvents = [
  {
    id: 1,
    type: 'Event',
    title: 'Tech Talk',
    description: 'A talk on the latest tech trends.',
    date: '2023-12-25',
    duration: 2,
    registeredStudents: [
      { id: 1, name: 'Student One', present: 0, absent: 0 },
      { id: 2, name: 'Student Two', present: 0, absent: 0 },
    ],
  },
  {
    id: 2,
    type: 'Event',
    title: 'AI Workshop',
    description: 'A workshop on Artificial Intelligence.',
    date: '2024-01-15',
    duration: 3,
    registeredStudents: [
      { id: 1, name: 'Student One', present: 0, absent: 0 },
      { id: 3, name: 'Student Three', present: 0, absent: 0 },
    ],
  },
  {
    id: 3,
    type: 'Career Guidance',
    title: 'Career Guidance Session 1',
    description: 'One-on-one career guidance session.',
    date: '2024-01-20',
    registeredStudents: students.map(student => ({ ...student, meetingDetails: null })),
  },
  {
    id: 4,
    type: 'Career Guidance',
    title: 'Career Guidance Session 2',
    description: 'One-on-one career guidance session.',
    date: '2024-01-22',
    registeredStudents: students.map(student => ({ ...student, meetingDetails: null })),
  },
  {
    id: 5,
    type: 'Book Availability',
    title: 'Data Science Book Availability',
    bookName: 'Introduction to Data Science',
    currentStudent: initialRequests[0],
    requests: initialRequests.slice(1),
  },
  {
    id: 6,
    type: 'Book Availability',
    title: 'Machine Learning Book Availability',
    bookName: 'Machine Learning for Dummies',
    currentStudent: initialRequests[1],
    requests: initialRequests.slice(2),
  },
];

const UpcomingEvents = () => {
  const [events, setEvents] = useState(initialEvents);
  const [activeTab, setActiveTab] = useState('Event');
  const [showScheduleMeeting, setShowScheduleMeeting] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [meetingDetails, setMeetingDetails] = useState({ date: '', time: '', mode: 'Online' });

  const handleAttendance = (eventId, studentId, status) => {
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        const updatedStudents = event.registeredStudents.map(student => {
          let newPresent = student.present || 0;
          let newAbsent = student.absent || 0;

          if (student.id === studentId) {
            if (status === 'present' && (student.present + student.absent) < event.duration) {
              newPresent += 1;
            } else if (status === 'absent' && (student.present + student.absent) < event.duration) {
              newAbsent += 1;
            }
          }
          return { ...student, present: newPresent, absent: newAbsent };
        });

        const allCompleted = updatedStudents.every(student => (student.present + student.absent) >= event.duration);

        return allCompleted ? null : { ...event, registeredStudents: updatedStudents };
      }
      return event;
    }).filter(event => event !== null);

    setEvents(updatedEvents);
  };

  const handleScheduleMeeting = (eventId, studentId) => {
    setSelectedStudent({ eventId, studentId });
    setShowScheduleMeeting(true);
  };

  const handleMeetingDetailsChange = (e) => {
    const { name, value } = e.target;
    setMeetingDetails({ ...meetingDetails, [name]: value });
  };

  const handleScheduleSubmit = () => {
    const { eventId, studentId } = selectedStudent;
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        const updatedStudents = event.registeredStudents.map(student => {
          if (student.id === studentId) {
            return { ...student, meetingDetails };
          }
          return student;
        });
        return { ...event, registeredStudents: updatedStudents };
      }
      return event;
    });

    setEvents(updatedEvents);
    setShowScheduleMeeting(false);
    setMeetingDetails({ date: '', time: '', mode: 'Online' }); // Reset meeting details after scheduling
  };
  const handleBookRequest = (eventId) => {
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        const updatedRequests = event.requests.slice(1);
        const currentStudent = event.requests.length > 0 ? event.requests[0] : null;
        return { ...event, requests: updatedRequests, currentStudent };
      }
      return event;
    });
  
    setEvents(updatedEvents);
  };
  const filteredEvents = events.filter(event => event.type === activeTab);

  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="tabs">
        <button className={activeTab === 'Event' ? 'active' : ''} onClick={() => setActiveTab('Event')}>Event</button>
        <button className={activeTab === 'Career Guidance' ? 'active' : ''} onClick={() => setActiveTab('Career Guidance')}>Career Guidance</button>
        <button className={activeTab === 'Book Availability' ? 'active' : ''} onClick={() => setActiveTab('Book Availability')}>Book Availability</button>
      </div>
      <div className="events-container">
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            {event.date && <p><strong>Date:</strong> {event.date}</p>}
            {event.type === 'Event' && (
              <>
                <p><strong>Duration:</strong> {event.duration} days</p>
                <h4>Registered Students</h4>
                <ul>
                  {event.registeredStudents.map(student => (
                    <li key={student.id}>
                      {student.name}
                      <button 
                        onClick={() => handleAttendance(event.id, student.id, 'present')} 
                        disabled={(student.present + student.absent) >= event.duration}
                      >
                        Present
                      </button>
                      <button 
                        onClick={() => handleAttendance(event.id, student.id, 'absent')} 
                        disabled={(student.present + student.absent) >= event.duration}
                      >
                        Absent
                      </button>
                      <p>Attendance: {student.present || 0} present, {student.absent || 0} absent / {event.duration}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {event.type === 'Career Guidance' && (
              <>
                <h4>Schedule One-on-One Meetings</h4>
                <ul>
                  {event.registeredStudents.map(student => (
                    <li key={student.id}>
                      {student.name}
                      <button onClick={() => handleScheduleMeeting(event.id, student.id)}>
                        Schedule Meeting
                      </button>
                      {student.meetingDetails && (
                        <p>Meeting Scheduled on {student.meetingDetails.date} at {student.meetingDetails.time} ({student.meetingDetails.mode})</p>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          {event.type === 'Book Availability' && (
  <>
    <h4>Book Name: {event.bookName}</h4>
    {event.requests.length >= 1 && (
      <button onClick={() => handleBookRequest(event.id)}>Next Student</button>
    )}
    {event.currentStudent && (
      <div>
        <h4>Current Student: {event.currentStudent.studentName}</h4>
      </div>
    )}
     <h4>Pending Requests</h4>
    <ul>
      {event.requests.map(request => (
        <li key={request.id}>{request.studentName} - {request.requestedDate}</li>
      ))}
    </ul>
  </>
)}
          </div>
        ))}
      </div>
      {showScheduleMeeting && (
  <div className="schedule-meeting-widget">
    <h4>Schedule Meeting</h4>
    <label>
      Date:
      <input type="date" name="date" value={meetingDetails.date} onChange={handleMeetingDetailsChange} />
    </label>
    <label>
      Time:
      <input type="time" name="time" value={meetingDetails.time} onChange={handleMeetingDetailsChange} />
    </label>
    <label>
      Mode:
      <select name="mode" value={meetingDetails.mode} onChange={handleMeetingDetailsChange}>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>
    </label>
    <button onClick={handleScheduleSubmit}>Submit</button>
    <button onClick={() => setShowScheduleMeeting(false)}>Cancel</button>
  </div>
)}
</div>
);
};

export default UpcomingEvents;

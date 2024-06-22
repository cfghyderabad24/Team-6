import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlumniPage.css';
import PostEvent from './PostEvent';
import UpcomingEvents from './UpcomingEvents';

const initialEvents = [
  {
    id: 1,
    title: 'Tech Talk',
    description: 'A talk on the latest tech trends.',
    date: '2023-12-25',
    duration: 2,
    registeredStudents: [
      { id: 1, name: 'Student One', present: 0,absent:0 },
      { id: 2, name: 'Student Two', present: 0,absent:0  },
    ],
  },
  {
    id: 2,
    title: 'AI Workshop',
    description: 'A workshop on Artificial Intelligence.',
    date: '2024-01-15',
    duration: 3,
    registeredStudents: [
      { id: 1, name: 'Student One', present: 0,absent:0 },
      { id: 3, name: 'Student Three', present: 0,absent:0  },
    ],
  },
  {
    id: 3,
    title: 'AI Workshop',
    description: 'A workshop on Artificial Intelligence.',
    date: '2024-01-15',
    duration: 3,
    registeredStudents: [
      { id: 1, name: 'Student One', present: 0,absent:0 },
      { id: 3, name: 'Student Three', present: 0,absent:0  },
    ],
  },
  {
    id: 4,
    title: 'AI Workshop',
    description: 'A workshop on Artificial Intelligence.',
    date: '2024-01-15',
    duration: 3,
    registeredStudents: [
      { id: 1, name: 'Student One', present: 0,absent:0 },
      { id: 3, name: 'Student Three', present: 0,absent:0  },
    ],
  },
];

const AlumniPage = () => {
  const [tab, setTab] = useState('postEvent');
  const [events, setEvents] = useState(initialEvents);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="alumni-page">
      <header className="header">
        <h1>Alumni Dashboard</h1>
        <nav>
          <button onClick={() => setTab('postEvent')}>Post New Event</button>
          <button onClick={() => setTab('upcomingEvents')}>Upcoming Events</button>
          <button className="logout-button" onClick={handleLogout}>Log out</button>
        </nav>
      </header>
      <div className="content">
        {tab === 'postEvent' && <PostEvent events={events} setEvents={setEvents} />}
        {tab === 'upcomingEvents' && <UpcomingEvents events={events} setEvents={setEvents} />}
      </div>
    </div>
  );
};

export default AlumniPage;

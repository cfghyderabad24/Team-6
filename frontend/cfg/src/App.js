// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VolunteerPage from './components/VolunteerPage';
import VolunteerDetails from './components/VolunteerDetails';
import UpdateStatusPage from './components/UpdateStatusPage';
import FoundersPage from './components/FoundersPage';
import FounderDetails from './components/FounderDetails';
import FounderUpdateStatus from './components/FounderUpdateStatus';
import NGOPage from './components/NGOPage';
import NGODetails from './components/NGODetails';
import NGOUpdateStatus from './components/NGOUpdateStatus';
import './App.css';
import StudentForm from './components/StudentForm';
import FounderCard from './components/FounderCard';
import RenewalForm from './components/RenewalForm';
import NgoRenewalUpdate from './components/NgoRenewalUpdate';
import NgoRenewal from './components/NgoRenewal';
import VolunteerRenewal from './components/VolunteerRenewal';
import PartnerLogin from './components/PartnerLogin';
import VolunteerLogin from './components/VolunteerLogin';
import AdminLogin from './components/AdminLogin';
import Navbar from './components/Navbar';

const initialVolunteers = [
  {
    id: '1',
    formNumber: '12345',
    studentName: 'Mr. Hassan Magdy',
    courseName: 'Computer Science',
    courseDuration: '4 years',
    currentYear: '2nd year',
    instituteName: 'Alexandria University',
    affiliatedUniversity: 'Alexandria University',
    currentYearFee: '5000 EGP',
    fatherName: 'John Magdy',
    motherName: 'Sarah Magdy',
    postalAddress: '123 Street Name',
    city: 'Alexandria',
    pin: '12345',
    state: 'Alexandria',
    whatsappNumber: '369 258 147',
    alternateMobile: '369 258 148',
    email: 'h@procrew.pro',
    bankAccountNumber: '123456789',
    status: 'Available',
    documentName: 'Transcript.pdf',
    documentUrl: '/path-to-transcript.pdf' 
  }
 
];

const initialFounders = [
  {
    id: '1',
    name: 'John Doe',
    formNumber: '56789',
    courseName: 'Business Management',
    courseDuration: '3 years',
    currentYear: '1st year',
    instituteName: 'MIT',
    affiliatedUniversity: 'MIT University',
    currentYearFee: '10000 USD',
    fatherName: 'James Doe',
    motherName: 'Jane Doe',
    postalAddress: '456 Another St',
    city: 'Cambridge',
    pin: '02139',
    state: 'Massachusetts',
    whatsappNumber: '123 456 7890',
    alternateMobile: '987 654 3210',
    email: 'john.doe@example.com',
    bankAccountNumber: '987654321',
    status: 'Pending',
    documentName: 'Application.pdf',
    documentUrl: '/path-to-application.pdf', // replace with actual URL
    comments: 'Some comments'
  }
  // Add more founders as needed
];

const initialStudents = [
  {
    id: '1',
    name: 'Jane Smith',
    formNumber: '78901',
    courseName: 'Biology',
    courseDuration: '4 years',
    currentYear: '3rd year',
    instituteName: 'Harvard University',
    affiliatedUniversity: 'Harvard University',
    currentYearFee: '20000 USD',
    fatherName: 'Robert Smith',
    motherName: 'Linda Smith',
    postalAddress: '789 Main St',
    city: 'Boston',
    pin: '02115',
    state: 'Massachusetts',
    whatsappNumber: '321 654 0987',
    alternateMobile: '789 123 4560',
    email: 'jane.smith@example.com',
    bankAccountNumber: '123123123',
    status: 'Pending',
    documentName: 'StudentDocument.pdf',
    documentUrl: '/path-to-student-document.pdf' // replace with actual URL
  }
  // Add more students as needed
];

function App() {
  const [volunteers, setVolunteers] = React.useState(initialVolunteers);
  const [founders, setFounders] = React.useState(initialFounders);
  const [students, setStudents] = React.useState(initialStudents);

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<VolunteerPage/>} />
          <Route path="/details/:id" element={<VolunteerDetails />} />
          <Route path="/update-status/:id" element={<UpdateStatusPage/>} />
          <Route path="/founders" element={<FoundersPage/>} />
          <Route path="/founder-details/:id" element={<FounderDetails/>} />
          <Route path="/founder-update-status/:id" element={<FounderUpdateStatus  />} />
          <Route path="/ngo" element={<NGOPage />} />
          <Route path="/ngo-details/:id" element={<NGODetails students={students} />} />
          <Route path="/ngo-update-status/:id" element={<NGOUpdateStatus students={students} setStudents={setStudents} />} />
          <Route path='/studentForm' element={<StudentForm/>} />
          <Route path='/renewalForm' element={<RenewalForm/>} />

          <Route path='/ngoRenewal' element={<NgoRenewal/>}/>
          <Route path='/volunteerRenewal' element={<VolunteerRenewal/>}/>
          <Route path='/partnerlogin' element={<PartnerLogin/>}/>
          <Route path='/volunteerLogin' element={<VolunteerLogin/>}/> 
          <Route path='/adminLogin' element={<AdminLogin/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

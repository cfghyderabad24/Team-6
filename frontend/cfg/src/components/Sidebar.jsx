import React from 'react';
import './Sidebar.css';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#student-registration">
            <BsGrid1X2Fill className='icon' /> Student Registration
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsFillArchiveFill className='icon' /> Partner NGO
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#volunteer">
            <BsFillGrid3X3GapFill className='icon' /> Volunteer
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="#alumni">
            <BsPeopleFill className='icon' /> Alumni
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

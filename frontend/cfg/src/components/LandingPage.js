import React from 'react';
import './LandingPage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sidebar from './SidebarAdmin';

import aboutUsImage1 from '../assets/image1.jpg';
import aboutUsImage2 from '../assets/image2.jpeg';
import aboutUsImage3 from '../assets/image33.jpg';
import founder1Image from '../assets/Founder1.jpg';
import founder2Image from '../assets/Founder2.jpg';

const LandingPage = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);

  const toggleSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>S.T. Bhatevara Foundation</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#founders">Founders</a></li>
              <li><a href="#partner-ngos">Partner NGOs</a></li>
              <li><a href="#alumni-reviews">Alumni Reviews</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="main-content">
        <Sidebar openSidebarToggle={openSidebarToggle} />
        <main className="main-container">
          <section id="about-us" className="section about-us">
            <div className="content">
              <div className="text">
                <h2>About Us</h2>
                <p>
                  Welcome to our NGO. We are dedicated to making the world a better place through various initiatives and programs aimed at improving the lives of those in need.
                </p>
                <div className="about-us-details">
                  <div className="detail">
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide support and resources to those in need to help them achieve a better quality of life.</p>
                  </div>
                  <div className="detail">
                    <h3>Our Vision</h3>
                    <p>Our vision is a world where everyone has the opportunity to thrive and succeed, regardless of their background or circumstances.</p>
                  </div>
                </div>
              </div>
              <div className="about-us-carousel">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay interval={1500} >
                  <div>
                    <img src={aboutUsImage1} alt="About Us 1" />
                  </div>
                  <div>
                    <img src={aboutUsImage2} alt="About Us 2" />
                  </div>
                  <div>
                    <img src={aboutUsImage3} alt="About Us 3" />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
          <hr/>
          <section id="founders" className="section">
            <h2>Founders</h2>
            <div className="founders-list">
              <div className="founder">
                <img src={founder1Image} alt="Founder 1" />
                <h3>Mr. S. T. Bhatevara</h3>
                <p>Chairman</p>
                <p>BE (Electrical)Founder of Several Manufacturing Companies</p>
                  <p>Paints Industry</p>
                  <p>Heating Elements</p>
                  <p>Engine Division</p>

              </div>
              <div className="founder">
                <img src={founder2Image} alt="Founder 2" />
                <h3>Rosy Bhatevara</h3>
                <p>Managing Trustee</p>
                <p>B.COM (Rank Holder in Pune University)</p>
                <p>Cost Accountant (Inst. of Cost Accountants of India)</p>
                <p>Director- M/s Super Paints Pvt. Ltd.</p>
                <p>ERP Consultant to Several Companies</p>
                <p>Visiting Faculty to Many Management Institutes</p>
              </div>
            </div>
          </section>
          <hr/>
          <section id="partner-ngos" className="section">
            <h2>Partner NGOs</h2>
            <p>
              We collaborate with various other NGOs to expand our reach and impact.
            </p>
            <ul className="partner-ngos-list">
              <li>VSS</li>
              <li>HMF</li>
              <li>Shahshwat</li>
              <li>Gram Urja</li>
              <li>Direct</li>
              <li>Snehalaya, Ankur, MKSS (PUNE)</li>
              <li>COE Phaltan, MKSS (WAI)</li>
              <li>Super Paint (4)</li>
              <li>High Power (7), Rashmi Heaters (3)</li>
              <li>Bhatevara Office (2)</li>
              <li>CASP</li>
              <li>JAGRUTI, SSM, MKSS (NAGPUR)</li>
            </ul>
          </section>
          <hr/>
          <section id="alumni-reviews" className="section">
            <h2>Alumni Reviews</h2>
            <div className="alumni-reviews">
              <div className="review-card">
                <p>"This NGO has changed my life in ways I never imagined. The support and resources provided helped me achieve my dreams."</p>
                <p>- Pratham</p>
              </div>
              <div className="review-card">
                <p>"Being a part of this NGO has been an incredible experience. The initiatives they run are truly impactful."</p>
                <p>- Manoj</p>
              </div>
              <div className="review-card">
                <p>"I am grateful for the opportunities this NGO has given me. Their work in the community is unparalleled."</p>
                <p>- Gayathri</p>
              </div>
              <div className="review-card">
                <p>"The dedication and passion of the people behind this NGO are truly inspiring. They make a real difference."</p>
                <p>- Shivam Dubey</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>S.T. BHATEVARA FOUNDATION</p>
          <p>102, Kumar Vastu Soc. Opp. Ashok Nagar Pune-411007.</p>
          <p>Office Mobile No. <a href="tel:+919822910123">9822910123</a></p>
          <p>Email: <a href="mailto:bhatevarafoundation@gmail.com">bhatevarafoundation@gmail.com</a></p>
        </div>
      </footer>
      <footer className='class-footer'>
        <p>&copy; 2024 St. BHATEVARA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
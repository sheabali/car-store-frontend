import React from 'react';
import './Footer.css'; // Import the plain CSS file
import Container from '@/components/Container/Container';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-bottom">
      <Container>
        <div className="footer-container  ">
          {/* Section 1: Company Info */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="link-list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </Container>

      <div className="">
        <p>© 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

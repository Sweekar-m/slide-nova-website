import React from 'react';
import './Footer.css';

function Footer({ brandName = "Slide Nova" }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

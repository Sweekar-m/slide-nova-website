import React from 'react';
import './Header.css';


function Header({ brandName = "Slide Nova" }) {
  return (
    <header className="header">
      <div className="header-logo-area">
    
        <span className="header-logo gradient-text">{brandName}</span>
      </div>
      <nav className="header-nav">
        <a href="#features">Features</a>
        <a href="# ">Download</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;

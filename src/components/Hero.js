import React from 'react';
import './Hero.css';
import logo from './logo.svg';

function Hero({ brandName = "Slide Nova" }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title gradient-text"> {brandName}</h1>
        <p className="hero-desc">Slide Nova is an easy-to-use software designed to help users create professional and visually appealing presentations in just a few clicks. Whether you're a student, teacher, or professional, Slide Nova makes it simple to generate high-quality slides based on your topic and preferences.

With Slide Nova, users can choose from a variety of pre-designed templates and simply enter the content they want to present. The software then automatically organizes and formats the information into well-structured slides. This saves time, reduces effort, and ensures that every presentation looks polished and consistent.

Slide Nova is perfect for anyone who wants to create impressive presentations quickly without needing any design skills.</p>
      </div>
      <div className="hero-image-area">
        <img src={logo} alt="Slide Nova Logo" className="hero-logo-img" />
        <a className="hero-image-btn" href="/Slide%20Nova.zip"   download>Get {brandName} Free</a>
      </div>
    </section>
  );
}

export default Hero;

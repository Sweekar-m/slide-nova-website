import React from 'react';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header brandName="Slide Nova" />
      <main>
        <Hero brandName="Slide Nova" />
        <section id="features" className="features-section">
          <h2 className="features-title gradient-text">Why Choose Slide Nova?</h2>
          <div className="features-cards">
            <FeatureCard
  icon={<span role="img" aria-label="lightning">⚡</span>}
  title="Quick Presentation Builder"
  description="Create ready-to-use slide decks instantly by just entering a topic and slide count."
/>
<FeatureCard
  icon={<span role="img" aria-label="template">📑</span>}
  title="Pre-Designed Templates"
  description="Choose from a range of elegant slide designs to give your presentation a polished look."
/>
<FeatureCard
  icon={<span role="img" aria-label="ease">🖱️</span>}
  title="User-Friendly Interface"
  description="An intuitive and clean layout ensures that anyone can build presentations with ease."
/>
<FeatureCard
  icon={<span role="img" aria-label="conclusion">✅</span>}
  title="Automatic Summary Slide"
  description="Automatically generates a clear and concise conclusion at the end of your presentation."
/>

          </div>
        </section>
        <section className="testimonial-section">
          <div className="testimonial-card">
            <p className="testimonial-quote">“Slide Nova is a smart presentation generator that instantly creates professional slides from your input with minimal effort.”</p>
            <div className="testimonial-user">
              <span className="testimonial-name">devloped by <a href='https://sweekar-m-portfolio.vercel.app/' style={{ color: '#fff' }}> Sweekar M </a></span>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <h2 className="cta-title">Ready to Elevate Your Presentations?</h2>
          <p className="cta-desc">Create beautiful slides quickly and easily with SlideNova.</p>
          <a className="cta-download-btn" href="/Slide%20Nova.zip" download>Download Slide Nova</a>
        </section>
        <Contact />
      </main>
      <Footer brandName="Slide Nova" />
    </div>
  );
}

export default App;

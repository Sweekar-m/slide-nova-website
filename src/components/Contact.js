import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    emailjs.send(
      'service_wc45au9', // Replace with your EmailJS service ID
      'template_83vp1pf', // Replace with your EmailJS template ID
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'Czp_k7PiHtfJi5gSp' // Replace with your EmailJS public key (user ID)
    )
    .then(() => {
      setSubmitted(true);
    })
    .catch(() => {
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title gradient-text">Contact Us</h2>
      {submitted ? (
        <div className="contact-success">Thank you for reaching out! We'll get back to you soon.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          {error && <div className="contact-error">{error}</div>}
        </form>
      )}
    </section>
  );
}

export default Contact;

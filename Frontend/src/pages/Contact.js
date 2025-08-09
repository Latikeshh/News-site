import React from 'react';
import './Contact.css'


const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <p>Insights from Experts</p>

        <div className="contact-info">
          <h3>📞 Call Us</h3>
          <p>1 (234) 567 8901, 1 (234) 567 8944</p>

          <h3>📍 Location</h3>
          <p>123 Rock Street, 21 Avenue, New York, NY 92103-9000</p>

          <h3>🕒 Business Hours</h3>
          <p>Mon — Fri: 10 am — 8 pm<br />Sat, Sun: Closed</p>
        </div>
      </div>

      <div className="contact-right">
        <form>
          <div className="input-group">
            <input type="email" placeholder="Enter your email address" required />
            <input type="text" placeholder="Enter your name" required />
          </div>
          <input type="text" placeholder="Enter your address" required />
          <textarea placeholder="Enter your message" rows="4" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
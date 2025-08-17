import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });
  const [responseMsg, setResponseMsg] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/storecontact', formData);
      setResponseMsg(res.data.message);
      setFormData({ name: '', email: '', address: '', message: '' }); // reset form
    } catch (err) {
      setResponseMsg(err.response?.data?.message || 'Error submitting form');
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Enter your short address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
        {responseMsg && <p className="response-msg">{responseMsg}</p>}
      </div>
    </div>
  );
};

export default ContactPage;

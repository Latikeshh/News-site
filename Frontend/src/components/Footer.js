import React from 'react';
import { Link } from 'react-router-dom'; // Add this
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h4>Featured</h4>
        <p>Senate Approves $9 Billion In Cuts</p>
        <p>Trump Diagnosed With Chronic Venous Insufficiency</p>
        <p>2025 NBA Free Agency</p>
      </div>

      <div className="footer-col">
        <h4>Follow Us On</h4>
        <p><a href="https://www.youtube.com/@newshubnz" target="_blank" rel="noopener noreferrer">YouTube</a></p>
        <p><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p><a href="https://www.instagram.com/talk._.bharat" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">X</a></p>
      </div>

       <div className="footer-col">
        <h4>Company</h4>
         <p><Link to="/about">About Us</Link></p>
        <p>Advertise</p>
        <p>Join Team</p>
        <p>Help</p>
      </div>

      <div className="footer-col center-logo">
        <h1>📰</h1>
        <h2>TALK BHARAT</h2>
      </div>
    </footer>
  );
};

export default Footer;

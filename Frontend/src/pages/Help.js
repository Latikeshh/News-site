import React, { useEffect } from "react";
import "./Help.css";

const Help = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Page load zalyavar top la neil
  }, []);

  return (
    <div className="help-container">
      <h1 className="help-title">Help & Support</h1>
      <p className="help-intro">
        Welcome to the Help Center! Here you’ll find answers to common questions, 
        tips for using our website, and ways to contact our team.
      </p>

      <div className="help-section">
        <h2>📌 Getting Started</h2>
        <ul>
          <li>How to navigate the website</li>
          <li>How to search for news articles</li>
          <li>How to read full news content</li>
        </ul>
      </div>

      <div className="help-section">
        <h2>⚙️ Account & Settings</h2>
        <ul>
          <li>Creating and managing your account</li>
          <li>Changing your preferences</li>
          <li>Enabling dark/light mode</li>
        </ul>
      </div>

      <div className="help-section">
        <h2>📩 Contact Us</h2>
        <p>
          If you can’t find what you’re looking for, feel free to reach out to our support team.
        </p>
        <p>Email: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a></p>
      </div>
    </div>
  );
};

export default Help;

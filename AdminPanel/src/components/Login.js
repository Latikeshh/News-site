// src/components/Login.js
import React, { useState } from 'react';
import './AdminLogin.css'; // Reuse your existing CSS

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Set valid credentials
  const validEmail = 'admin@example.com';
  const validPassword = 'admin123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === validEmail && password === validPassword) {
      localStorage.setItem('loggedIn', 'true'); // Store login state
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="admin-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-input"
          required
        />
        <button type="submit" className="admin-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;

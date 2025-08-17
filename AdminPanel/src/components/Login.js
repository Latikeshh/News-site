// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css"; // ✅ your CSS

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/registeration/login", {
        email,
        password,
      });
      const { user } = response.data;

      // ✅ Store user data in localStorage
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("role", user.role);

      if (onLoginSuccess) onLoginSuccess(user);

      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign In</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Login;

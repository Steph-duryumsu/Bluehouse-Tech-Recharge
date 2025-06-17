import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../Styles/SignInPage.css"; // Correct path to CSS file
import shieldIcon from "../Images/shield-icon.png"; // Ensure this path matches the actual location of the image

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation logic
    if (email === "" || password === "") {
      setError("Please fill in all fields.");
      return;
    }

    // Simulate successful login
    setError(""); // Clear any previous errors
    navigate("/welcome"); // Navigate to the Welcome page
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <div className="signin-logo-container">
          <img
            src={shieldIcon}
            alt="Blue House Tech Recharge"
            className="signin-logo"
          />
          <h2 className="signin-title">
            <span className="signin-title-line">Blue House Tech</span>
            <span className="signin-title-line">Recharge</span>
          </h2>
        </div>
        <p className="signin-subtitle">
          <b>Welcome Back</b>
        </p>
        <h1 className="signin-heading">SIGN IN</h1> {/* Add the heading */}
        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="signin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="signin-error">{error}</p>}
          <label className="signin-remember">
            <input type="checkbox" className="signin-checkbox" /> Remember Me
          </label>
          <button type="submit" className="signin-button">
            Sign In
          </button>
          <p className="signin-footer">
            Don't have an account?{" "}
            <Link to="/signup" className="signin-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignInPage;

import React, { useState } from "react";
import "./LoginPopup.css";
import { FaTimes } from "react-icons/fa";

export default function LoginPopup({
  setShowLogin,
  setShowSignup,
  setIsAuthenticated, // ✅ added
}) {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend-only validation
    if (formData.emailOrPhone.trim() && formData.password.trim()) {
      // 🔥 Save login state (no backend needed)
      localStorage.setItem("isAuthenticated", "true");

      // 🔥 Update App.js state
      setIsAuthenticated(true);

      // Close popup
      setShowLogin(false);

      alert("Login successful (demo)");
    }
  };

  return (
    <div
      className="login-popup-overlay"
      onClick={() => setShowLogin(false)}
    >
      <div className="login-popup-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={() => setShowLogin(false)}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <h2 className="login-title">Login</h2>
        <p className="login-subtitle">
          Get access to your Orders, Wishlist & Recommendations
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Mobile Number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="login-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            required
          />

          <div className="login-options">
            <a href="#" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-terms">
          By continuing, you agree to our <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </p>

        <p className="login-switch">
          New to FoodWay?{" "}
          <span
            className="switch-link"
            onClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}

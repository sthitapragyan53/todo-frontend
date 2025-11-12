import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  // Load name from localStorage
  const [username, setUsername] = useState(localStorage.getItem("username") || "Guest User");

  const handleSave = () => {
    localStorage.setItem("username", username);
    alert("Name updated!");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="settings-container">
      <div className="settings-card">

        {/* Profile Section */}
        <div className="settings-header">
          <div className="settings-avatar">
            {username.charAt(0).toUpperCase()}
          </div>
          <h1>Hello, {username}</h1>
        </div>

        {/* Edit Name */}
        <div className="settings-input-box">
          <label>Name</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="save-btn" onClick={handleSave}>Save</button>
        </div>

        {/* Buttons */}
        <div className="settings-buttons">
          <Link to="/home" className="home-btn">Home</Link>
          <Link to="/about" className="about-btn">About Us</Link>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>

      </div>
    </div>
  );
};

export default Settings;

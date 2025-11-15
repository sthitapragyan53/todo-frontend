import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { API_BASE_URL } from "../../config";

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 👁️ Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const showForm = (form) => {
    setActiveForm(form);
    setName("");
    setEmail("");
    setPassword("");
  };

  // LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.name);
      alert("Login Successful ✅");
      navigate("/home");
    } else {
      alert(data.message);
    }
  };

  // REGISTER FUNCTION
  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account Created ✅ Please Login");
      showForm("login");
      setName(""); setEmail(""); setPassword("");
    } else {
      alert(data.message || "Registration failed");
    }
  };

  return (
    <div className="login-page">
      <div className="container">

        {/* Login Form */}
        <div className={`form-box ${activeForm === "login" ? "active" : ""}`}>
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD FIELD WITH TOGGLE */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            <button type="submit">Login</button>
            <p>
              Don't have an account?{" "}
              <span className="link" onClick={() => showForm("register")}>
                Register
              </span>
            </p>
          </form>
        </div>

        {/* Register Form */}
        <div className={`form-box ${activeForm === "register" ? "active" : ""}`}>
          <form onSubmit={handleRegister}>
            <h2>Register</h2>

            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD FIELD WITH TOGGLE */}
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "👁️" : "🙈"}
              </span>
            </div>

            <button type="submit">Register</button>
            <p>
              Already have an account?{" "}
              <span className="link" onClick={() => showForm("login")}>
                Login
              </span>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

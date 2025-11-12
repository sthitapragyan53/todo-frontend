import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
import FlipClock from "../FlipClock/FlipClock";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Date
  const options = { month: "short", weekday: "short", year: "numeric", day: "numeric" };
  const dateString = time.toLocaleDateString("en-US", options);

 const handleLogin = () => {
  navigate("/login");
};

  return (
    <div className="welcome-container">
      <h1 className="title">
        Let’s Work<span>Together</span>
      </h1>

      <p className="date">{dateString}</p>

      {/* Flip Clock Here */}
      <div className="clock">
        <FlipClock />
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default WelcomePage;

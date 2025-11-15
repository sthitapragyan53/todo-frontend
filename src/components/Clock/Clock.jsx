import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


import "./Clock.css";


import FlipClock from "../FlipClock/FlipClock";

const Clock = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Date
const day = time.getDate();  
const month = time.toLocaleString("en-US", { month: "short" });  
const weekday = time.toLocaleString("en-US", { weekday: "short" });  
const year = time.getFullYear();

const dateString = `${day},${month},${weekday},${year}`;


 const handleHome = () => {
  navigate("/home");
};

  return (
    <div className="welcome-container">
      <h1 className="title">
        Let’s Work <span> 
          Together!</span>
      </h1>

      <p className="date">{dateString}</p>

      {/* Flip Clock Here */}
      <div className="clock">
        <FlipClock />
      </div>

      <button className="Home-btn" onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default Clock;

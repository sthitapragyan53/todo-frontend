import React, { useEffect, useState } from "react";
import FlipDigit from "./FlipDigit";
import "./FlipClock.css";

const FlipClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let hours = time.getHours();
  const minutes = time.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return (
    <div className="flip-clock-container">
      <FlipDigit value={String(hours).padStart(2, "0")[0]} />
      <FlipDigit value={String(hours).padStart(2, "0")[1]} />

      <span className="flip-colon">:</span>

      <FlipDigit value={String(minutes).padStart(2, "0")[0]} />
      <FlipDigit value={String(minutes).padStart(2, "0")[1]} />

      <span className="flip-ampm">{ampm}</span>
    </div>
  );
};

export default FlipClock;

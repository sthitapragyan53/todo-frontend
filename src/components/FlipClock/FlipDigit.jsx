import React, { useEffect, useState } from "react";
import "./FlipClock.css";

const FlipDigit = ({ value }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);
      }, 650);
      return () => clearTimeout(timeout);
    }
  }, [value, prevValue]);

  return (
    <div className="flip-digit">
      {/* Static centered number */}
      <div className="digit-static">{prevValue}</div>

      {/* Flip Animation */}
      {isFlipping && (
        <div className="flip-animation flip">
          <div className="flip-upper">{prevValue}</div>
          <div className="flip-lower">{value}</div>
        </div>
      )}
    </div>
  );
};

export default FlipDigit;

import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const team = [
  { name: "Barsha", img: "/avatar.png", linkedin: "#" },
  { name: "Sthita", img: "/avatar.png", linkedin: "#" },
  { name: "Mitangi", img: "/avatar.png", linkedin: "#" },
  { name: "Anshuman", img: "/avatar.png", linkedin: "#" },
];

const About = () => {
  return (
    <div className="about-container">

      {/* Title */}
      <h1 className="about-title">
        About <span>Us</span> <span className="star">*</span>
      </h1>

      {/* Description */}
      <p className="about-text">
        Our mission is to make productivity simple, enjoyable, and personal.
        We believe that staying organized should feel natural — not stressful.
        This tool was created to help you stay consistent, motivated, and
        proud of your progress every day.
      </p>

      {/* Team Section */}
      <div className="about-team-box">
        <h3>Our Team</h3>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.name}>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Home Button */}
      <Link to="/home" className="about-home-btn">Home</Link>

      {/* Footer */}
      <footer className="about-footer">
        © 2025 All Rights Reserved — Team member - • Barsha • Sthita • Namita • Anshuman
      </footer>

    </div>
  );
};

export default About;

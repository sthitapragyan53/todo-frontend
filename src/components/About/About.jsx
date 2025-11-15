import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

// ⭐ Add your team's real LinkedIn profile links here
const team = [
  { name: "Barsa", linkedin: "https://www.linkedin.com/in/barsa-priyadarshini-27ab41351" },
  { name: "Sthita", linkedin: "https://www.linkedin.com/in/sthita-p-194643276" },
  { name: "Mitangi", linkedin: "https://www.linkedin.com/in/mitangi-gamit-92651a350" },
  { name: "Anshuman", linkedin: "https://www.linkedin.com/in/anshuman-dash-461932285" },
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

              {/* LinkedIn Icon */}
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <p>{member.name}</p>

            </div>
          ))}
        </div>
      </div>

      {/* Home Button */}
      <Link to="/home" className="about-home-btn">Home</Link>

      {/* Footer */}
      <footer className="about-footer">
        © 2025 All Rights Reserved — Team members: • Barsha • Sthita • Mitangi • Anshuman
      </footer>

    </div>
  );
};

export default About;

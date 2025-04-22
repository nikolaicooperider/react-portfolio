import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="about-card bio">
          <h3>Hi, I'm Nikolai </h3>
          <p>
          I am a Digital Media Major here at UCF and I love coding! When I'm not SWAMPED with school work, you can catch me at the beach surfing, or on the water fishing. I love spending time with my family!
          </p>
        </div>

        <div className="about-card skills">
          <h3>Digital Media Skills</h3>
          <ul>
            <li>React.js, JavaScript, HTML, CSS</li>
            <li>PHP, Node.js, MySQL</li>
            <li>Figma, Adobe XD, GitHub</li>
            <li>Responsive Design, Accessibility</li>
          </ul>
        </div>

        <div className="about-card interests">
          <h3>Interests</h3>
          <p>
            I’m all about livin' life! I love hitting the beach to surf or fish. Family means everything to me.

          </p>
        </div>
      </div>
      <img src={require('../assets/200w.gif')} alt="fun gif" className="about-gif" />

    </div>
  );
}

export default About;

import React from 'react';
import './Home.css';
import profilePic from '../assets/IMG_2733.JPG';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={profilePic} alt="Nikolai Cooperider" className="home-image" />
        <div className="home-text">
          <h1>NIKOLAI COOPERIDER</h1>
          <p>
            Hi I am Nikolai Cooperider. I am a doer of things, adventurer of adventures, and a life enjoyer. Please feel free to explore my Personal Portfolio of this semesters work.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

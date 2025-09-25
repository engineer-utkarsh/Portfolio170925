import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Utkarsh Shukla</h1>
        <p>A passionate Full Stack Developer</p>
        {/* <button className="cta-button">View My Work</button> */}
      </div>
      <div className="hero-image">
        <img
          src="/UtkarshProfileimage.jpg"
          alt="ushukla"
          className="profile-photo"
        />      </div>
    </section>
  );
};

export default Hero;
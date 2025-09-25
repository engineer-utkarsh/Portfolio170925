import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Hyperspeed from '../HyperSpeed/HyperSpeed';

const Hero = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    createParticles();
  }, []);

  const createParticles = () => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    // Clear existing particles
    particlesContainer.innerHTML = '';

    // Create particles
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 6 + 4;
      const animationDelay = Math.random() * 5;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${animationDuration}s`;
      particle.style.animationDelay = `${animationDelay}s`;
      
      particlesContainer.appendChild(particle);
    }
  };

  return (
    <div className="hero-container">
      <div className="hyperspeed-wrapper">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 600, // Increased length for better depth
            roadWidth: 12,
            islandWidth: 3,
            lanesPerRoad: 4,
            fov: 100,
            fovSpeedUp: 180,
            speedUp: 2.5, // Slightly increased speed
            carLightsFade: 0.5,
            totalSideLightSticks: 25, // More lights for better effect
            lightPairsPerRoadWay: 50,
            shoulderLinesWidthPercentage: 0.06,
            brokenLinesWidthPercentage: 0.12,
            brokenLinesLengthPercentage: 0.6,
            lightStickWidth: [0.15, 0.6],
            lightStickHeight: [1.4, 2.0],
            movingAwaySpeed: [70, 100],
            movingCloserSpeed: [-140, -180],
            carLightsLength: [600 * 0.04, 600 * 0.25],
            carLightsRadius: [0.08, 0.18],
            carWidthPercentage: [0.35, 0.6],
            carShiftX: [-1.0, 1.0],
            carFloorSeparation: [0, 8],
            colors: {
              roadColor: 0x060606, // Darker road for better contrast
              islandColor: 0x080808,
              background: 0x000000,
              shoulderLines: 0x03B3C3, // Matching theme color
              brokenLines: 0x03B3C3,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC, 0x03B3C3], // Added theme color
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555, 0xD856BF], // Added accent color
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>
      
      {/* Particle Background */}
      <div ref={particlesRef} className="particles"></div>
      
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Utkarsh Shukla</h1>
          <p>A passionate Full Stack Developer</p>
        </div>
        <div className="hero-image">
          <img
            src="/UtkarshProfileimage.jpg"
            alt="Utkarsh Shukla - Full Stack Developer"
            className="profile-photo"

          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
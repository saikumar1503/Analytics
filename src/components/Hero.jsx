// src/components/Hero.js
import React from 'react';


const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero__title">Welcome to My Stylish Webpage</h2>
        <p className="hero__subtitle">Your journey to amazing web experiences starts here.</p>
        <a href="#learn-more" className="hero__cta">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;

// src/components/Header.js
import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">My Stylish Webpage</h1>
        <nav className="header__nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

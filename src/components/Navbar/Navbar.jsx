import React from 'react';
import { Logo } from '../Logo/Logo';
import './Navbar.css';
import arrow from '../../assets/RightArrow.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Logo />
      </div>
      
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Services</a></li>
      </ul>

      {/* Get in Touch Button */}
      <button className="get-in-touch">
        Get In Touch <img src={arrow} alt="Company Logo" className="arrow-image" />
      </button>
    </nav>
  );
};

export default Navbar;

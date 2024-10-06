import React from 'react';
import logo from '../../assets/Logo.svg'; // Adjust the path based on your file structure

export const Logo = () => (
  <div className="logo">
    <img src={logo} alt="Company Logo" className="logo-image" />
    <span className="logo-text">Reliance Asian</span>
  </div>
);

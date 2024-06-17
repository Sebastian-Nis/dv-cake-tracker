// src/components/header/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { ReactComponent as Logo } from './logo.svg'; // Ensure the path is correct
import { ReactComponent as HomeIcon } from './home-icon.svg'; // Ensure the path is correct

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  console.log("Rendering Header component");

  return (
    <header className="header">
      <div className="header-left">
        <Logo className="logo" />
      </div>
      <div className="header-center">
        <h1>{title}</h1>
      </div>
      <div className="header-right">
        <HomeIcon className="home-icon" onClick={handleHomeClick} />
      </div>
    </header>
  );
};

export default Header;

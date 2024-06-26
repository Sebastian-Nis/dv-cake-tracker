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

  return (
    <header className="header">
      <div className="header-left">
        <Logo className="logo" />
        <h1>{title}</h1> {/* Title next to the logo */}
      </div>
      <div className="header-right">
        <div className="home-icon-container" onClick={handleHomeClick}>
          <div className="home-content">
            <h2 id="homeh2">Home</h2> {/* Home text next to the icon */}
            <HomeIcon id="home-icon" /> {/* Use ID here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

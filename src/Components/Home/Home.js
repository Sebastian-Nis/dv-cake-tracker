// src/components/Home/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome, what would you like to do?</h1>
      <div className="button-container">
        <Link to="/new-member">
          <button>Add New Member</button>
        </Link>
        <Link to="/member-list">
          <button>View Member List</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

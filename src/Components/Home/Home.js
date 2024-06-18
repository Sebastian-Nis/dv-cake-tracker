import React from 'react';
import { Link } from 'react-router-dom';
import UpcomingBD from './UpcomingBD'; 
import './Home.css';

const Home = ({ members }) => {
  return (
    <div className="home-container">
      <h1>Welcome, what would you like to do?</h1>
      <div className="button-container">
        <Link to="/new-member">
          <button className='herobtn'>Add New Member</button>
        </Link>
        <Link to="/member-list">
          <button className='herobtn'>Members List</button>
        </Link>
      </div>
      <UpcomingBD members={members} />
    </div>
  );
};

export default Home;

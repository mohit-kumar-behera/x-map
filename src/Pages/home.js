import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function home() {
  return (
    <div className="home">
      <h2>X-Map</h2>
      <button className="login">
        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>
          Login
        </Link>
      </button>
      <button className="register">
        <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>
          Register
        </Link>
      </button>
      <button className="register">
        <Link to="/explore" style={{ color: '#fff', textDecoration: 'none' }}>
          Explore
        </Link>
      </button>
    </div>
  );
}

export default home;

import React from 'react';
import Post from '../components/post/post';
import { Link } from 'react-router-dom';
import './profile.css';

function Profile() {
  const handleLogout = () => {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    /*
        ======================
        REDIRECT TO LOGIN PAGE
        ======================
    */
  };
  return (
    <div className="profile-page">
      <div className="header">
        <h3>Shahrukh Khan</h3>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="nav">
        <button className="active">
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <h2 style={{ color: '#fff' }}>Profile</h2>
          </Link>
        </button>
        <button>
          <Link to="/explore" style={{ textDecoration: 'none' }}>
            <h2 style={{ color: '#000' }}>Explore</h2>
          </Link>
        </button>
      </div>

      <Post />
    </div>
  );
}

export default Profile;

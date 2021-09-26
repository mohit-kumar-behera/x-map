import React, { useState, useEffect } from 'react';
import TimelineCard from '../components/post/timelineCard';
import { Link } from 'react-router-dom';
import './profile.css';

function Explore() {
  const [timelines, setTimelines] = useState('');
  const [stopLoad, setStopLoad] = useState(false);
  function fetchData() {
    fetch('http://127.0.0.1:8000/api/timelines')
      .then(res => res.json())
      .then(resData => {
        const data = resData.data;
        setTimelines(data);
      })
      .catch(err => alert(err))
      .finally(() => setStopLoad(true));
  }

  useEffect(() => {
    if (!stopLoad) fetchData();
  });

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

      {
        <ul className="cards">
          {timelines &&
            timelines.map(timeline => {
              return <TimelineCard key={timeline.id} timeline={timeline} />;
            })}
        </ul>
      }
    </div>
  );
}

export default Explore;

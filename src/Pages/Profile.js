import React from 'react'
import Post from '../components/post/post'
import { Link } from 'react-router-dom';
import './profile.css'

function Profile() {
  return (
    <div className="profile-page">
      <div className="header">
        <h3>Shahrukh Khan</h3>
        <button className="logout">Logout</button>
      </div>

      <div className="nav">
        <Link to="/profile" style={{ textDecoration: 'none' }}><h2>Profile</h2></Link>
        <Link to="/explore" style={{ textDecoration: 'none' }}><h2 className="explore">Explore</h2></Link>
      </div>

      <Post />


    </div>
  )
}

export default Profile

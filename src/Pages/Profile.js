import React from 'react'
import Post from '../components/post'
import './profile.css'

function Profile() {
  return (
    <>
      <div className="header">
        <h3>Shahrukh Khan</h3>
        <button className="logout">Logout</button>
      </div>

      <Post />
    </>
  )
}

export default Profile

import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';

function home() {
  return (
    <div className="home">
      <button className="login">
        <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link>
      </button>
      <button className="register">
        <Link to='/register' style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
      </button>

    </div>
  )
}

export default home

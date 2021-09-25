import React from 'react';
import './auth.css';

function Login() {
  const loginUser = async ev => {
    try {
      ev.preventDefault();
      const formDataArr = [...new FormData(ev.target)];
      const formData = Object.fromEntries(formDataArr);
      const raw = JSON.stringify(formData);

      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: raw,
        redirect: 'follow',
      };

      const responseData = await fetch(
        'http://127.0.0.1:8000/api/auth/token/',
        options
      );
      const response = await responseData.json();
      if (!responseData.ok) throw Error('Email or Password Incorrect');

      localStorage.setItem('token', response.access);

      /*
        ======================
        REDIRECT TO PROFILE PAGE
        ======================
      */
    } catch (err) {
      alert(err);
    }
  };

  return (
    <form className="login form" onSubmit={loginUser}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email address"
        name="email"
        className="descrip"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="descrip"
      />

      <button className="submit-button">SUBMIT</button>
      <div className="icons"></div>
    </form>
  );
}

export default Login;

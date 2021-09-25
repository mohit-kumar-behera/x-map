import React from 'react';

function Register() {
  const registerUser = async ev => {
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
        'http://127.0.0.1:8000/api/auth/register/',
        options
      );
      const response = await responseData.json();
      if (!responseData.ok) throw Error('user with this mail already exists');
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="register" onSubmit={registerUser}>
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

export default Register;

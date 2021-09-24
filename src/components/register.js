import React from 'react'




function Register() {
  return (
    <form className="register">

      <input
        type='text'
        placeholder='Email address'
        name='text'
        className='descrip'

      />
      <input
        type='text'
        placeholder='Password'
        name='text'
        className='descrip'

      />

      <button className="submit-button">SUBMIT</button>
      <div className="icons">
        

      </div>
    </form>
  )
}

export default Register
import React from 'react'
import './post.css'
import { GrMapLocation } from 'react-icons/gr'
import { BsUpload } from 'react-icons/bs'


function post() {
  return (
    <form className="post">
      <input
        type='text'
        placeholder='Your Experiences'
        name='text'
        className='descrip'

      />
      <button className="post-button">Post</button>
      <div className="icons">
        <GrMapLocation size="30" />
        <BsUpload size="30" />

      </div>
    </form>
  )
}

export default post

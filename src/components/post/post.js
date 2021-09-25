import React from 'react'
import './post.css'
import Location from './location'
import Upload from './upload'

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
        <Location />
        <Upload />

      </div>
    </form>
  )
}

export default post

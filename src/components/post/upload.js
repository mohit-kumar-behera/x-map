import React, { useState, UseEffect } from 'react'
import { IoMdImages } from 'react-icons/io'

function Upload() {

  const [imageSelect, setImageSelect] = useState('');

  const ImageSelectChange = (e) => {
    setImageSelect(e.target.files[0]);
  }

  const uploadImage = async () => {
    console.log(imageSelect);
  }

  return (

    <div>
      <input type="file" onChange={(e) => ImageSelectChange(e)} />
      <button className="upload" onClick={() => uploadImage()}><IoMdImages size="30" /></button>
    </div>
  )
}

export default Upload

import React, { useState } from 'react'
import LocationPopup from './locationPopup'
import { GrMapLocation } from 'react-icons/gr'

function Location() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handleClick = e => {
    e.preventDefault();
  }
  return (
    <div className="location">

      <main>
        <button onClick={(e) => { setButtonPopup(true); handleClick(e) }}><GrMapLocation size="30" /></button>
      </main>

      <LocationPopup trigger={buttonPopup} setTrigger={setButtonPopup}>

        <input type="text" />
        <button>Search</button>
      </LocationPopup>
    </div>
  )
}

export default Location

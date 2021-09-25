import React from 'react';
import './locationPopup.css';

function LocationPopup(props) {
  const { trigger, setTrigger, children } = props;
  return trigger ? (
    <div className="location-popup">
      <div className="inner-popup">
        <button className="close-btn" onClick={() => setTrigger(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default LocationPopup
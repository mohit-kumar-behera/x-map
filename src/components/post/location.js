// import React, { useState } from 'react';
// import LocationPopup from './locationPopup';
// import { GrMapLocation } from 'react-icons/gr';

// function Location() {
//   const [buttonPopup, setButtonPopup] = useState(false);
//   const handleClick = e => {
//     e.preventDefault();
//   };
//   return (
//     <div className="location">
//       <main>
//         <button
//           onClick={e => {
//             setButtonPopup(true);
//             handleClick(e);
//           }}
//           style={{ padding: '0.7rem 1.2rem' }}
//         >
//           <GrMapLocation size="30" style={{ marginRight: '2rem' }} />
//           Location
//         </button>
//       </main>

//       <LocationPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
//         <input type="text" />
//         <button>Search</button>
//       </LocationPopup>
//     </div>
//   );
// }

// export default Location;

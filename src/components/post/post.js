import React, { useState } from 'react';
import LocationPopup from './locationPopup';
import { GrMapLocation } from 'react-icons/gr';
import './post.css';

function Post() {
  const showMap = location => {
    let map;
    const { latitude, longitude } = location;
    const coords = [latitude, longitude];
  };

  const [buttonPopup, setButtonPopup] = useState(false);
  const [img, setImg] = useState('');
  const [location, setLocation] = useState('');
  const [locationName, setLocationName] = useState('');

  const handleLocationClick = e => {
    e.preventDefault();
    setButtonPopup(true);
  };

  const setImageChange = e => {
    setImg(e.target.files[0]);
  };

  const handleLocationSearch = e => {
    e.preventDefault();

    if (!locationName.length) return;

    const encodedLocationName = encodeURIComponent(locationName);

    e.target.innerHTML = 'Searching...';

    const url = `https://us1.locationiq.com/v1/search.php?key=pk.0bbf32a682ffe0713247621953fb99eb&q=${encodedLocationName}&format=json`;

    fetch(url)
      .then(res => {
        if (!res.ok) throw Error('Place not Found');
        return res.json();
      })
      .then(responseData => {
        const data = responseData[0];
        const dataObj = {
          display_name: data.display_name,
          latitude: data.lat,
          longitude: data.lon,
        };
        setLocation(dataObj);
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        e.target.innerHTML = 'Found';
        setTimeout(function () {
          e.target.innerHTML = 'Search';
          document.getElementById('map').innerHTML = location.display_name;
        }, 1200);
      });
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const c = new FormData(ev.target);
    c.append('my_image', img);
    const formDataArr = [...c];
    let formData = Object.fromEntries(formDataArr);
    formData = Object.assign({ location: location, image: img }, formData);
    fetch('http://127.0.0.1:8000/api/timelines/u/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMyNjU2MDc4LCJqdGkiOiIxZTNhYTNlNWUwYjY0ZGY2YjRmNzU0NThmZWJlNzNhNyIsInVzZXJfaWQiOiI0ODBjNzJjZS04YWQxLTRhZWEtYWQxZS1kMWE3MWNiMzQxZGEifQ.m8VPLgCAXvcmwr4gdu7vXTN3vQeqQJy6mr60zeqAykw',
      },
      body: JSON.stringify(formData),
    }).then(res => {
      console.log(res);
    });
  };

  return (
    <form className="post" method="post" onSubmit={handleSubmit}>
      <main>
        <button
          type="button"
          onClick={handleLocationClick}
          style={{ padding: '0.7rem 1.2rem' }}
        >
          <GrMapLocation size="30" style={{ marginRight: '2rem' }} />
          Location
        </button>
      </main>

      <LocationPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <input
          type="text"
          name="location-name"
          className="location-name"
          onChange={e => setLocationName(e.target.value)}
        />
        <button
          type="button"
          onClick={handleLocationSearch}
          className="location-name-search"
        >
          Search
        </button>
        <div id="map" style={{ marginTop: '0.8rem' }}></div>
      </LocationPopup>

      <input type="file" name="image" onChange={setImageChange} />

      <input
        type="text"
        placeholder="Give a Title"
        name="title"
        className="descrip"
      />

      <textarea
        name="experience"
        placeholder="Write about your Experience"
        rows="10"
      ></textarea>

      <button className="post-button">Post</button>
    </form>
  );
}

export default Post;

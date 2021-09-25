import React, { useState } from 'react';
import LocationPopup from './locationPopup';
import { GrMapLocation } from 'react-icons/gr';
import './post.css';

// const L = require('leaflet');
// const leafletMap = require('leaflet-map');

function Post() {
  const showMap = location => {
    let map;
    const { latitude, longitude } = location;
    const coords = [latitude, longitude];
    // L.Icon.Default.imagePath =
    //   'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.4.0/images';
    // map = L.map('map').setView(coords, 13);
    // L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    //   attribution:
    //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);
    // L.marker(coords).addTo(map).bindPopup('Marked Location').openPopup();
  };

  const [buttonPopup, setButtonPopup] = useState(false);

  const [location, setLocation] = useState('');
  const [locationName, setLocationName] = useState('');

  const handleLocationClick = e => {
    e.preventDefault();
    setButtonPopup(true);
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

        showMap(dataObj);
      })
      .catch(err => {
        alert(err);
      })
      .finally(() => {
        e.target.innerHTML = 'Search';
      });
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const formDataArr = [...new FormData(ev.target)];
    let formData = Object.fromEntries(formDataArr);
    formData = Object.assign({ location: location }, formData);
    console.log(formData);
  };

  return (
    <form
      className="post"
      method="post"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
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
        <div id="map"></div>
      </LocationPopup>

      <input type="file" name="image_1" />
      <input type="file" name="image_2" />

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

import React from 'react';
import './timeline.css';

function TimelineCard(props) {
  const imgURL = `http://127.0.0.1:8000${props.timeline.image_one}`;
  return (
    <li className="cards__item">
      <div className="card">
        <div className="card__image card__image--fence">
          <img src={imgURL} />
        </div>
        <div className="card__content">
          <small className="time"></small>
          <div className="card__title">{props.timeline.name}</div>
          <p className="card__text">{props.timeline.description}</p>
          <a
            href={props.timeline.location.mapurl}
            target="_blank"
            className="btn btn--block card__btn"
          >
            View Map
          </a>
        </div>
      </div>
    </li>
  );
}

export default TimelineCard;

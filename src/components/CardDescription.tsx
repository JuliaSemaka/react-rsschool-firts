import React from 'react';

import like from '../assets/like.png';
import { IOneCard, NUMBER_ONE } from './components.module';
import Star from './Star';

const CardDescription: React.FC<IOneCard> = ({ hotel }: IOneCard) => (
  <div className="card-description">
    <p className="text text-title">{hotel.name}</p>
    <div className="stars">
      {new Array(hotel.stars).fill(NUMBER_ONE).map((item, key) => (
        <Star key={key} />
      ))}
    </div>
    <div className="reviews">
      <img className="reviews_img" src={like} alt="like" />
      <button className="button button-blue text">Select</button>
    </div>
  </div>
);

export default CardDescription;

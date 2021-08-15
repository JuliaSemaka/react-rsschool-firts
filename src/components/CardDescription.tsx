import React from 'react';

import like from '../assets/like.png';
import { IOneCard } from './components.module';
import Star from './Star';

const CardDescription: React.FC<IOneCard> = ({ hotel }: IOneCard) => (
  <div className="card-description">
    <p className="text text-title">{hotel.name}</p>
    <div className="stars">
      {new Array(hotel.stars).fill(1).map((item) => (
        <Star key={item} />
      ))}
    </div>
    <div className="reviews">
      <img className="reviews_img" src={like} alt="like" />
      <button className="button button-blue text">Select</button>
    </div>
  </div>
);

export default CardDescription;

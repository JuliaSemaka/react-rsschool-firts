import React from 'react';

import like from '../assets/like.png';
import Star from './Star';

const stars: number[] = [1, 2, 3, 4, 5];

const CardDescription: React.FC = () => (
  <div className="card-description">
    <p className="text text-title">Sentido Palm Royale Soma Bay</p>
    <div className="stars">
      {stars.map((item) => (
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

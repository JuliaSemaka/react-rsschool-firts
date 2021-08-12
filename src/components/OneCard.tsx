import React from 'react';

import img from '../assets/hotel.jpg';
import flag from '../assets/flag.png';
import CardDescription from './CardDescription';
import CardPrice from './CardPrice';

const OneCard: React.FC = () => (
  <div className="card card-word">
    <img className="card-word-img" src={img} alt="img" />
    <CardPrice />
    <CardDescription />
  </div>
);

export default OneCard;

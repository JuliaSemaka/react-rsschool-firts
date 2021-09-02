import React from 'react';

import CardDescription from './CardDescription';
import CardPrice from './CardPrice';
import { ICard } from './components.module';

const Card: React.FC<ICard> = ({ hotel }: ICard) => (
  <div className="card">
    <img className="card-img" src={`assets/hotels/${hotel.img}.jpg`} alt="img" />
    <CardPrice hotel={hotel} />
    <CardDescription hotel={hotel} />
  </div>
);

export default Card;

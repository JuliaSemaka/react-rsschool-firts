import React from 'react';

import CardDescription from './CardDescription';
import CardPrice from './CardPrice';
import { IOneCard } from './components.module';

const OneCard: React.FC<IOneCard> = ({ hotel }: IOneCard) => (
  <div className="card">
    <img className="card-img" src={`assets/hotels/${hotel.img}.jpg`} alt="img" />
    <CardPrice hotel={hotel} />
    <CardDescription hotel={hotel} />
  </div>
);

export default OneCard;

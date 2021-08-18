import React from 'react';
import { NavLink } from 'react-router-dom';

import CardDescription from './CardDescription';
import CardPrice from './CardPrice';
import { ERoute, IOneCard } from './components.module';

const OneCard: React.FC<IOneCard> = ({ hotel, index }: IOneCard) => (
  <NavLink to={`${ERoute.DETAILS}/${index}`} className="card">
    <img className="card-img" src={`assets/hotels/${hotel.img}.jpg`} alt="img" />
    <CardPrice hotel={hotel} />
    <CardDescription hotel={hotel} />
  </NavLink>
);

export default OneCard;

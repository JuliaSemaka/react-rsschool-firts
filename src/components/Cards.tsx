import React from 'react';

import { listHotels } from '../assets/hotels';
import { IHotel } from './components.module';
import OneCard from './OneCard';

const Cards: React.FC = () => (
  <main className="main">
    <div className="main-container">
      {listHotels.map((item: IHotel) => (
        <OneCard key={item.name} hotel={item} />
      ))}
    </div>
  </main>
);

export default Cards;

import React from 'react';
import { listHotels } from '../assets/hotels';
import { IHotel } from './components.module';
import Card from './Card';

const Cards: React.FC = () => (
  <main className="main">
    <div className="main-container">
      {listHotels.map((item: IHotel) => (
        <Card key={item.id} hotel={item} />
      ))}
    </div>
  </main>
);

export default Cards;

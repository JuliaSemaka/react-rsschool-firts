import React, { useState } from 'react';

import { listHotels } from '../assets/hotels';
import { IHotel } from './components.module';
import OneCard from './OneCard';

const Cards: React.FC = () => {
  const [listCards] = useState(listHotels);

  return (
    <main className="main">
      <div className="main-container">
        {listCards.map((item: IHotel, index) => (
          <OneCard key={item.name} hotel={item} index={index} />
        ))}
      </div>
    </main>
  );
};

export default Cards;

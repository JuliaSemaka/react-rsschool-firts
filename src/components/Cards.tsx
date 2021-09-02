import React from 'react';
import { useSelector } from 'react-redux';

import { IHotel } from './components.module';
import OneCard from './OneCard';
import { IReducer } from './store/reducers/reducers.module';

const Cards: React.FC = () => {
  const { listHotels } = useSelector((state: IReducer) => state.hotels);

  return (
    <main className="main">
      <div className="main-container">
        {listHotels.map((item: IHotel, index) => (
          <OneCard key={item.name} hotel={item} index={index} />
        ))}
      </div>
    </main>
  );
};

export default Cards;

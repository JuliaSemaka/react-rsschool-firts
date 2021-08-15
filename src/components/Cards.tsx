import React, { useState } from 'react';
import { IHotel } from './components.module';
import OneCard from './OneCard';

const Cards: React.FC = () => {
  const [listCards, setListCards] = useState([
    { name: 'SIVA SHARM RESORT & SPA', stars: 3, city: 'Hurgada', price: 2150.9, img: 'hotel1', flag: 'Egypt' },
    { name: 'IL MERCATO HOTEL', stars: 4, city: 'Sharm El Sheikh', price: 1200, img: 'hotel2', flag: 'Egypt' },
    {
      name: 'NAAMA BAY PROMENADE MOUNTAIN',
      stars: 5,
      city: 'Alania',
      price: 2302.2,
      img: 'hotel3',
      flag: 'Turkey',
    },
    { name: 'DOMINA CORAL BAY OASIS', stars: 5, city: 'Hurgada', price: 1885, img: 'hotel4', flag: 'Egypt' },
    { name: 'SHARM DREAMS VACATION CLUB', stars: 5, city: 'Alania', price: 1760.3, img: 'hotel5', flag: 'Turkey' },
    { name: 'AURORA ORIENTAL RESORT', stars: 4, city: 'Sharm El Sheikh', price: 2500, img: 'hotel6', flag: 'Egypt' },
    { name: 'XPERIENCE KIROSEIZ PARKLAND', stars: 3, city: 'Alania', price: 1332.9, img: 'hotel7', flag: 'Turkey' },
    { name: 'DOMINA CORAL BAY HAREM', stars: 5, city: 'Hurgada', price: 1014.8, img: 'hotel8', flag: 'Egypt' },
  ]);

  return (
    <main className="main">
      <div className="main-container">
        {listCards.map((item: IHotel, index) => (
          <OneCard key={index} hotel={item} />
        ))}
      </div>
    </main>
  );
};

export default Cards;

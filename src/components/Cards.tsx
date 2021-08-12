import React from 'react';
import OneCard from './OneCard';

const listCards: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const Cards: React.FC = () => (
  <main className="main">
    <div className="main-container">
      {listCards.map((item, index) => (
        <OneCard key={index} />
      ))}
    </div>
  </main>
);

export default Cards;

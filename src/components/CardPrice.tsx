import React from 'react';

import { ICard } from './components.module';

const CardPrice: React.FC<ICard> = ({ hotel }: ICard) => {
  const {
    id, city, price, flag,
  } = hotel;

  return (
    <div className="card-price">
      <div className="card-price_item">
        <p className="text text-price">
          <span>{price}</span> $
        </p>
        <p className="text">{city}</p>
      </div>
      <div className="card-price_item">
        <img className="card-img_flag" src={`assets/flags/${flag}.jpg`} alt={`picture-${id}`} />
      </div>
    </div>
  );
};

export default CardPrice;

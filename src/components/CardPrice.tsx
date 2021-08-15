import React from 'react';

import { IOneCard } from './components.module';

const CardPrice: React.FC<IOneCard> = ({ hotel }: IOneCard) => (
  <div className="card-price">
    <div className="card-price_item">
      <p className="text text-price">
        <span>{hotel.price}</span> $
      </p>
      <p className="text">{hotel.city}</p>
    </div>
    <div className="card-price_item">
      <img className="card-img_flag" src={`assets/flags/${hotel.flag}.jpg`} alt="aaa" />
    </div>
  </div>
);

export default CardPrice;

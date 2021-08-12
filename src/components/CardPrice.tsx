import React from 'react';

import flag from '../assets/flag.png';

const CardPrice: React.FC = () => (
  <div className="card-price">
    <div className="card-price_item">
      <p className="text text-price">
        <span>1255.6</span> $
      </p>
      <p className="text">Hurgada</p>
    </div>
    <div className="card-price_item">
      <img className="card-img_flag" src={flag} alt="aaa" />
    </div>
  </div>
);

export default CardPrice;

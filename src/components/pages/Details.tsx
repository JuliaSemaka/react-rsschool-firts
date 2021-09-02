import React from 'react';
import { useParams } from 'react-router-dom';

import { listHotels } from '../../assets/hotels';
import { IDetails, NUMBER_ONE } from '../components.module';
import Star from '../Star';

const Details: React.FC = () => {
  const { article }: IDetails = useParams();

  const listCards = listHotels[Number(article)];

  return (
    <div className="main-container__text">
      <div className="card-price">
        <div className="card-price_item">
          <p className="text text-price">
            <span>{listCards.price}</span> $
          </p>
          <p className="text">{listCards.city}</p>
        </div>
        <div className="card-price_item">
          <img className="card-img_flag" src={`../../assets/flags/${listCards.flag}.jpg`} alt="aaa" />
        </div>
      </div>
      <div className="card-description">
        <p className="text text-title">{listCards.name}</p>
        <div className="stars">
          {new Array(listCards.stars).fill(NUMBER_ONE).map((item, key) => (
            <Star key={key} />
          ))}
        </div>
      </div>
      <img className="card-img" src={`../../assets/hotels/${listCards.img}.jpg`} alt="img" />
    </div>
  );
};

export default Details;

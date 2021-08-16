import React from 'react';

import { ICardsTourists, ITourists } from '../components.module';

const CardsTourists: React.FC<ICardsTourists> = ({ valueCards }: ICardsTourists) => (
  <div className="form-data">
    <h3 className="text text-title">Tourists:</h3>
    {valueCards.length === 0 && <p className="text text-form">Not data</p>}
    {valueCards.map((item: ITourists) => (
      <div className="form-data__item" key={item.FirstName + item.LastName}>
        <h3 className="text text-title">
          {item.FirstName} {item.LastName}
        </h3>
        <p className="text text-form">Birth: {item.DateOfBirth}</p>
        <p className="text text-form">Night: {item.CountNight}</p>
        <p className="text text-form">Gender: {item.gender}</p>
      </div>
    ))}
  </div>
);

export default CardsTourists;

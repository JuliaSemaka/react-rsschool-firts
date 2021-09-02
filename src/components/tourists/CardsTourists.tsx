import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ITourists } from '../components.module';
import { delValueCards } from '../store/action/hotels';
import { IReducer } from '../store/reducers/reducers.module';

const CardsTourists: React.FC = () => {
  const { cardsTourists } = useSelector((state: IReducer) => state.hotels);
  const dispatch = useDispatch();

  return (
    <div className="form-data">
      <h3 className="text text-title">Tourists:</h3>
      {cardsTourists.length === 0 && <p className="text text-form">Not data</p>}
      {cardsTourists.map((item: ITourists, i) => (
        <div className="form-data__item" key={item.FirstName + item.LastName}>
          <span className="form-data__item_close" onClick={() => dispatch(delValueCards(i))}>
            &#10006;
          </span>
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
};

export default CardsTourists;

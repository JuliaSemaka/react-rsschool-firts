import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CARDS_TOURISTS, DEFAULT_COUNT_NIGHT, EGender, ITourists } from '../components.module';
import { addValueCards, delValueCards } from '../store/action/hotels';
import { IReducer } from '../store/reducers/reducers.module';
import CardsTourists from './CardsTourists';
import Form from './Form';

const Tourists: React.FC = () => (
  <div className="form">
    <Form />
    <CardsTourists />
  </div>
);

export default Tourists;

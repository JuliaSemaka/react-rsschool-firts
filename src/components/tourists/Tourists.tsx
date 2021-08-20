import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CARDS_TOURISTS, DEFAULT_COUNT_NIGHT, EGender, ITourists } from '../components.module';
import { IReducer } from '../store/reducers/reducers.module';
import CardsTourists from './CardsTourists';
import Form from './Form';

const Tourists: React.FC = () => {
  const { cardsTourists } = useSelector((state: IReducer) => state.hotels);
  const dispatch = useDispatch();

  const stateForm: ITourists = {
    FirstName: '',
    LastName: '',
    DateOfBirth: '',
    CountNight: DEFAULT_COUNT_NIGHT,
    gender: EGender.MAN,
    agree: true,
  };
  const [valueForm, setValueForm] = useState(stateForm);

  const [valueCards, setValueCards] = useState(cardsTourists);

  useEffect(() => localStorage.setItem(CARDS_TOURISTS, JSON.stringify(valueCards)), [valueCards]);

  const addCards = (cards: ITourists): void => {
    setValueCards((state) => [...state, cards]);
    setValueForm({
      FirstName: '',
      LastName: '',
      DateOfBirth: '',
      CountNight: DEFAULT_COUNT_NIGHT,
      gender: EGender.MAN,
      agree: true,
    });
  };

  const delCard = (index: number): void => {
    setValueCards((state) => state.filter((item, i) => index !== i));
  };

  return (
    <div className="form">
      <Form valueForm={valueForm} setValueForm={setValueForm} addCards={addCards} />
      <CardsTourists valueCards={valueCards} delCard={delCard} />
    </div>
  );
};

export default Tourists;

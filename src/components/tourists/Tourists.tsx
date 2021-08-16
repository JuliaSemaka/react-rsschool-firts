import React, { useState } from 'react';

import { CARDS_TOURISTS, DEFAULT_COUNT_NIGHT, EGender, ITourists } from '../components.module';
import CardsTourists from './CardsTourists';
import Form from './Form';

const Tourists: React.FC = () => {
  const stateForm: ITourists = {
    FirstName: '',
    LastName: '',
    DateOfBirth: '',
    CountNight: DEFAULT_COUNT_NIGHT,
    gender: EGender.MAN,
    agree: true,
  };
  const [valueForm, setValueForm] = useState(stateForm);
  const cardsTourists: ITourists[] = JSON.parse(localStorage.getItem(CARDS_TOURISTS) || '[]');
  const [valueCards, setValueCards] = useState(cardsTourists);

  const addCards = (cards: ITourists): void => {
    setValueCards((state) => {
      localStorage.setItem(CARDS_TOURISTS, JSON.stringify([...state, cards]));
      return [...state, cards];
    });
    setValueForm({
      FirstName: '',
      LastName: '',
      DateOfBirth: '',
      CountNight: DEFAULT_COUNT_NIGHT,
      gender: EGender.MAN,
      agree: true,
    });
  };

  return (
    <div className="form">
      <Form valueForm={valueForm} setValueForm={setValueForm} addCards={addCards} />
      <CardsTourists valueCards={valueCards} />
    </div>
  );
};

export default Tourists;

import React from 'react';
import CardsTourists from './CardsTourists';
import Form from './Form';

const Tourists: React.FC = () => (
  <div className="form" data-testid="tourists-form">
    <Form />
    <CardsTourists />
  </div>
);

export default Tourists;

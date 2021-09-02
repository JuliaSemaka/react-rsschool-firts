import React from 'react';
import CardsTourists from './CardsTourists';
import Form from './Form';

const Tourists: React.FC = () => (
  <div className="form">
    <Form />
    <CardsTourists />
  </div>
);

export default Tourists;

import React from 'react';

import { IRadio } from '../components.module';

const Checkbox: React.FC<IRadio> = ({ valueForm, setValueForm, field, title }: IRadio) => (
  <div className="checkbox-block text">
    <input
      type="checkbox"
      id={field}
      checked={valueForm[field] as boolean}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueForm({ ...valueForm, [field]: e.target.checked })}
    />
    <label htmlFor={field}>{title}</label>
  </div>
);

export default Checkbox;

import React from 'react';

import { IRadio } from '../components.module';

const Checkbox: React.FC<IRadio> = ({
  valueForm, setValueForm, field, title, errors,
}: IRadio) => (
  <div className="checkbox-block text">
    {errors && <p className="text text-error">{errors}</p>}
    <input
      type="checkbox"
      id={field}
      checked={valueForm[field] as boolean}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueForm({ ...valueForm, [field]: e.target.checked })}
      data-testid={field}
    />
    <label htmlFor={field}>{title}</label>
  </div>
);

export default Checkbox;

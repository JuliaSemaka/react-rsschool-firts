import React from 'react';

import { IRadio } from '../components.module';

const Input: React.FC<IRadio> = ({ valueForm, setValueForm, field, title, type, errors }: IRadio) => {
  return (
    <div className="form-item">
      <h3 className="text text-form">{title}</h3>
      {errors && <p className="text text-error">{errors}</p>}
      <input
        type={type}
        name={field}
        className="input text"
        value={valueForm[field] as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueForm({ ...valueForm, [field]: e.target.value })}
      />
    </div>
  );
};

export default Input;

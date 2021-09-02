import React from 'react';

import { IRadio } from '../components.module';

const Radio: React.FC<IRadio> = ({
  valueForm, setValueForm, field, title, listData,
}: IRadio) => (
  <div className="radio">
    <h3 className="text text-form">{title}</h3>
    <div className="radio-block text">
      {(listData as string[]).map((item) => (
        <div className="radio-block__elem" key={item}>
          <input
            type="radio"
            name={field}
            id={`${field}-${item}`}
            value={item}
            checked={valueForm[field] === item}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValueForm({ ...valueForm, [field]: e.target.value });
            }}
          />
          <label htmlFor={`${field}-${item}`}>{item}</label>
        </div>
      ))}
    </div>
  </div>
);

export default Radio;

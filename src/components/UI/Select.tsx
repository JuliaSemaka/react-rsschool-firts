import React from 'react';

import { IRadio } from '../components.module';

const Select: React.FC<IRadio> = ({ valueForm, setValueForm, field, title, listData }: IRadio) => (
  <div className="form-item">
    <h3 className="text text-form">{title}</h3>
    <select
      name={field}
      className="input text"
      value={valueForm[field] as string}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setValueForm({ ...valueForm, [field]: e.target.value })}
    >
      {(listData as string[]).map((item) => {
        return (
          <option value={item} key={item}>
            {item}
          </option>
        );
      })}
    </select>
  </div>
);

export default Select;

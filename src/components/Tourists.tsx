import React, { useState } from 'react';

import { EGender } from './components.module';
import Checkbox from './form/Checkbox';
import Radio from './form/Radio';
import Select from './form/Select';

const Tourists: React.FC = () => {
  const [valueForm, setValueForm] = useState({
    FirstName: '',
    LastName: '',
    DateOfBirth: '',
    CountNight: '8',
    gender: EGender.MAN,
    agree: true,
  });

  const CountNight: number[] = [6, 7, 8, 9, 10, 11, 12];

  const addTourist = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(valueForm);
  };

  return (
    <div className="form">
      <form className="form-data" onSubmit={addTourist}>
        <h3 className="text text-title">Fill in the tourist information:</h3>
        <input
          type="text"
          name="FirstName"
          className="input text"
          value={valueForm.FirstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValueForm({ ...valueForm, FirstName: e.target.value })
          }
        />
        <input
          type="text"
          name="LastName"
          className="input text"
          value={valueForm.LastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValueForm({ ...valueForm, LastName: e.target.value })
          }
        />
        <input
          type="date"
          name="DateOfBirth"
          className="input text"
          value={valueForm.DateOfBirth}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValueForm({ ...valueForm, DateOfBirth: e.target.value })
          }
        />
        <Select
          valueForm={valueForm}
          setValueForm={setValueForm}
          field="CountNight"
          title="Select the number of nights:"
          listData={CountNight}
        />

        <Radio
          valueForm={valueForm}
          setValueForm={setValueForm}
          field="gender"
          title="Your gender"
          listData={[EGender.MAN, EGender.WOMAN]}
        />
        <Checkbox valueForm={valueForm} setValueForm={setValueForm} field="agree" title="Agree with the terms" />

        <button type="submit" className="button button-grey text">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tourists;

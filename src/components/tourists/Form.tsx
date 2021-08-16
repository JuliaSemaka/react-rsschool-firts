import React, { useEffect, useState } from 'react';

import { ECountNight, EGender, IErrors, IForm } from '../components.module';
import Checkbox from '../UI/Checkbox';
import Input from '../UI/Input';
import Radio from '../UI/Radio';
import Select from '../UI/Select';

const Form: React.FC<IForm> = ({ valueForm, setValueForm, addCards }: IForm) => {
  const objErr: IErrors = {};
  const [errors, setErrors] = useState(objErr);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const CountNight: number[] = [
    ECountNight.six,
    ECountNight.seven,
    ECountNight.eight,
    ECountNight.nine,
    ECountNight.ten,
    ECountNight.eleven,
  ];

  useEffect(() => {
    validate();
  }, [valueForm]);

  const validate = () => {
    resetErrors();
    if (!valueForm.agree) {
      setErrors((state) => ({ ...state, agree: 'Field must be true' }));
    }
    if (!valueForm.FirstName) {
      setErrors((state) => ({ ...state, FirstName: 'Empty field' }));
    }
    if (!valueForm.LastName) {
      setErrors((state) => ({ ...state, LastName: 'Empty field' }));
    }
    if (!valueForm.DateOfBirth) {
      setErrors((state) => ({ ...state, DateOfBirth: 'Empty field' }));
    }
  };

  const resetErrors = () => {
    setErrors({});
  };

  const addTourist = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      addCards(valueForm);
      setMessageSuccess(true);
      setTimeout(() => setMessageSuccess(false), 2000);
      resetErrors();
    }
  };

  return (
    <form className="form-data" onSubmit={addTourist}>
      <h3 className="text text-title">Fill in the tourist information:</h3>
      <Input
        valueForm={valueForm}
        setValueForm={setValueForm}
        field="FirstName"
        title="Enter your first name:"
        type="text"
        errors={errors.FirstName}
      />
      <Input
        valueForm={valueForm}
        setValueForm={setValueForm}
        field="LastName"
        title="Enter your last name:"
        type="text"
        errors={errors.LastName}
      />
      <Input
        valueForm={valueForm}
        setValueForm={setValueForm}
        field="DateOfBirth"
        title="Enter your date of birth:"
        type="date"
        errors={errors.DateOfBirth}
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
        title="Your gender:"
        listData={[EGender.MAN, EGender.WOMAN]}
      />
      <Checkbox
        valueForm={valueForm}
        setValueForm={setValueForm}
        field="agree"
        title="Agree with the terms"
        errors={errors.agree}
      />

      <button type="submit" disabled={!!Object.keys(errors).length} className="button button-grey text">
        Submit
      </button>
      {messageSuccess && <h3 className="text text-form">Tourist added successfully</h3>}
    </form>
  );
};

export default Form;

import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import {
  DatePickerInput
} from './InputDate.styled';
import 'react-datepicker/dist/react-datepicker.css'

const InputDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(
    (props, ref) => (
      <DatePickerInput type="button"  {...props} ref={ref}/>
    ),
  );

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      {...props}
    />
  );
};

export default InputDate
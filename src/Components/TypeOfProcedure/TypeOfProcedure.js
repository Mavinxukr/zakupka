import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { getTendersType } from '../../redux/actions/getTendersType';
import { tendersTypeDataReceivedSelector, tendersTypeDataSelector } from '../../utils/selectors';
import Spinner from '../shared/Spinner';

const TypeOfProcedure = ({ event, value }) => {
  const dispatch = useDispatch();
  const data = useSelector(tendersTypeDataSelector);
  const isReceived = useSelector(tendersTypeDataReceivedSelector);
  useEffect(() => {
    dispatch(getTendersType({}));
  }, []);

  if (!isReceived) {
    return <Spinner />;
  }

  return (
    <FormControl variant="outlined">
      <InputLabel>Тип тендера</InputLabel>
      <Select
        labelId="tender_procurementMethodType"
        id="tender_procurementMethodType"
        name="tender_procurementMethodType"
        value={value}
        onChange={event}
        label="TenderType"
      >
        {
          data.map((item) => (<MenuItem key={item?.id} value={item?.name_uk}>{item?.name_uk}</MenuItem>))
        }
      </Select>
    </FormControl>
  );
};

export default TypeOfProcedure;

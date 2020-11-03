import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
import cookies from 'js-cookie';
import styles from './MoneyTypeComponent.scss';
import { getMoneyType } from '../../../redux/actions/moneyType';
import { moneyTypeDataReceivedSelector } from '../../../utils/selectors';

const MoneyTypeComponent = () => {
  const dispatch = useDispatch();
  const dataMoneyType = useSelector(moneyTypeDataReceivedSelector);

  useEffect(() => {
    dispatch(getMoneyType({}, cookies.get('tokenProzorro')));
  }, []);

  console.log(dataMoneyType);
  return (
    <div className={styles.gridBlockGlobal}>
      <span className={styles.currency}>Валюта</span>
      <Field
        as="select"
        name="currency"
        id="currency"
      >
        <option value="1">Гривня (UAH)</option>
        <option value="2">Американський долар (USD)</option>
        <option value="3">Євро (EUR)</option>
        <option value="4">Російський рубль (RUB)</option>
        <option value="5">Англійський фунт стерлінг (GBR)</option>
      </Field>
    </div>
  );
};

export default MoneyTypeComponent;

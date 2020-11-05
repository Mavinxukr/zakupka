import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field } from 'formik';
import cookies from 'js-cookie';
import styles from './MoneyTypeComponent.scss';
import { getMoneyType } from '../../../redux/actions/moneyType';
import { moneyTypeDataReceivedSelector, moneyTypeDataSelector } from '../../../utils/selectors';

const MoneyTypeComponent = () => {
  const dispatch = useDispatch();
  const dataMoneyType = useSelector(moneyTypeDataSelector);
  const isReceived = useSelector(moneyTypeDataReceivedSelector);

  useEffect(() => {
    dispatch(getMoneyType({}, cookies.get('tokenProzorro')));
  }, []);

  if (!isReceived) {
    return <div />;
  }

  return (
    <div className={styles.gridBlockGlobal}>
      <span className={styles.currency}>Валюта</span>
      <Field
        as="select"
        name="currency"
        id="currency"
      >
        {
            dataMoneyType.map((item) => (
              <option
                key={item.id}
                value={item.us_name}
              >
                {item.ua_name}
              </option>
            ))
          }
      </Field>
    </div>
  );
};

export default MoneyTypeComponent;

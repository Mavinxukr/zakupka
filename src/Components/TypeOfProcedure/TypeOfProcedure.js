import React, { useEffect } from 'react';
import { Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import BlockForm from '../shared/BlockForm/BlockForm';
import { getTendersType } from '../../redux/actions/getTendersType';
import styles from './TypeOfProcedure.scss';
import { tendersTypeDataReceivedSelector, tendersTypeDataSelector } from '../../utils/selectors';

const TypeOfProcedure = () => {
  const dispatch = useDispatch();
  const data = useSelector(tendersTypeDataSelector);
  const isReceived = useSelector(tendersTypeDataReceivedSelector);

  useEffect(() => {
    dispatch(getTendersType({}));
  }, []);

  if (!isReceived) {
    return <div />;
  }

  return (
    <BlockForm>
      <h2 className={styles.middleTitleGlobal}>Тип процедури </h2>
      <div className={styles.gridBlockGlobal}>
        <span>Оберіть тип процедури</span>
        <Field
          as="select"
          name="TypeOfProcedure"
          id="typeOfProcedure"
        >
          {
            data.map((item) => (<option className={styles.option} key={item?.id}>{item?.name_uk}</option>))
           }
        </Field>
      </div>
    </BlockForm>
  );
};

export default TypeOfProcedure;

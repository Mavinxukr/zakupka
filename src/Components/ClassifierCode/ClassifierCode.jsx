import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classifierCodeDataReceivedSelector, classifierCodeDataSelector } from '../../utils/selectors';
import { getClassifierCode } from '../../redux/actions/classifierCode';
import styles from './ClassifierCode.scss';

const ClassifierCode = () => {
  const dispatch = useDispatch();
  const data = useSelector(classifierCodeDataSelector);
  const isDataRecived = useSelector(classifierCodeDataReceivedSelector);

  useEffect(() => {
    dispatch(getClassifierCode({}));
  }, []);

  if (!isDataRecived) {
    return <div />;
  }
  const dataParse = JSON.parse(data[0].get_data.data);
  const arrDataParse = Object.keys(dataParse).map((item) => ({
    key: item,
    value: dataParse[item],
  }));

  return (
    <>
      <ul className={styles.tableClassifier}>
        {arrDataParse.map((item) => (
          <li key={item.key} className={styles.itemClassifier}><input type="checkbox" name="classifier" /> {item.key} - {item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default ClassifierCode;

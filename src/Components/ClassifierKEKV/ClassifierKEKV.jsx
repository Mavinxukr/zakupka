import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ClassifierKEKV.scss';
import { KEKVtypeDataReceivedSelector, KEKVtypeDataSelector } from '../../utils/selectors';
import { getKEKV } from '../../redux/actions/kekv';

const ClassifierKEKV = () => {
  const dispatch = useDispatch;
  const KEKV = useSelector(KEKVtypeDataSelector);
  const isKEKV = useSelector(KEKVtypeDataReceivedSelector);

  useEffect(() => {
    dispatch(getKEKV({}));
  }, []);

  if (!isKEKV) {
    return <div />;
  }

  console.log(KEKV, isKEKV);

  return (
    <>
      <h2 className={styles.middleTitleGlobal}>ClassifierKEKV</h2>
    </>
  );
};

export default ClassifierKEKV;

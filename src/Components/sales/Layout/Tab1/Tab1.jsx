import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tendersDataReceivedSelector, tendersDataSelector } from '../../../../utils/selectors';
import { getTenders } from '../../../../redux/actions/tenders';
import Card from '../../../shared/Card/Card';
import Filter from '../../../shared/Filters/Filters';
import styles from './Tab1.scss';
import Spinner from '../../../shared/Spinner';

const Tab1 = () => {
  const dispatch = useDispatch();
  const tenders = useSelector(tendersDataSelector);
  const isDataReceived = useSelector(tendersDataReceivedSelector);
  useEffect(() => {
    dispatch(getTenders({}));
  }, []);

  if (!isDataReceived) {
    return <Spinner />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.pills}>
        <button type="button">все</button>
        <button type="button">обране</button>
      </div>
      <div className={styles.bgWhite}>
        <Filter className={styles.top} />
        <h1 className={styles.titleFilter}>Державні закупівлі
        </h1>
        <div className={styles.titleContainer}>
          <p className={styles.leftBlock}>Предмет закупівлі</p>
          <div className={styles.middleBlock}>
            <p> Очікувана вартість </p>
            <p>Важливі дати</p>
          </div>
          <p>Статус</p>
        </div>
      </div>
      {tenders.data.map((item) => {
        const tender = JSON.parse(item.tender);

        return (
          <Card key={tender.id} tender={tender} />
        );
      })}
    </div>
  );
};

export default Tab1;

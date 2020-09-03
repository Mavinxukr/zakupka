import React from 'react';
import IconStart from '../../../../static/svg/star.svg';
import styles from './Tab2.scss';
import Filter from '../Filters/Filters';

const Tab2 = () => (
  <div className={styles.main}>
    <div className={styles.bgWhite}>
      <Filter className={styles.top} />
      <h1 className={styles.titleFilter}>Плани закупівель
      </h1>
      <div className={styles.titleContainer}>
        <p className={styles.leftBlock}>Предмет закупівлі</p>
        <div className={styles.middleBlock}>
          <p>Планова сума закупівлі</p>
          <p>Початок процедури</p>
        </div>
        <p>Статус</p>
      </div>
    </div>
    <div className={styles.bgWhite}>
      <div className={styles.titleContainer}>
        <div className={styles.leftBlock}>
          <a href="/">[ТЕСТУВАННЯ] Назва зкупівлі 1 </a>
          <span className={styles.contentText}>
            ЗамовникТест
          </span>
          <span className={styles.contentText}>
            О компании
          </span>
          <span className={styles.contentText}>
            ID: UA-2020-08-31-000045-a
          </span>
        </div>
        <div className={styles.middleBlock}>
          <div className={styles.sumBlock}>
            <span className={styles.sum}>25 000,00 ₴</span>
            <span className={styles.data}>c НДС</span>
          </div>
          <div>
            <span className={styles.contentText}>
              вересень, 2020
            </span>
          </div>
        </div>
        <div className={styles.rightBLock}>
          <span className={styles.period}>
            Період уточнень
          </span>
          <span className={styles.data}>
            Осталось: --
          </span>
          <div className={styles.iconBlock}>
            <IconStart className={styles.iconStar} />
            <span className={styles.data}>
              Добавить в избранное
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tab2;

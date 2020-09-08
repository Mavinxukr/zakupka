import React from 'react';
import IconStart from '../../../../static/svg/star.svg';
import styles from './Tab1.scss';
import Filter from '../Filters/Filters';

const Tab1 = ({ tenders }) => (
  <div className={styles.main}>
    <div className={styles.pills}>
      <button type="button">все</button>
      <button type="button">избранные</button>
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
        <div className={styles.bgWhite} key={item.id}>
          <div className={styles.titleContainer}>
            <div className={styles.leftBlock}>
              <a href="/">{tender.title}</a>
              <span className={styles.contentText}>
                {item.customer_legalName}
              </span>
              <span className={styles.contentText}>
                О компании
              </span>
              <span className={styles.contentText}>
                {tender.tenderID}
              </span>
            </div>
            <div className={styles.middleBlock}>
              <div className={styles.sumBlock}>
                <span className={styles.sum}>{item.bet_price} ₴</span>
                <span className={styles.data}>c НДС</span>
              </div>
              <div>
                <span className={styles.contentText}>
                  Объявлена::
                </span>
                <span className={styles.data}>
                  31 серп., 11:19
                </span>
                <span className={styles.contentText}>
                  Завершение периода уточнений:
                </span>
                <span className={styles.data}>
                  31 серп., 11:45
                </span>
                <span className={styles.contentText}>
                  Прием предложений:
                </span>
                <span className={styles.data}>
                  31 серп., 11:19 – 31 серп., 11:55
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
      );
    })}
  </div>
);

export default Tab1;

import React from 'react';
import IconStart from '../../../../static/svg/star.svg';
import styles from './Tab2.scss';
import Filter from '../Filters/Filters';

const Tab2 = () => (
  <div className={styles.main}>
    <div className={styles.bgWhite}>
      <Filter className={styles.top} />
      <div className={styles.titleContainer}>
        <p className={styles.leftBlock}>Предмет закупки</p>
        <div className={styles.middleBlock}>
          <p>Ожидаемая стоимость</p>
          <p>Важные даты</p>
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
  </div>
);

export default Tab2;

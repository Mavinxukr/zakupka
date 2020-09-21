import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './InfoAboutPurchase.scss';

const InfoAboutPurchase = () => (
  <>
    <div className={styles.purchaseContainer}>
      <h2 className={styles.title}>Інформация про закупівлю</h2>
      <div className={styles.containerInfo}>
        <ul className={styles.names}>
          <li className={styles.smallBoldTextGlobal}>Очікування варточті:</li>
          <li className={styles.smallBoldTextGlobal}>Вид предмета закупівлі:</li>
          <li className={styles.smallBoldTextGlobal}>Розмір мінімального кроку пониження ціни:</li>
          <li className={styles.smallBoldTextGlobal}>Публічне посилання на закупівлю:</li>
          <li className={styles.smallBoldTextGlobal}>ID:</li>
          <li className={styles.smallBoldTextGlobal}>Ідентифікатор закупівлі:</li>
          <li className={styles.smallBoldTextGlobal}>Ідентифікатор плану закупівлі:</li>

        </ul>
        <ul className={styles.description}>
          <li className={styles.smallTextGlobal}>470 000 грн з ПДВ</li>
          <li className={styles.smallTextGlobal}>товари</li>
          <li className={styles.smallTextGlobal}>4 700 грн</li>
          <li className={styles.smallTextGlobal}><input type="text" placeholder="https://zakupki.prom.ua/gov/tenders/UA-2020-09-01-002493-b" />
          </li>
          <li className={styles.smallTextGlobal}>f6b5bd6361ba4ec190d1dd63c7a11cd2</li>
          <li className={styles.smallTextGlobal}>UA-2020-09-01-002493-b</li>
          <li className={styles.smallTextGlobal}><NavLink exact to="/">UA-P-2020-09-01-002101-b</NavLink></li>
        </ul>
      </div>
    </div>
  </>
);

export default InfoAboutPurchase;

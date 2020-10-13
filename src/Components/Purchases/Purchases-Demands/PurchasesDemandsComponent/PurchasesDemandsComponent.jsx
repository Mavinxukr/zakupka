import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PurchasesDemandsComponent.scss';

const PurchasesDemandsComponent = () => (
  <>
    <div className={styles.containerGlobal}>
      <NavLink
        to="/"
        exact
        className={styles.linkGlobal}
      >
        Назад до списку вимог
      </NavLink>
      <h3 className={styles.middleTitleGlobal}>Хліб</h3>
      <p className={styles.smallTitleGlobal}>Специфікації</p>
      <p className={styles.description}>В специфікаціях не зрозуміло</p>
      <div className={styles.gridRow}>
        <p className={styles.smallBoldTextGlobal}>Автор вимоги:</p>
        <span>пока не доступно</span>
      </div>
      <div className={styles.gridRow}>
        <p className={styles.smallBoldTextGlobal}>Дата подачи:</p>
        <span>26.03.20 14:00</span>
      </div>
      <div className={styles.gridRow}>
        <p className={styles.smallBoldTextGlobal}>Тип:</p>
        <span>Вимога щодо умов закупівлі</span>
      </div>
      <div className={styles.gridRow}>
        <p className={styles.smallBoldTextGlobal}>Ідентифікатор:</p>
        <span>UA-2020-03-25-003549-b b1</span>
      </div>
    </div>
  </>
);

export default PurchasesDemandsComponent;

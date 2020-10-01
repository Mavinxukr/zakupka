import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotPrice.scss';

const NotPrice = () => (
  <>
    <h4 className={styles.middleTitleGlobal}>Нецінові критерії закупівлі</h4>
    <div className={styles.flexColumnGlobal}>
      <NavLink
        to="/"
        exact
        className={styles.linkGlobal}
      >
        Детальніше про цуцінові критерії.
      </NavLink>
      <NavLink
        to="/"
        exact
        className={styles.linkGlobal}
      >
        + Додати неціновий критерій
      </NavLink>
    </div>
    <div className={styles.term}>
      <div className={styles.descriptionNotPrice}>
        <p>Строк, на який укладається рамкова угода(міс.)</p>
        <input type="text" className={styles.inputGlobal} />
      </div>
      <div className={styles.weightNotPrice}>
        <p>Строк, на який укладається рамкова угода(міс.)</p>
        <input type="text" className={styles.inputGlobal} />
      </div>
    </div>
  </>
);

export default NotPrice;

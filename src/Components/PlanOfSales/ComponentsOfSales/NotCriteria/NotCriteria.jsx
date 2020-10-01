import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NotCriteria.scss';

const NotCritera = () => (
  <>
    <h4 className={styles.middleTitleGlobal}>Нецінові критерії критеріїв або послуг</h4>
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
      <div className={styles.flexRowGlobal}>
        <button type="button" className={styles.buttonGlobal}>Додати позицію</button>
        <button type="button" className={styles.buttonGlobal}>Копіювати позицію</button>
      </div>
    </div>
  </>
);

export default NotCritera;

import React from 'react';
import Filter from './Filters/Filters';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.main}>
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
);

export default Layout;

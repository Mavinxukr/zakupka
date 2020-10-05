import React from 'react';
import cx from 'classnames';
import styles from './CancelPurchases.scss';

const Layout = () => (

  <>
    <div className={styles.containerGlobal}>
      <h4 className={styles.middleTitleGlobal}>Скасування закупівлі</h4>
      <h4 className={styles.smallTitleGlobal}>Відмінити хакупівді</h4>
      <div className={styles.gridTable}>
        <div>
          <p className={cx(styles.smallBoldTextGlobal, styles.cellTable)}>Скасування закупівлі</p>
          <span>від 13.05.20. 11:13</span>
        </div>
        <div>
          <p className={cx(styles.smallBoldTextGlobal, styles.cellTable)}>Період оскарження</p>
          <span />
        </div>
        <div>
          <p className={cx(styles.smallBoldTextGlobal, styles.cellTable)}>Причина</p>
          <span className={styles.blue}>відсутність подальшої потреби в закупівлі товарів,робіт і послуг</span>
        </div>
        <div>
          <p className={cx(styles.smallBoldTextGlobal, styles.cellTable)}>Статус</p>
          <span className={styles.blue}>чернетка</span>
        </div>
        <div>
          <p className={cx(styles.smallBoldTextGlobal, styles.cellTable)}>Наявність скарги</p>
          <span>Відсутня</span>
        </div>
      </div>
    </div>
  </>

);

export default Layout;

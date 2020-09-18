import React from 'react';
import cx from 'classnames';
import styles from './InfoArrow.scss';

const InfoArrow = () => (
  <>
    <div className={styles.containerGlobal}>
      <div className={styles.arrowBlockMain}>
        <div className={cx(styles.arrowBlock, styles.arrowBlockActive)}>
          <div className={cx(styles.arrowHeader, styles.smallBoldTextGlobal)}>Прийом пропозицій</div>
          <div className={styles.arrowMain}>Не було</div>
          <div className={styles.arrowFooter}>
            <p>з 07.03.2017 15:09</p>
            <p>до 23.03.2017 16:00</p>
          </div>
        </div>
        <div className={styles.arrowBlock}>
          <div className={cx(styles.arrowHeader, styles.smallBoldTextGlobal)}>Аукціон</div>
          <div className={styles.arrowMain}>Не було</div>
          <div className={styles.arrowFooter}>
            <p>з 07.03.2017 15:09</p>
            <p>до 23.03.2017 16:00</p>
          </div>
        </div>
        <div className={styles.arrowBlock}>
          <div className={cx(styles.arrowHeader, styles.smallBoldTextGlobal)}>Кваліфікація</div>
          <div className={styles.arrowMain}>Не було</div>
          <div className={styles.arrowFooter}>
            <p>з 07.03.2017 15:09</p>
            <p>до 23.03.2017 16:00</p>
          </div>
        </div>
        <div className={styles.arrowBlock}>
          <div className={cx(styles.arrowHeader, styles.smallBoldTextGlobal)}>Прозициї розглянуті</div>
          <div className={styles.arrowMain}>Не було</div>
          <div className={styles.arrowFooter}>
            <p>з 07.03.2017 15:09</p>
            <p>до 23.03.2017 16:00</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default InfoArrow;

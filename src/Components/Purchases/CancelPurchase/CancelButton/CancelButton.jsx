import React from 'react';
import styles from './CancelButton.scss';

const CancelButton = () => (
  <>
    <div className={styles.containerCancel}>
      <article>
        <p className={styles.smallBoldTextGlobal}>Ця закупівля створена <span className={styles.greenText}>після 19.04.2020</span></p>
        <p className={styles.smallTextGlobal}>Тому проводиться відповідно до чинної редакції Закону Про публічні закупівлі</p>
      </article>
      <button type="button" className={styles.buttonGlobal}>Детальніше</button>
    </div>
  </>
);

export default CancelButton;

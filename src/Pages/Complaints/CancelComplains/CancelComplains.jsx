import React from 'react';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import styles from './CancelComplains.scss';

const NewComplains = () => (
  <>
    <Header />
    <div className={styles.containerGlobal}>
      <div className={styles.shadowBlock}>
        <h3 className={styles.middleTitleGlobal}>Відмінити</h3>
        <p>Опишіть причину</p>
        <div className={styles.flexColumnGlobal}>
          <textarea
            className={styles.textAreaGlobal}
            placeholder="Опишіть причину відміни. Наприклад 'Помилково'"
          />
          <button type="button" className={styles.buttonMainGlobal}>Відмінити</button>
        </div>
      </div>
    </div>
    <Footer classWrapper={styles.footerGlobal} />
  </>
);

export default NewComplains;

import React from 'react';
import styles from './NewComplainsComponent.scss';

const NewComplainsComponent = () => (
  <>
    <div className={styles.shadowBlock}>
      <div>
        <h3 className={styles.middleTitleGlobal}>Подання вимоги/скарги</h3>
        <div className={styles.flexColumnGlobal}>
          <input
            type="text"
            placeholder="Короткий заголовок"
            className={styles.inputGlobal}
          />
          <textarea
            placeholder="Опис"
            className={styles.textArea}
          />
          <span className={styles.smallTitleGlobal}>
            Подано на:
          </span>
          <input className={styles.inputGlobal} type="number" />
          <input className={styles.buttonMainGlobal} type="submit" />
        </div>
      </div>
    </div>
  </>
);

export default NewComplainsComponent;

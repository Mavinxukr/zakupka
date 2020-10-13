import React from 'react';
import cx from 'classnames';
import styles from './AskComponent.scss';

const AskComponent = () => (
  <>
    <div className={cx(styles.shadowBlock, styles.containerGlobal)}>
      <h3 className={styles.middleTitleGlobal}>
        Поставити запитання
      </h3>
      <div>
        <h4 className={styles.smallTitleGlobal}>Чого стосується запитання:</h4>
        <select>
          <option>API</option>
          <option>API</option>
          <option>API</option>
          <option>API</option>
        </select>
      </div>
      <div>
        <h4 className={styles.smallTitleGlobal}>Назва теми:</h4>
        <input type="text" className={styles.inputGlobal} />
      </div>
      <div>
        <h4 className={styles.smallTitleGlobal}>Питання:</h4>
        <textarea className={styles.textAreaGlobal} />
      </div>
      <input type="submit" className={styles.buttonMainGlobal} />
    </div>
  </>
);

export default AskComponent;

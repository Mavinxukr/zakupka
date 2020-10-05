import React from 'react';
import IconDocument from '../../../static/svg/doc.svg';
import styles from './PurchasesContract.scss';

const PurchasesContract = () => (
  <>
    <div className={styles.contractBlock}>
      <h4 className={styles.middleTitleGlobal}>Завантаження договору</h4>
      <div className={styles.containerGlobal}>
        <p>Щоб закрити тендер, необхідно щавантажити відканований та підписаний з двох сторін договір.</p>
        <div className={styles.tableBlock}>
          <div className={styles.nameCell}>
            <p>Назва файлу</p>
            <div className={styles.nameCellContent}>
              <IconDocument className={styles.iconGlobal} />
              <p className={styles.cellDate}>
                <span className={styles.normalBlueTextGlobal}>Договір.docx</span>
                <span className={styles.smallGrayTextGlobal}>0b</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PurchasesContract;

import React from 'react';
import cx from 'classnames';
import IconDocument from '../../../static/svg/doc.svg';
import IconDelete from '../../../static/svg/delete.svg';
import styles from './PurchasesContract.scss';

const PurchasesContract = () => (
  <>
    <form className={cx(styles.contractBlock, styles.shadowBlock)}>
      <h4 className={styles.middleTitleGlobal}>Завантаження договору</h4>
      <div className={styles.containerGlobal}>
        <p>Щоб закрити тендер, необхідно завантажити відканований та підписаний з двох сторін договір.</p>
        <div className={styles.tableBlock}>
          <div className={styles.nameCell}>
            <p className={styles.titleTable}>Назва файлу</p>
            <div className={styles.nameCellContent}>
              <IconDocument className={styles.iconGlobal} />
              <p className={styles.cellDate}>
                <span className={styles.normalBlueTextGlobal}>Договір.docx</span>
                <span className={styles.smallGrayTextGlobal}>0b</span>
              </p>
            </div>
          </div>
          <div className={styles.nameCell}>
            <p className={styles.typeTable}>Тип файлу</p>
            <div className={styles.typeCellContent}>
              <select>
                <option value="sign1">Підписаний договір</option>
              </select>
              <IconDelete className={styles.iconGlobalDelete} />
            </div>
          </div>
        </div>
        <div className={styles.download}>
          <label htmlFor="downloadFile" className={styles.buttonGlobal}>
            Прикріпити файл
            <input type="file" id="downloadFile" className={styles.downloadButton} />
          </label>
          <span className={styles.smallGrayTextGlobal}>Максимум 50 файлов не більше 49 MB кожен.</span>
        </div>
        <div className={styles.tableCalendar}>
          <div className={styles.gridTable}>
            <p>Номер договору</p>
            <input className={styles.inputGlobal} type="text" />
          </div>
          <div className={styles.gridTable}>
            <p>Дата підписання договору</p>
            <input className={styles.inputGlobal} type="date" value="2020-06-01" />
          </div>
          <div className={styles.gridTable}>
            <p>Договір дійсний з</p>
            <input className={styles.inputGlobal} type="date" value="2020-06-01" />
          </div>
          <div className={styles.gridTable}>
            <p>Договір дійсний до</p>
            <input className={styles.inputGlobal} type="date" value="2020-06-01" />
          </div>
        </div>
        <button type="submit" className={styles.buttonMainGlobal}>Завантажити</button>
      </div>
    </form>
  </>
);

export default PurchasesContract;

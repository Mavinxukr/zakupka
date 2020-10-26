import React from 'react';
import cx from 'classnames';
import IconFile from '../../static/svg/doc.svg';
import IconDelete from '../../static/svg/delete.svg';
import styles from './WorkWithDocuments.scss';

const WorkWithDocuments = () => (
  <>
    <div action="/" className={styles.shadowBlock}>
      <div className={styles.gridTableTitle}>
        <p className={styles.smallBoldTextGlobal}>Назва файлу</p>
        <p className={styles.smallBoldTextGlobal}>Тип файлу</p>
      </div>
      <div className={styles.gridRow}>
        <div className={styles.file}>
          <IconFile className={cx(styles.iconGlobal, styles.documentIcon)} />
          <div className={cx(styles.flexColumnGlobal, styles.downloadDoc)}>
            <span className={styles.normalBlueTextGlobal}>Договір.pdf</span>
            <span>20.82 kb</span>
          </div>
        </div>
        <select className={styles.tableOption}>
          <option>Підписаний договір</option>
        </select>
        <IconDelete className={cx(styles.iconGlobal, styles.basketIcon)} />
      </div>
      <div className={styles.gridRow}>
        <div className={styles.file}>
          <IconFile className={cx(styles.iconGlobal, styles.documentIcon)} />
          <div className={cx(styles.flexColumnGlobal, styles.downloadDoc)}>
            <span className={styles.normalBlueTextGlobal}>Договір.pdf</span>
            <span>20.82 kb</span>
          </div>
        </div>
        <select className={styles.tableOption}>
          <option>Підписаний договір</option>
        </select>
        <IconDelete className={cx(styles.iconGlobal, styles.basketIcon)} />
      </div>
      <div className={cx(styles.flexColumnGlobal, styles.sizeBlock)}>
        <label htmlFor="downloadFile" className={styles.buttonMainGlobal}>
          Прикріпити файл
          {/* eslint-disable-next-line react/button-has-type */}
          <input
            type="file"
            id="downloadFile"
            className={styles.downloadFile}
          />
        </label>
        <span className={styles.smallGrayTextGlobal}>
          Максимум 100 файлів, не більше 49МВ кожен.
        </span>
      </div>
      <div className={styles.gridCouple}>
        <p><span className={styles.redStar}>*</span>Номер договору</p>
        <input
          type="number"
          className={styles.inputGlobal}
        />
      </div>
      <div className={styles.gridCouple}>
        <p><span className={styles.redStar}>*</span>Ціна договору</p>
        <input
          type="number"
          className={styles.inputGlobal}
        />
      </div>
      <div className={styles.gridCouple}>
        <p><span className={styles.redStar}>*</span>Ознака ПДВ в договорі</p>
        <span className={styles.alignCenter}>
          <input
            type="checkbox"
            className={styles.inputGlobal}
          />
          з ПДВ
        </span>
      </div>
      <div className={styles.gridCouple}>
        <p><span className={styles.redStar}>*</span>Ціна договору без ПДВ</p>
        <input
          type="number"
          className={styles.inputGlobal}
        />
      </div>
      <div className={styles.gridCouple}>
        <p><span className={styles.redStar}>*</span>Дата підписання договору</p>
        <input
          type="date"
          className={styles.inputGlobal}
        />
      </div>
      <div className={styles.gridThree}>
        <p><span className={styles.redStar}>*</span>Договор дійсний з</p>
        <input
          type="date"
          className={styles.inputGlobal}
        />
        <span>до
          <input
            type="date"
            className={cx(styles.inputGlobal, styles.marginInput)}
          />
        </span>
      </div>
      <button type="submit" className={styles.buttonMainGlobal}>Завантажити</button>
    </div>
  </>
);

export default WorkWithDocuments;

import React from 'react';
import styles from './CancelConfirm.scss';

const CancelConfirm = () => (
  <>
    <div className={styles.containerConfirm}>
      <p className={styles.normalTextGlobal}>Ви дійсно бажаєте скасувати тоги <span className={styles.normalBoldTextGlobal}>Тестування</span>?</p>
      <span className={styles.smallTextGlobal}>Причина скасування закупівлі</span>
      <select name="cancel" id="">
        <option value="1">Відсутність подальшої потреби в закупівлі товарів, робіт і послуг</option>
        <option value="2">Неможливість усунення виявлених порушень законодавства у сфері публіних закупівель</option>
        <option value="3">Скорочення видатків на здійснення закупівлі робіт і послуг</option>
      </select>
      <div className={styles.explanations}>
        <span>Пояснення <sup style={{ color: 'red' }}>*</sup></span>
        <textarea className={styles.textarea} />
        <span>Рішення <sup style={{ color: 'red' }}>*</sup></span>
      </div>
      <label htmlFor="fileLoad" className={styles.buttonGlobal}>
        <span className={styles.smallTextGlobal}>Завантажити файл</span>
        <input id="fileLoad" type="file" />
      </label>
      <span className={styles.smallGrayTextGlobal}>Максимум 100 файлів, не більше 49 МВ кожен.</span>
      <div className={styles.buttons}>
        <button type="button" className={styles.buttonMainGlobal}>Зберегти</button>
        <button type="button" className={styles.linkGlobal}>Повернутися назад</button>
      </div>
    </div>
  </>
);

export default CancelConfirm;

import React, { useState } from 'react';
import WarningPrompt from '../../../shared/Warnings/WarningPrompt/WarningPrompt';
import Popup from '../../../shared/Popup/Popup';
import styles from './SignBlock.scss';

const SignBlock = () => {
  const [openPopup, isOpenPopup] = useState(false);
  return (
    <>
      {openPopup && (
        <Popup isOpenPopup={isOpenPopup}>
          <div>hello</div>
        </Popup>
      )}
      <div>
        <div className={styles.signBlockHeader}>
          <h4 className={styles.middleTitleGlobal}>сом</h4>
          <span className={styles.linkGlobal}>Сховати блок з підписом</span>
        </div>
        <div className={styles.csk}>
          <span className={styles.normalBoldTextGlobal}>
            Оберіть ЦСК:
          </span>
          <select name="Test CSK" id="CSK">
            <option value="CSK1">Тестовий CSK</option>
            <option value="CSK2">API</option>
          </select>
        </div>
        <WarningPrompt value="Оберіть файл з особистим ключем (зазвичай з ім'ям Key-6.dat) та вкажіть пароль захисту" />
        <span className={styles.smallBoldTextGlobal}>
          Приватний ключ:
        </span>
        <div className={styles.privat}>
          <input type="text" className={styles.inputGlobal} />
          <label htmlFor="privetKey" className={styles.buttonGlobal}>
            Завантажити ключ
            <input type="file" id="privetKey" className={styles.input} />
          </label>
        </div>
        <span className={styles.smallBoldTextGlobal}>
          Приватний ключ:
        </span>
        <div className={styles.password}>
          <input type="text" className={styles.inputGlobal} />
          <label htmlFor="key" className={styles.buttonGlobal}>
            Завантажити ключ
            <input className={styles.input} type="file" id="key" />
          </label>
          <button
            type="button"
            className={styles.buttonGlobal}
            onClick={() => isOpenPopup(true)}
          >
            Підписати
          </button>
        </div>
      </div>
    </>
  );
};

export default SignBlock;

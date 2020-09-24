import React, { useState } from 'react';
import Popup from '../../../shared/Popup/Popup';
import styles from './Filters.scss';
import { data } from './data';

const Text = 'Назва предмету закупівлі, id або номер договору';
const Filter = () => {
  const [openPopup, isOpenPopup] = useState(false);
  console.log(data);
  return (
    <div className={styles.blockOut}>
      {openPopup && (
        <Popup isOpenPopup={isOpenPopup}>
          <div className={styles.popupHeader}>
            <h3>Класифікатор ДК 021:2015 </h3>
          </div>
          <div className={styles.treeContainer}>
            <p>Our tree</p>
          </div>
        </Popup>
      )}
      <form className={styles.searchBlock}>
        <div className={styles.inputBlock}>
          <div className={styles.searchInputButton}>
            <input className={styles.search} type={Text} placeholder={Text} />
            <button type="button" className={styles.searchButton}>Пошук</button>
          </div>
          <div className={styles.infoButtons}>
            <div className={styles.leftButtons}>
              <button type="button">Статус</button>
              <button type="button">Регіон</button>
              <button type="button" onClick={() => isOpenPopup(true)}>ДК 021:2015</button>
              <button type="button">ДКПП</button>
              <button type="button">Сума контракту</button>
              <button type="button">Замовник</button>
            </div>
            <button type="button">Ще фільтри</button>
          </div>
          <input type="reset" value=" Скинути фільтри " />
        </div>
      </form>
    </div>
  );
};

export default Filter;

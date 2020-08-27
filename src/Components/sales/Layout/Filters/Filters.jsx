import React from 'react';
import styles from './Filters.scss';

const Text = 'Название товара, услуги, организатор или ЕГРПОУ компании, номер закупки';
const Filter = () => (
  <div className={styles.blockOut}>
    <form className={styles.searchBlock}>
      <div className={styles.inputBlock}>
        <div className={styles.searchInputButton}>
          <input className={styles.search} type={Text} placeholder={Text} />
          <button type="button" className={styles.searchButton}>Поиск</button>
        </div>
        <div className={styles.infoButtons}>
          <div className={styles.leftButtons}>
            <button type="button">Статус</button>
            <button type="button">Регион</button>
            <button type="button">ДК 021:2015</button>
            <button type="button">ДКПП</button>
            <button type="button">Ожидаемая стоимость</button>
            <button type="button">Закупщик</button>
          </div>
          <button type="button">Еще фильтры</button>
        </div>
        <input type="reset" value="Сбросить фильтры" />
      </div>
    </form>
    <h1 className={styles.title}>Государственные закупки</h1>
  </div>
);

export default Filter;

import React from 'react';
import styles from './NonePrice.scss';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import WarningAttention from '../../../shared/Warnings/WarningAttention/WarningAttention';

const NonePrice = () => (
  <>
    <BlockForm>
      <div className={styles.nameNonePrice}>
        <p><span className={styles.redStar}>*</span>Назва нецінового критерія</p>
        <input type="text" className={styles.inputGlobal} />
      </div>
      <div className={styles.descriptionNonePrice}>
        <p><span className={styles.redStar}>*</span>Опис нецінового критерія</p>
        <input type="text" className={styles.inputGlobal} />
      </div>
      <div className={styles.weightNonePrice}>
        <p><span className={styles.redStar}>*</span>Вага нецінового критерія</p>
        <div className={styles.weightBlock}>
          <span>0</span>
          <WarningAttention value="Загальна вага всіх нецінових критеріїв однієї пропозиції не може перевищувати 30" />
        </div>
      </div>
    </BlockForm>
  </>
);

export default NonePrice;

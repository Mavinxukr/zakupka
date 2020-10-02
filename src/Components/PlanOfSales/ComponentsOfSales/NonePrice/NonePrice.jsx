import React from 'react';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import WarningAttention from '../../../shared/Warnings/WarningAttention/WarningAttention';
import IconDelete from '../../../../static/svg/delete.svg';
import styles from './NonePrice.scss';

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
          <span className={styles.smallBoldTextGlobal}>0</span>
          <WarningAttention value="Загальна вага всіх нецінових критеріїв однієї пропозиції не може перевищувати 30" />
          <div className={styles.calculation}>
            <span className={styles.text}>Опція:</span>
            <input type="text" className={styles.inputGlobal} />
            <span className={styles.text}>Вага опції:</span>
            <input type="text" className={styles.inputGlobal} />
            <span className={styles.icon}><IconDelete className={styles.iconGlobal} /></span>
          </div>
          <button type="button" className={styles.linkGlobal}>Додати опцію</button>
        </div>
      </div>
    </BlockForm>
  </>
);

export default NonePrice;

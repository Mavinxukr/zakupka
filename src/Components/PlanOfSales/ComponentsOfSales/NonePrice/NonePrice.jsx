import React, { useState } from 'react';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import WarningAttention from '../../../shared/Warnings/WarningAttention/WarningAttention';
import Calculation from '../Calculation/Calculation';
import styles from './NonePrice.scss';

const NonePrice = () => {
  const [addBlock, isAddBlock] = useState(false);
  return (
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
          <div>
            <span className={styles.smallBoldTextGlobal}>0</span>
            <WarningAttention value="Загальна вага всіх нецінових критеріїв однієї пропозиції не може перевищувати 30">
              <div className={styles.circle}>!</div>
            </WarningAttention>
            <Calculation />
            {addBlock && (
              <Calculation />
            )}
            <button
              type="button"
              className={styles.linkGlobal}
              onClick={() => isAddBlock(true)}
            >Додати опцію
            </button>
          </div>
        </div>
      </BlockForm>
    </>

  );
};

export default NonePrice;

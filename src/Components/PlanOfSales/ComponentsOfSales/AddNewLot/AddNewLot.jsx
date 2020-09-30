import React from 'react';
import IconCopy from '../../../../static/svg/copy.svg';
import IconAddFile from '../../../../static/svg/add-file.svg';
import styles from './AddNewLot.scss';
import BlockForm from '../../../shared/BlockForm/BlockForm';

const AddNewLot = () => (
  <>
    <BlockForm className={styles.whiteBlock}>
      <div className={styles.addContainer}>
        <div className={styles.dashed}>
          <span><IconAddFile className={styles.icon} />Додати новій лот</span>
        </div>
        <div className={styles.dashed}>
          <span><IconCopy className={styles.icon} />Копіювати лот</span>
        </div>
      </div>
    </BlockForm>
    <BlockForm className={styles.buttons}>
      <button type="button" className={styles.buttonMainGlobal}>Опубліковати закупівлю</button>
      <button type="button" className={styles.buttonGlobal}>Зберегти чернетку</button>
    </BlockForm>
  </>
);

export default AddNewLot;

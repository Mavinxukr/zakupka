import React from 'react';
import styles from '../../Layout/Layout.scss';
import BlockForm from '../../../shared/BlockForm/BlockForm';

const ButtonsConfirm = () => (
  <BlockForm>
    <button type="button" className={styles.buttonMainGlobal}>Оголосоти закупівлю</button>
    <button type="button" className={styles.buttonGlobal}>Зберегти чернетку</button>
  </BlockForm>
);

export default ButtonsConfirm;

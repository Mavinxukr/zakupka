import React from 'react';
import { Field } from 'formik';
import cx from 'classnames';
import styles from './list-items.scss';
import BlockForm from '../shared/BlockForm/BlockForm';

const ListItems = () => (
  <BlockForm>
    <h2 className={styles.middleTitleGlobal}>Список товарів та послуг, що закуповуються
    </h2>
    <div className={styles.gridWidthGlobal}>
      <p><span className={styles.redStar}>*</span>Конерктна назва предмета закупівлі</p>
      <Field
        type="input"
        className={styles.inputGlobal}
      />
      <Field
        type="input"
        className={cx(styles.inputGlobal, styles.amount)}
      />
    </div>
  </BlockForm>
);

export default ListItems;

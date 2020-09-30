import React from 'react';
import { Field } from 'formik';
import cx from 'classnames';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import styles from './ItemList.scss';

const ItemList = () => (
  <>
    <BlockForm>
      <h4 className={styles.title}>Список лотів: товарів, робіт та послуг у них</h4>
      <div className={styles.lotName}>
        <p><span className={styles.redStar}>*</span>Назва лоту</p>
        <Field
          className={styles.textarea}
          name="lotName"
          component="textarea"
          placeholder="Назва лоту"
        />
      </div>
      <div className={styles.lotDescriptor}>
        <p>Примітки до лоту</p>
        <Field
          className={styles.textarea}
          name="lotDescriptor"
          component="textarea"
          placeholder="Примітки до лоту"
        />
      </div>
      <div className={styles.lotName}>
        <p><span className={styles.redStar}>*</span>Очікувана вартість лота</p>
        <input
          type="text"
          className={cx(styles.input, styles.uah)}
        />
      </div>
      <div className={styles.lotWait}><span className={styles.redStar}>*</span>Крок зниження ставки в аукціоні</div>
      <div className={styles.lotStepAuction}>
        <p>Забезпечення тендерних пропозицій</p>
      </div>
      <div className={styles.support}>
        <p>Документація</p>
      </div>
    </BlockForm>
  </>
);

export default ItemList;

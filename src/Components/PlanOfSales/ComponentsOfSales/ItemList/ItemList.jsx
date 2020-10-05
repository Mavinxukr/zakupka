import React from 'react';
import { Field } from 'formik';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
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
        <label htmlFor="uah" className={cx(styles.uah, styles.flexContainer)}>
          <input
            id="uah"
            type="text"
            className={styles.input}
          />
          <span className={styles.smallGrayTextGlobal}>Якщо бюджет закупівлі, включно з лотами, менше 200 000 грн - використовуйте тип процедури: допорогова закупівля</span>
        </label>
      </div>
      <div className={styles.lotWait}>
        <p><span className={styles.redStar}>*</span>Крок зниження ставки в аукціоні</p>

        <label htmlFor="uah" className={styles.uah}>
          <input
            id="uah"
            type="text"
            className={styles.input}
          />
        </label>
        <label htmlFor="percent" className={styles.percent}>
          <input
            id="percent"
            type="text"
            className={cx(styles.input, styles.inputU)}
            placeholder="У%"
          />
        </label>
      </div>
      <div className={styles.lotStepAuction}>
        <p>Забезпечення тендерних пропозицій</p>
        <BlockForm>
          {/* eslint-disable */}
          <div className={styles.lotRadio}>
            <label>
              <Field type="radio" name="supportNot" value="One" />
              <span>Забезпечення не передбачено</span>
            </label>
            <label>
              <Field type="radio" name="supportNot" value="Two" />
              <span>Присутнє забезпечення закупівлі</span>
            </label>
            {/* eslint-enable */}
            <NavLink
              to="/"
              exact
              className={styles.linkGlobal}
            >
              Детальніше про забезпечення
            </NavLink>
          </div>
        </BlockForm>
      </div>
      <div className={styles.support}>
        <p>Документація</p>
        <div className={styles.flexContainer}>
          <label htmlFor="downloadMore" className={styles.buttonGlobal}>
            Завантажити документ
            <input type="file" id="downloadMore" className={styles.buttonDownload} />
          </label>
          <span className={styles.smallGrayTextGlobal}>Максимум 100 файлів, не більше 49 MB кожен.</span>
        </div>
      </div>
    </BlockForm>
  </>
);

export default ItemList;

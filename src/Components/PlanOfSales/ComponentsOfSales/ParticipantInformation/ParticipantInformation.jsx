import React from 'react';
import { Field } from 'formik';
import styles from './ParticipantInformation.scss';
import BlockForm from '../../../shared/BlockForm/BlockForm';

const ParticipantInformation = () => (
  <>
    <BlockForm>
      <h4 className={styles.title}>Інформація про учасника переговорів</h4>
      <div className={styles.code}>
        <p><span className={styles.redStar}>*</span>Код ЄДРПОУ</p>
        <div className={styles.flexContainer}>
          <input type="text" className={styles.input} />
          <span className={styles.smallGrayTextGlobal}>Введіть код ЄДРПОУ і ми заповнимо інші поля</span>
        </div>
      </div>
      <div className={styles.classifier}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Класифікація суб'єктів господарювання</p>
        <Field as="select" name="classifier" id="role">
          <option value="classifier">--не можу вибрати --</option>
          <option value="classifier">API</option>
          <option value="classifier">API</option>
          <option value="classifier">API</option>
        </Field>
      </div>
      <div className={styles.companyName}>
        <p><span className={styles.redStar}>*</span>Назва компанії</p>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.postIndex}>
        <p><span className={styles.redStar}>*</span>Поштовий індекс</p>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.country}>
        <p><span className={styles.redStar}>*</span>Країна</p>
        <Field as="select" name="country" id="role">
          <option value="country1">--Оберіть країну--</option>
          <option value="country2">API</option>
          <option value="country3">API</option>
          <option value="country4">API</option>
        </Field>
      </div>
      <div className={styles.region}>
        <p><span className={styles.redStar}>*</span>Область</p>
        <Field as="select" name="region" id="role">
          <option value="region1">-- Оберіть область --</option>
          <option value="region2">API</option>
          <option value="region3">API</option>
          <option value="region4">API</option>
        </Field>
      </div>
      <div className={styles.locality}>
        <p><span className={styles.redStar}>*</span>Населений пункт</p>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.street}>
        <p><span className={styles.redStar}>*</span>Вулиця та номер будинку</p>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.checkboxBlock}>
        <p><span className={styles.redStar}>*</span>
          <label htmlFor="checkboxBlock">
            <input type="checkbox" id="checkboxBlock" /> Так, введена коректна інформація про учасника переговорів
          </label>
        </p>
      </div>
      <div className={styles.price}>
        <p><span className={styles.redStar}>*</span>Ціна угоди</p>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.currency}>
        <p><span className={styles.redStar}>*</span>Валюта</p>
        <div className={styles.flexContainer}>
          <Field as="select" name="type" id="currencyField">
            <option value="currency1">гривня (UAH)</option>
            <option value="currency2">американський долар (USD)</option>
            <option value="currency3">євро (EUR)</option>
            <option value="currency4">російський рубль (RUB)</option>
            <option value="currency5">англійський фунт стерлингв (GBP)</option>
          </Field>
          <label htmlFor="currency">
            <input type="checkbox" id="currency" />
            <span className={styles.pdv}>з ПДВ</span>
          </label>
        </div>
      </div>
      <div className={styles.fullName}>
        <p><span className={styles.redStar}>*</span>ПІБ</p>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.phone}>
        <p><span className={styles.redStar}>*</span>Телефон</p>
        <div className={styles.flexContainer}>
          <input type="text" className={styles.input} />
          <span className={styles.smallGrayTextGlobal}>Формать поля: +38039123456789</span>
        </div>
      </div>
      <div className={styles.information}>
        <p>Інформація про субпідрядника</p>
        <Field className={styles.textarea} name="information" component="textarea" />
      </div>
      <div className={styles.responsibility}>
        <span>Відповідність кваліфікаційним вимогам</span>
        <label htmlFor="responsibility">
          <input type="checkbox" id="responsibility" />
          <span className={styles.pdv}>Підтверджую відповідність кваліфікаційним вимогам, встановленим замовником у тендерній документац </span>
        </label>
      </div>
      <button type="button" className={styles.buttonMainGlobal}>Додати постачальника</button>
    </BlockForm>
  </>
);

export default ParticipantInformation;

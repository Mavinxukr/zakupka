import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import InputFormik from '../../../../UI-Kit/InputFormik/InputFormik';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import styles from '../../Layout/Layout.scss';

const Products = ({ startDate, isStartDate, formik }) => (
  <>
    <BlockForm>
      <p className={styles.title}>Товари</p>
      <div className={styles.specificName}>
        <p><span className={styles.redStar}>*</span>Узагальнена назва предмета закупівлі</p>
        <div className={styles.containerQuantity}>
          <Field className={styles.textarea} name="name" component="textarea" />
          {formik.errors.name && formik.touched.name && (
          <p className={styles.error}>{formik.errors.name}</p>
          )}
          <div className={styles.quantity}>
            <InputFormik
              formikProps={{
                ...formik,
                name: 'nameThing',
                type: 'number',
              }}
            />
            <Field as="select" name="role" id="role">
              <option value="1">гривня (UAH)</option>
              <option value="2">американський долар (USD)</option>
              <option value="3">євро (EUR)</option>
              <option value="4">російський рубль (RUB)</option>
              <option value="5">англійський фунт стерлінгів (GBP)</option>
            </Field>
          </div>
        </div>
      </div>
      <div className={styles.containerClassifier}>
        <p><span className={styles.redStar}>*</span>Класифікатори</p>
        <div className={styles.classifier}>
          <button type="button" className={styles.buttonGlobal}>ДК 021:2015</button>
          <button type="button" className={styles.buttonGlobal}>інші ДК</button>
        </div>
      </div>
      <div className={styles.containerGetDate}>
        <div className={styles.other}>
          <p><span className={styles.redStar}>*</span>Строк поставки/виконання робіт/надання послуг</p>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <Field type="checkbox" name="toggle" className={styles.toggle} />
            <span className={styles.mLeft}>Інші умови постачання</span>
          </label>
          <p className={styles.textLow}>Наприклад, постачання на декілька адрес</p>
        </div>
        <div className={styles.getData}>
          <TextField
            id="date"
            type="datetime-local"
            defaultValue={startDate}
            onChange={() => isStartDate(document.querySelector('#date').value)}
          />
          {formik.errors.firstName && formik.touched.firstName && (
          <p>Введіть дату</p>
          )}
          <span>до</span>
          <TextField
            id="date"
            type="datetime-local"
            defaultValue={startDate}
            onChange={() => isStartDate(document.querySelector('#date').value)}
          />
        </div>
      </div>
      <div className={styles.containerStreet}>
        <p><span className={styles.redStar}>*</span>Вулиця та номер будинку</p>
        <InputFormik
          formikProps={{
            ...formik,
            name: 'street',
            type: 'text',
            placeholder: 'Почніть вводити вулицю',
          }}
        />
        {formik.errors.firstName && formik.touched.firstName && (
        <p>Введіть вулицю та номер будинку</p>
        )}
      </div>
      <div className={styles.containerLocation}>
        <p><span className={styles.redStar}>*</span>Населений пункт</p>
        <InputFormik
          formikProps={{
            ...formik,
            name: 'settlement',
            type: 'text',
          }}
        />
      </div>
      <div className={styles.containerPopulation}>
        <p><span className={styles.redStar}>*</span>Країна</p>
        <Field as="select" name="role" id="role">
          <option value="y1">Україна</option>
          <option value="y2">американський долар (USD)</option>
          <option value="y3">євро (EUR)</option>
          <option value="y4">російський рубль (RUB)</option>
          <option value="y5">англійський фунт стерлінгів (GBP)</option>
        </Field>
      </div>
      <div className={styles.containerCountry}>
        <p><span className={styles.redStar}>*</span>Область</p>
        <Field as="select" name="role" id="role">
          <option value="w1">--Оберіть область--</option>
          <option value="w2">американський долар (USD)</option>
          <option value="w3">євро (EUR)</option>
          <option value="w4">російський рубль (RUB)</option>
          <option value="w5">англійський фунт стерлінгів (GBP)</option>
        </Field>
      </div>
      <div className={styles.containerIndex}>
        <p><span className={styles.redStar}>*</span>Поштовий індекс</p>
        <InputFormik
          formikProps={{
            ...formik,
            name: 'index',
            type: 'text',
          }}
        />
      </div>
      <div>
        <button type="button" className={styles.buttonGlobal}>Додати позицію</button>
        <button type="button" className={styles.buttonGlobal}>Копіювати позицію</button>
      </div>
    </BlockForm>
  </>
);

Products.propTypes = {
  startDate: PropTypes.object,
  formik: PropTypes.object,
  isStartDate: PropTypes.func,
};

export default Products;

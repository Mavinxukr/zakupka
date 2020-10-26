// Спрощена/допорогова закупівля

import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import cx from 'classnames';
import InputFormik from '../../../UI-Kit/InputFormik/InputFormik';
import BlockForm from '../../shared/BlockForm/BlockForm';
import styles from './PreliminaryPurchaseComponent.scss';

const PreliminaryPurchaseComponent = () => {
  const [startDate, isStartDate] = useState('');
  const onSubmit = (values) => console.log(values);

  console.log(startDate);

  return (
    <>
      <div className={styles.container}>
        <h1>Спрощена/допорогова закупівля</h1>
        <Formik
          initialValues={{ }}
          validationSchema={Yup.object({
            step: Yup.string()
              .required('Введіть крок зниження ставки'),
            if: Yup.string()
              .required('Введіть вартість закупівлі'),
            conditionOne: Yup.string()
              .required('Введіть період'),
            conditionTwo: Yup.string()
              .required('Введіть розмір оплати'),
            name: Yup.string()
              .required('Укажіть назву закупівлі'),
            commonName: Yup.string()
              .required('Введіть назву предмета закупівлі'),
            street: Yup.string()
              .required('Оберіть вулицю'),
            settlement: Yup.string()
              .required('Оберіть населений пункт'),
            country: Yup.string()
              .required('Оберіть країну'),
            region: Yup.string()
              .required('Оберіть область'),
            index: Yup.string()
              .required('Оберіть поштовий індекс'),
            justification: Yup.string()
              .required('Заповніть обґрунтування'),
          })}
          onSubmit={(values) => onSubmit(values)}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <BlockForm>
                {/* eslint-disable */}
                <div className={styles.containerSales}>
                  <label>
                    <Field type="radio" name="picked" value="One" />
                    <span>Допорогова закупівля (згідно Наказу ДП "Прозорро" №10)</span>
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Two" />
                    <span>Спрощена закупівля (згідно статті 14 Закону України "Про публічні закупівлі")</span>
                  </label>
                  {/* eslint-enable */}
                </div>
              </BlockForm>
              <BlockForm>
                <InputFormik
                  classNameWrapperr={styles.typeSales}
                  classNameWrapperrLabel={styles.labelInput}
                  formikProps={{
                    ...formik,
                    name: 'Ident',
                    label: 'Ідентифікатор плану закупівлі',
                    type: 'text',
                    placeholder: '',
                  }}
                />
              </BlockForm>
              <BlockForm>
                <p>
                  <span className={styles.redStar}>*</span>
                  Вид предмета закупівлі
                </p>
                <Field as="select" name="type" id="role" className={styles.typeSales}>
                  <option value="type1">-- можна вибрати --</option>
                  <option value="type2">товари</option>
                  <option value="type3">послуги</option>
                  <option value="type4">роботи</option>
                </Field>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Контактні дані</h4>
                <div className={styles.sectionContacts}>
                  <p>
                    <span className={styles.redStar}>*</span>
                    Основний контакт
                  </p>
                  <div>
                    <div className={styles.containerContacts}>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'contact',
                          type: 'text',
                          disabled: true,
                        }}
                      />
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'phone',
                          type: 'text',
                          placeholder: '+380998877766',
                          disabled: true,
                        }}
                      />
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'email',
                          type: 'email',
                          placeholder: 'test1888@test.com',
                          disabled: true,
                        }}
                      />
                    </div>
                    <a className={styles.link} href="/">Додати новий основний контакт</a>
                    {formik.errors.contact && formik.touched.contact && (
                      <p className={styles.error}>{formik.errors.contact}</p>
                    )}
                  </div>
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Інформація про закупівлю</h4>
                <div className={styles.conduct}>
                  <p><span className={styles.redStar}>*</span>Підстави проведення переговорної процедури</p>
                  <Field as="select" name="role" id="role">
                    <option value="1">--Оберіть обґрунтування--</option>
                    <option value="2">обґрунтування 1</option>
                    <option value="3">обґрунтування 2</option>
                    <option value="4">обґрунтування 3</option>
                    <option value="5">обґрунтування 4</option>
                  </Field>
                </div>
                <div className={styles.justification}>
                  <p><span className={styles.redStar}>*</span>Обґрунтування</p>
                  <Field className={cx(styles.textarea, styles.justificationArea)} name="justification" component="textarea" />
                  <div>{formik.errors.justification && formik.touched.justification && (
                    <p className={styles.error}>{formik.errors.justification}</p>
                  )}
                  </div>
                  <span className={styles.smallGrayTextGlobal}>Залишилось: 15000 символа(ів)</span>
                </div>
                <div className={styles.commonName}>
                  <p><span className={styles.redStar}>*</span>Узагальнена назва закупівлі</p>
                  <Field className={styles.textarea} name="commonName" component="textarea" />
                  {formik.errors.commonName && formik.touched.commonName && (
                    <p className={styles.error}>{formik.errors.commonName}</p>
                  )}
                  <button type="button" className={cx(styles.buttonMainGlobal, styles.excel)}>Імпорт спеціфікацій з Excel</button>
                </div>
                <div className={styles.notes}>
                  <p>Примітки</p>
                  <Field className={styles.textarea} name="color5" component="textarea" />
                </div>
                <div className={styles.containerDocument}>
                  <p>Документація до закупівлі</p>
                  <div className={styles.documents}>
                    <input type="file" name="file" />
                    <p className={styles.textLow}>
                      Максимум 100 файлів, не більше 49 MB кожен.
                    </p>
                  </div>
                </div>
                <div className={styles.containerExpectedCost}><p><span className={styles.redStar}>*</span>Очікування вартості закупівлі</p>
                  <div className={styles.expectedCost}>
                    <InputFormik
                      formikProps={{
                        ...formik,
                        name: 'if',
                        type: 'number',
                      }}
                    />
                    <p className={styles.textLow}>
                      Якщо бюджет закупівлі, включно з лотами, менше 200 000 грн - використовуйте тип процедури:
                      допорогова закупівля
                    </p>
                    {/* eslint-disable */}
                    <label>
                      <Field type="checkbox" name="toggle"/>
                      <span className={styles.mLeft}>Очікувана вартість з ПДВ</span>
                    </label>
                    {/* eslint-enable */}
                  </div>
                </div>
                <div className={styles.currency}>
                  <p>Валюта</p>
                  <Field as="select" name="role" id="role">
                    <option value="1">гривня (UAH)</option>
                    <option value="2">американський долар (USD)</option>
                    <option value="3">євро (EUR)</option>
                    <option value="4">російський рубль (RUB)</option>
                    <option value="5">англійський фунт стерлінгів (GBP)</option>
                  </Field>
                </div>
                <div className={styles.stepLess}>
                  <p><span className={styles.redStar}>*</span>Крок зниження ставки в аукціоні</p>
                  <div className={styles.sumInput}>
                    <InputFormik
                      formikProps={{
                        ...formik,
                        name: 'step',
                        type: 'number',
                      }}
                    />

                    <p className={styles.textLow}>
                      від 0.5 до 3 відсотків від очікуваної вартості закупівлі
                    </p>
                  </div>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'percent',
                      type: 'number',
                      placeholder: 'У %',
                    }}
                  />
                </div>
                <div className={styles.containerSupplyProposition}>
                  <p>Забезпечення тендерних пропозицій</p>
                  <div className={styles.supplyProposition}>
                    <div className={styles.labesSupply}>
                      {/* eslint-disable */}
                      <label>
                        <Field type="radio" name="picked1" value="One"/>
                        <span className={styles.label}>Забезпечення не передбачено</span>
                      </label>
                      <label>
                        <Field type="radio" name="picked1" value="Two"/>
                        <span className={styles.label}>Присутнє забезпечення</span>
                      </label>
                      {/* eslint-enable */}
                      {formik.values.picked1 === 'Two' && (
                        <>
                          <InputFormik
                            formikProps={{
                              ...formik,
                              name: 'just',
                              type: 'number',
                              label: 'Сума',
                              value: '0',
                            }}
                          />
                          <Field as="select" name="role" id="role">
                            <option value="1">гривня (UAH)</option>
                            <option value="2">американський долар (USD)</option>
                            <option value="3">євро (EUR)</option>
                            <option value="4">російський рубль (RUB)</option>
                            <option value="5">англійський фунт стерлінгів (GBP)</option>
                          </Field>
                        </>
                      )}
                    </div>
                    <a className={styles.link} href="/">Детальніше про забезпечення</a>
                  </div>
                </div>
                <div className={styles.dataFinish}><p><span className={styles.redStar}>*</span>Завершення періоду уточнень</p>
                  <TextField
                    name="startProposition"
                    id="date1"
                    type="datetime-local"
                    defaultValue={startDate}
                    onChange={() => isStartDate(document.querySelector('#date').value)}
                  />
                </div>
                <div className={styles.containerGetDate}>
                  <p><span className={styles.redStar}>*</span>Прийом пропозицій</p>
                  <div className={styles.getData}>
                    <TextField
                      id="date2"
                      type="datetime-local"
                      defaultValue={startDate}
                      onChange={() => isStartDate(document.querySelector('#date').value)}
                    />
                    <span>до</span>
                    <TextField
                      id="date3"
                      type="datetime-local"
                      defaultValue={startDate}
                      onChange={() => isStartDate(document.querySelector('#date').value)}
                    />
                  </div>
                </div>
              </BlockForm>
              <BlockForm>
                <div className={styles.containerGrid}>
                  <p className={styles.title}>Нецінові критерії закупівлі</p>
                  <a href="/" className={styles.link}>Детальніше про нецінові критерії</a>
                  <a href="/" className={styles.add}>+ Додати неціновий критерій</a>
                </div>
              </BlockForm>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PreliminaryPurchaseComponent;

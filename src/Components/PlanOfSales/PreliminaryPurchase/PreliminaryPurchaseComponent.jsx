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
                  <div className={styles.flexColumnGlobal}>
                    <label htmlFor="downloadButton" className={cx(styles.downloadFirst, styles.buttonGlobal)}>
                      Завантажити документ
                      <input type="file" id="downloadButton" />
                    </label>
                    <p className={cx(styles.textLow, styles.mt)}>
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
                  <a href="/" className={styles.add}>+ Додати неціновий критерій</a>
                </div>
              </BlockForm>
              <BlockForm>
                <p className={styles.title}>Умови оплати</p>
                <div className={styles.containerTermsPayment}>
                  <div className={styles.rowTerms}>
                    <div className={styles.termsPayment}>
                      <p><span className={styles.redStar}>*</span>Оплата після події</p>
                      <Field as="select" name="terms" id="role">
                        <option value="ter1">---</option>
                        <option value="ter2">поставка товару</option>
                        <option value="ter3">надання послуг</option>
                        <option value="ter4">дата виставлення рахунку</option>
                        <option value="ter5">дата закінчення звітного періоду</option>
                        <option value="ter6">дата подання заявки</option>
                        <option value="ter7">інша подія</option>
                        <option value="ter8">підписання договору</option>

                      </Field>
                    </div>
                    <div className={styles.termsType}>
                      <p><span className={styles.redStar}>*</span>Тип оплати</p>
                      <Field as="select" name="typeSales" id="role">
                        <option value="sal1">---</option>
                        <option value="sal2">післяоплата</option>
                        <option value="sal3">аванс</option>
                      </Field>
                    </div>
                    <div className={styles.termsPeriod}>
                      <p><span className={styles.redStar}>*</span>Період (днів)</p>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'conditionOne',
                          type: 'number',
                        }}
                      />
                    </div>
                    <div className={styles.termsTypeDays}>
                      <p><span className={styles.redStar}>*</span>Тип днів</p>
                      <Field as="select" name="condition" id="role">
                        <option value="days1">---</option>
                        <option value="days2">банківські</option>
                        <option value="days3">календарні</option>
                        <option value="days4">робочі</option>
                      </Field>
                    </div>
                    <div>
                      <p><span className={styles.redStar}>*</span>Розмір оплати, %</p>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'conditionTwo',
                          type: 'number',
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.rowTermsFooter}>
                    <p>Опис</p>
                    <Field className={styles.textarea} name="color8" component="textarea" placeholder="" />
                  </div>
                </div>
                <div className={styles.containerGrid}>
                  <a href="/" className={styles.add}>Видалити умову оплати</a>
                  <a href="/" className={styles.link}>+ Додати умови оплати</a>
                </div>
                {formik.errors.conditionOne && formik.touched.conditionOne && (
                <p className={styles.error}>{formik.errors.conditionOne}</p>
                )}
                {formik.errors.conditionTwo && formik.touched.conditionTwo && (
                <p className={styles.error}>{formik.errors.conditionTwo}</p>
                )}
              </BlockForm>
              <BlockForm>
                <p className={styles.title}>Товари,роботи та послуги</p>
                <div className={styles.specificName}>
                  <p><span className={styles.redStar}>*</span>Конкретна назва предмета закупівлі</p>
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
                          placeholder: 'Кількість',
                        }}
                      />
                      <Field as="select" name="role" id="role">
                        <option value="1">Одиниці виміру</option>
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
              <button type="button" className={cx(styles.buttonMainGlobal, styles.buttonSubmit)}> Оголосити закупівлю</button>
            </form>
          )}
        </Formik>
        <b>Конец блока Срощена/допорогова закупівля</b>
      </div>
    </>
  );
};

export default PreliminaryPurchaseComponent;

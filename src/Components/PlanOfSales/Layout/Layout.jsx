import React, { useState } from 'react';
import { Field, Formik } from 'formik';
// import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import InputFormik from '../../../UI-Kit/InputFormik/InputFormik';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import BlockForm from '../../shared/BlockForm/BlockForm';
import styles from './Layout.scss';

const Layout = () => {
  const [startDate, isStartDate] = useState('');
  const onSubmit = (values) => console.log(values);

  console.log(startDate);

  return (
    <>
      <MenuPurchaser />
      <div className={styles.container}>
        <h1>Нова публічна закупівля</h1>
        <BlockForm>
          <div className={styles.blockCustomerInfo}>
            <h4 className={styles.title}>Інформація про замовника</h4>
            <div className={styles.customerInfo}>
              <p>Name</p>
              <p>3434, Україна, Вінницька область, asdads, aasd</p>
            </div>
          </div>
        </BlockForm>
        <Formik
          initialValues={{ }}
          onSubmit={(values) => onSubmit(values)}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <BlockForm>
                <h4 className={styles.title}>Тип процедури</h4>
                <div className={styles.containerProcedure}>
                  <p>
                    <span className={styles.redStar}>*</span>
                    Оберіть тип процедури
                  </p>
                  <div className={styles.changeProcedure}>
                    <Field as="select" name="role" id="role">
                      <option value="1">Срощена/допорогова закупівля</option>
                      <option value="2">Відкриті торги</option>
                      <option value="3">Відкриті торги з публікацією англійською мовою</option>
                      <option value="4">Публічні закупівлі енергосервісу</option>
                      <option value="5">Закупівля без використання електронної системи</option>
                      <option value="6">Переговорна процедура</option>
                      <option value="7">Переговорна процедура, скорочена</option>
                      <option value="8">Конкурентний діалог</option>
                      <option value="9">Конкурентний діалог з публікацією англійською мовою</option>
                      <option value="10">Укладення рамкової угоди</option>
                    </Field>
                    {/* eslint-disable */}
                    <label>
                      <Field type="checkbox" name="toggle" className={styles.toggle}/>
                      <span className={styles.mLeft}>Мультилотова закупівля</span>
                    </label>
                    {/* eslint-enable */}
                    <p className={styles.textLow}>
                      Проведення закупівлі за окремими частинами (лотами) в межах єдиної процедури закупівлі
                    </p>
                  </div>
                </div>
              </BlockForm>
              <BlockForm>
                {/* eslint-disable */}
                <div className={styles.containerSales}>
                <label>
                  <Field type="radio" name="picked" value="One" />
                  <span className={styles.label}>Допорогова закупівля (згідно Наказу ДП "Прозорро" №10)</span>
                </label>
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  <span className={styles.label}>Спрощена закупівля (згідно статті 14 Закону України "Про публічні закупівлі")</span>
                </label>
                {/* eslint-enable */}
                </div>
              </BlockForm>
              <BlockForm>
                <InputFormik
                  classNameWrapper={styles.typeSales}
                  classNameWrapperLabel={styles.labelInput}
                  formikProps={{
                    ...formik,
                    name: 'password',
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
                <Field as="select" name="role" id="role" className={styles.typeSales}>
                  <option value="1">-- можна вибрати --</option>
                  <option value="2">товари</option>
                  <option value="3">послуги</option>
                  <option value="4">роботи</option>
                </Field>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Контактні дані</h4>
                <div className={styles.sectionContacts}>
                  <p>
                    <span className={styles.redStar}>*</span>
                    Основний контакт
                  </p>
                  <div className={styles.rightBlockContacts}>
                    <div className={styles.containerContacts}>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'name',
                          type: 'text',
                          placeholder: 'dasdasd',
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
                          name: 'mail',
                          type: 'email',
                          placeholder: 'test1888@test.com',
                          disabled: true,
                        }}
                      />
                    </div>
                    <a className={styles.link} href="/">Додати новий основний контакт</a>
                  </div>
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Інформація про закупівлю</h4>
                <div className={styles.commonName}>
                  <p><span className={styles.redStar}>*</span>Узагальнена назва закупівлі</p>
                  <Field className={styles.textarea} name="color" component="textarea" placeholder="" />
                </div>
                <div className={styles.notes}>
                  <p>Примітки</p>
                  <Field className={styles.textarea} name="color" component="textarea" placeholder="" />
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
                        name: 'name',
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
                        name: 'sumInput',
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
                      name: 'name',
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
                            name: 'name',
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
                    id="date"
                    type="datetime-local"
                    defaultValue={startDate}
                    onChange={() => isStartDate(document.querySelector('#date').value)}
                  />
                </div>
                <div className={styles.containerGetDate}>
                  <p><span className={styles.redStar}>*</span>Прийом пропозицій</p>
                  <div className={styles.getData}>
                    <TextField
                      id="date"
                      type="datetime-local"
                      defaultValue={startDate}
                      onChange={() => isStartDate(document.querySelector('#date').value)}
                    />
                    <span>до</span>
                    <TextField
                      id="date"
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
              <BlockForm>
                <p className={styles.title}>Умови оплати</p>
                <div className={styles.containerTermsPayment}>
                  <div className={styles.rowTerms}>
                    <div className={styles.termsPayment}>
                      <p><span className={styles.redStar}>*</span>Оплата після події</p>
                      <Field as="select" name="role" id="role">
                        <option value="1">---</option>
                        <option value="2">поставка товару</option>
                        <option value="3">надання послуг</option>
                        <option value="4">дата виставлення рахунку</option>
                        <option value="5">дата закінчення звітного періоду</option>
                        <option value="6">дата подання заявки</option>
                        <option value="7">інша подія</option>
                        <option value="8">підписання договору</option>

                      </Field>
                    </div>
                    <div className={styles.termsType}>
                      <p><span className={styles.redStar}>*</span>Тип оплати</p>
                      <Field as="select" name="role" id="role">
                        <option value="1">---</option>
                        <option value="2">післяоплата</option>
                        <option value="3">аванс</option>
                      </Field>
                    </div>
                    <div className={styles.termsPeriod}>
                      <p><span className={styles.redStar}>*</span>Період (днів)</p>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'sumSize',
                          type: 'number',
                        }}
                      />
                    </div>
                    <div className={styles.termsTypeDays}>
                      <p><span className={styles.redStar}>*</span>Тип днів</p>
                      <Field as="select" name="role" id="role">
                        <option value="1">---</option>
                        <option value="2">банківські</option>
                        <option value="3">календарні</option>
                        <option value="4">робочі</option>
                      </Field>
                    </div>
                    <div className={styles.termsSize}>
                      <p><span className={styles.redStar}>*</span>Розмір оплати, %</p>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'Period',
                          type: 'number',
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.rowTermsFooter}>
                    <p>Опис</p>
                    <Field className={styles.textarea} name="color" component="textarea" placeholder="" />
                  </div>
                </div>
                <div className={styles.containerGrid}>
                  <a href="/" className={styles.add}>Видалити умову оплати</a>
                  <a href="/" className={styles.link}>+ Додати умови оплати</a>
                </div>
              </BlockForm>
              <BlockForm>
                <p className={styles.title}>Товари,умови та послуги</p>
                <div className={styles.specificName}>
                  <p><span className={styles.redStar}>*</span>Узагальнена назва предмета закупівлі</p>
                  <div className={styles.containerQuantity}>
                    <Field className={styles.textarea} name="color" component="textarea" placeholder="" />
                    <div className={styles.quantity}>
                      <InputFormik
                        formikProps={{
                          ...formik,
                          name: 'name',
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
                    <button type="button">ДК 021:2015</button>
                    <button type="button">інші ДК</button>
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
                  <p><span className={styles.redStar}>*</span>Строк поставки/виконання робіт/надання послуг</p>
                </div>
                <div className={styles.containerStreet}>
                  <p><span className={styles.redStar}>*</span>Строк поставки/виконання робіт/надання послуг</p>
                </div>
                <div className={styles.containerPopulation}>
                  <p><span className={styles.redStar}>*</span>Строк поставки/виконання робіт/надання послуг</p>
                </div>
                <div className={styles.containerCountry}>
                  <p><span className={styles.redStar}>*</span>Строк поставки/виконання робіт/надання послуг</p>
                </div>
                <div className={styles.containerIndex}>
                  <p><span className={styles.redStar}>*</span>Строк поставки/виконання робіт/надання послуг</p>
                </div>
                <div className={styles.formButtons}>
                  <button type="button">Додати позицію</button>
                  <button type="button">Копіювати позицію</button>
                </div>
              </BlockForm>
              <BlockForm>
                <button type="button" className={styles.buttonMain}>Оголосоти закупывлю</button>
                <button type="button">Заберегти чернету</button>
              </BlockForm>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Layout;

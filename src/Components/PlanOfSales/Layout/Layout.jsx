import React, { useState } from 'react';
import { Field, Formik } from 'formik';
// import * as Yup from 'yup';
import cx from 'classnames';
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
      <div className={styles.container}>
        <MenuPurchaser />
        <h1>Нова публічна закупівля</h1>
        <BlockForm>
          <h4 className={styles.title}>Інформація про замовника</h4>
          <p>Name</p>
          <p>3434, Україна, Вінницька область, asdads, aasd</p>
        </BlockForm>
        <Formik
          initialValues={{ }}
          // validationSchema={Yup.object({
          //   email: Yup.string()
          //     .email('e-mail не валиден')
          //     .required('Вы не ввели e-mail'),
          //   password: Yup.string()
          //     .min(6, 'Пароль короткий - введіть мінімум 6 символів.')
          //     .required('Вы не ввели пароль'),
          // })}
          onSubmit={(values) => onSubmit(values)}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <BlockForm>
                <h4 className={styles.title}>Тип процедури</h4>
                <p>
                  Оберіть тип процедури
                </p>
                <Field as="select" name="role" id="role">
                  <option value="1">Постачальник</option>
                  <option value="2">Замовник</option>
                </Field>
                {/* eslint-disable */}
                <label>
                  <Field type="checkbox" name="toggle" />
                  <span className={styles.label}>Мультилотова закупівля</span>
                </label>
                {/* eslint-enable */}
                <p className={styles.helpM}>
                  Проведення закупівлі за окремими частинами (лотами) в межах єдиної процедури закупівлі
                </p>
              </BlockForm>
              <BlockForm>
                {/* eslint-disable */}
                <label>
                  <Field type="radio" name="picked" value="One" />
                  <span className={styles.label}>Допорогова закупівля (згідно Наказу ДП "Прозорро" №10)</span>
                </label>
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  <span className={styles.label}>Спрощена закупівля (згідно статті 14 Закону України "Про публічні закупівлі")</span>
                </label>
                {/* eslint-enable */}
              </BlockForm>
              <BlockForm>
                <InputFormik
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
                  Вид предмета закупівлі
                </p>
                <Field as="select" name="role" id="role">
                  <option value="1">-- можна вибрати --</option>
                  <option value="2">товари</option>
                  <option value="3">послуги</option>
                  <option value="4">роботи</option>
                </Field>
                <div className={styles.infoBock}>
                  Основним предметом закупівлі є будь-який предмет закупівлі, крім товарів і робіт, зокрема транспортні послуги, освоєння технологій, наукові дослідження, науково-дослідні або дослідно-конструкторські розробки, медичне та побутове обслуговування, лізинг, найм (оренда), а також фінансові та консультаційні послуги, поточний ремонт.
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Контактні дані</h4>
                <p>Основний контакт</p>
                <div className={styles.flex}>
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
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Інформація про закупівлю</h4>
                <p>Узагальнена назва закупівлі</p>
                <Field className={styles.textarea} name="color" component="textarea" placeholder="" />
                <p>Примітки</p>
                <Field className={styles.textarea} name="color" component="textarea" placeholder="" />
                <p>Документація до закупівлі</p>
                <input type="file" name="file" />
                <p className={styles.helpM}>
                  Максимум 100 файлів, не більше 49 MB кожен.
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'name',
                    type: 'number',
                    label: 'Очікувана вартість закупівлі',
                  }}
                />
                <p className={styles.helpM}>
                  Якщо бюджет закупівлі, включно з лотами, менше 200 000 грн - використовуйте тип процедури: допорогова закупівля
                </p>
                {/* eslint-disable */}
                <label>
                  <Field type="checkbox" name="toggle" />
                  <span className={styles.label}>Очікувана вартість з ПДВ</span>
                </label>
                {/* eslint-enable */}
                <p>
                  Валюта
                </p>
                <Field as="select" name="role" id="role">
                  <option value="1">гривня (UAH)</option>
                  <option value="2">американський долар (USD)</option>
                  <option value="3">євро (EUR)</option>
                  <option value="4">російський рубль (RUB)</option>
                  <option value="5">англійський фунт стерлінгів (GBP)</option>
                </Field>
                <div className={cx(styles.flex, styles.flexEnd)}>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'name',
                      type: 'number',
                      label: 'Крок зниження ставки в аукціоні',
                    }}
                  />
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'name',
                      type: 'number',
                      placeholder: 'У %',
                    }}
                  />
                </div>
                <p>Забезпечення тендерних пропозицій</p>
                {/* eslint-disable */}
                <label>
                  <Field type="radio" name="picked1" value="One" />
                  <span className={styles.label}>Забезпечення не передбачено</span>
                </label>
                <label>
                  <Field type="radio" name="picked1" value="Two" />
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
                <a className={styles.link} href="/">Детальніше про забезпечення</a>
                <p>Завершення періоду уточнень</p>
                <TextField
                  id="date"
                  type="datetime-local"
                  defaultValue={startDate}
                  onChange={() => isStartDate(document.querySelector('#date').value)}
                />
              </BlockForm>
              <div className={styles.blockSubmit}>
                <button
                  className={cx(styles.btnSubmit, {
                    [styles.active]: formik.dirty && formik.isValid,
                  })}
                  type="submit"
                >
                  Ввійти
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Layout;

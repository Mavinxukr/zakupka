import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import styles from './Layout.scss';

const Layout = () => {
  const [nameCustomer, newNameCustomer] = useState('');
  const initialValuesGlobal = {
    name: 'Den',
    surname: 'joe',
    role: 1,
    name_customer: nameCustomer,
  };
  const submit = (values) => {
    if (values.role === 2 || values.role === '2') {
      newNameCustomer('заказчик');
    }
  };

  return (
    <Formik
      initialValues={initialValuesGlobal}
      onSubmit={(values) => {
        submit(values);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.containerGlobal}>
            <h1>Змінити дані користувача</h1>
            <p className={styles.middleTitleGlobal}>Ім&apos;я</p>
            <Field
              type="text"
              name="name"
              className={styles.inputGlobal}
              placeholder="Введіть ім'я"
            />

            <p className={styles.middleTitleGlobal}>Прізвище</p>
            <Field
              type="text"
              name="surname"
              className={styles.inputGlobal}
              placeholder="Введіть прізвище"
            />

            <p className={styles.middleTitleGlobal}>Тип користувача</p>
            <Field as="select" name="role" className={styles.inputGlobal}>
              <option value="1" name="name_customer">Постачальник</option>
              <option value="2" name="name_customer">Замовник</option>
            </Field>

            <button type="submit" className={styles.buttonMainGlobal}>Зберегти</button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Layout;

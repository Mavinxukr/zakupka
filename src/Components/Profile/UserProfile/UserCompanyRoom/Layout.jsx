import React from 'react';
import { Field, Formik } from 'formik';
import styles from './Layout.scss';

const Layout = () => (
  <Formik
    initialValues={{
      name: "Ім'я",
      surname: 'Призвіще',
      name_customer: 'Заказчик или пустое поле',
      role: 'Поставщик, заказчик',
    }}
    onSubmit={(values) => console.log(values)}
  >
    {(formik) => (
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.containerGlobal}>
          <h1>Змінити дані користувача</h1>
          <p className={styles.middleTitleGlobal}>Ім&apos;я</p>
          <Field type="text" name="classification_scheme" className={styles.inputGlobal} />

          <p className={styles.middleTitleGlobal}>Прізвище</p>
          <Field type="text" name="classification_scheme" className={styles.inputGlobal} />

          <p className={styles.middleTitleGlobal}>Тип користувача</p>
          <Field type="text" name="classification_scheme" className={styles.inputGlobal} />

          <button type="submit" className={styles.buttonMainGlobal}>Зберегти</button>
        </div>
      </form>
    )}
  </Formik>
);

export default Layout;

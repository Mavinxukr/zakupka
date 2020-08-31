import React from 'react';
import { Formik } from 'formik';
import cx from 'classnames';
import * as Yup from 'yup';
import InputFormik from '../../../UI-Kit/InputFormik/InputFormik';
import styles from './Layout.scss';

const Layout = () => (
  <div className={styles.login}>
    <h2 className={styles.loginTitle}>Реєстрація</h2>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('e-mail не валиден')
          .required('Вы не ввели e-mail'),
        password: Yup.string()
          .required('Вы не ввели пароль'),
      })}
      onSubmit={(values) => console.log('login', values)}
    >
      {(formik) => (
        <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'email',
              label: 'Ваш e-mail',
              type: 'text',
              viewType: 'entry',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <InputFormik
            classNameWrapper={styles.formikWrapper}
            formikProps={{
              ...formik,
              name: 'password',
              label: 'Пароль',
              type: 'password',
              placeholder: '*****',
              viewType: 'entry',
              classNameWrapper: styles.inputWrapper,
            }}
          />
          <button
            className={cx(styles.loginSubmit, {
              [styles.active]: formik.dirty && formik.isValid,
            })}
            type="submit"
          >
            Реєстрація
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Layout;

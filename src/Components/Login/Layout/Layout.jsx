import React from 'react';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import * as Yup from 'yup';
import { registration } from '../../../services/user';
import InputFormik from '../../../UI-Kit/InputFormik/InputFormik';
import styles from './Layout.scss';

const Layout = () => {
  const onSubmit = (values) => {
    registration(
      {},
      values,
    );
  };

  return (
    <div className={styles.loginPage}>
      <h1 className={styles.loginTitle}>Ввійти</h1>
      <Formik
        initialValues={{ role: '1' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('e-mail не валиден')
            .required('Вы не ввели e-mail'),
          password: Yup.string()
            .min(6, 'Пароль короткий - введіть мінімум 6 символів.')
            .required('Вы не ввели пароль'),
        })}
        onSubmit={(values) => onSubmit(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputFormik
              formikProps={{
                ...formik,
                name: 'email',
                label: 'Ваш e-mail',
                type: 'email',
              }}
            />
            <InputFormik
              formikProps={{
                ...formik,
                name: 'password',
                label: 'Пароль',
                type: 'password',
                placeholder: '*****',
              }}
            />
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
            <p>Або <NavLink className={styles.login} to="/registration" exact>Зареєструйтесь</NavLink></p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Layout;

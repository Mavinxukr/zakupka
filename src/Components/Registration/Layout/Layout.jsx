import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import { useHistory, NavLink } from 'react-router-dom';
import cx from 'classnames';
import * as Yup from 'yup';
import { registration } from '../../../services/user';
import InputFormik from '../../../UI-Kit/InputFormik/InputFormik';
import styles from './Layout.scss';

const Layout = () => {
  const [error, setError] = useState(false);
  const history = useHistory();
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const onSubmit = (values) => {
    registration(
      {},
      values,
    )
      .then((response) => {
        if (response.errors) {
          setError(true);
          return;
        }
        history.push('/login');
      });
  };

  return (
    <div className={styles.registration}>
      <h1 className={styles.registrationTitle}>Реєстрація</h1>
      <Formik
        initialValues={{ role: '1' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Заповніть поле'),
          surname: Yup.string()
            .required('Заповніть поле'),
          name_customer: Yup.string()
            .required('Заповніть поле'),
          email: Yup.string()
            .email('e-mail не валиден')
            .required('Вы не ввели e-mail'),
          phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(12, 'Не менше 12 символів')
            .max(12, 'Не більше 12 символів')
            .required('Заповніть поле'),
          password: Yup.string()
            .min(6, 'Пароль короткий - введіть мінімум 6 символів.')
            .required('Вы не ввели пароль'),
          password_confirmation: Yup.string().when('password', {
            is: (val) => (!!(val && val.length > 0)),
            then: Yup.string().oneOf(
              [Yup.ref('password')],
              'Обидва паролі повинні бути однаковими',
            ),
          }),
        })}
        onSubmit={(values) => onSubmit(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputFormik
              formikProps={{
                ...formik,
                name: 'name',
                label: 'Ім\'я',
                type: 'test',
              }}
            />
            <InputFormik
              formikProps={{
                ...formik,
                name: 'surname',
                label: 'Прізвище',
                type: 'test',
              }}
            />
            <InputFormik
              formikProps={{
                ...formik,
                name: 'name_customer',
                label: 'Назва компанії',
                type: 'test',
              }}
            />
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
                name: 'phone',
                label: 'Ваш телефон',
                type: 'test',
              }}
            />
            <p className={styles.label}>Оберіть роль</p>
            <Field as="select" name="role" id="role">
              <option value="1">Постачальник</option>
              <option value="2">Замовник</option>
            </Field>
            <InputFormik
              formikProps={{
                ...formik,
                name: 'password',
                label: 'Пароль',
                type: 'password',
                placeholder: '*****',
              }}
            />
            <InputFormik
              formikProps={{
                ...formik,
                name: 'password_confirmation',
                label: 'Підтвердіть пароль',
                type: 'password',
                placeholder: '*****',
              }}
            />
            {error && (
              <p className={styles.errorText}>Користувач з такими даними вже існує</p>
            )}
            <div className={styles.blockSubmit}>
              <button
                className={cx(styles.btnSubmit, {
                  [styles.active]: formik.dirty && formik.isValid,
                })}
                type="submit"
              >
                Реєстрація
              </button>
            </div>
            <p>Або <NavLink className={styles.login} to="/login" exact>Ввійдіть</NavLink>, якщо у вас вже є профіль</p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Layout;

import React from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
// import { NavLink } from 'react-router-dom';
import InputFormik from '../../UI-Kit/InputFormik/InputFormik';
import IconCog from '../../static/svg/cog-solid.svg';
import IconMail from '../../static/svg/mail.svg';
import styles from './PlanOfSales.scss';

const PlanOfSales = () => {
  const onSubmit = (values) => console.log(values);

  return (
    <div>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li>Бібліотека специфікацій</li>
          <li>Профіль</li>
          <li>Послуги та аналітика</li>
          <li>Контакти</li>
          <li><IconCog className={styles.icon} /></li>
          <li><IconMail className={styles.icon} /><span>0</span></li>
          <li>Prozzoro Market</li>
        </ul>
        <span>Новий план закупівлі</span>
        <Formik
          initialValues={{}}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Заповніть поле'),
            email: Yup.string()
              .email('e-mail не валиден')
              .required('Вы не ввели e-mail'),
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
                  name: 'email',
                  label: 'Ваш e-mail',
                  type: 'email',
                }}
              />
              <Field as="select" name="role" id="role">
                <option value="1">Постачальник</option>
                <option value="2">Замовник</option>
              </Field>
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
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PlanOfSales;

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import InputFormik from '../../../../UI-Kit/InputFormik/InputFormik';
import styles from './Layout.scss';

const Layout = () => {
  const onSubmit = (values) => console.log(values);
  const name = "Ім'я";
  return (
    <Formik
      initialValues={{}}
      validationSchema={Yup.object({
        step: Yup.string()
          .required('Введіть крок зниження ставки'),
        if: Yup.string()
          .required('Введіть вартість закупівлі'),
        conditionOne: Yup.string()
          .required('Введіть період'),
      })}
      onSubmit={(values) => onSubmit(values)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.containerGlobal}>
            <h2 className={styles.middleTitleGlobal}>Користувач кабінету</h2>
            <BlockForm>
              <div className={styles.centerBlock}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>{name}</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={styles.centerBlock}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>{name}</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={styles.centerBlock}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>{name}</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={styles.centerBlock}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>{name}</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={styles.centerBlock}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>{name}</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
            </BlockForm>
            <h2 className={styles.middleTitleGlobal}>Зміна пароля</h2>
            <BlockForm>
              <div className={cx(styles.centerBlock, styles.flexRowGlobal)}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>Поточний пароль</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={cx(styles.centerBlock, styles.flexRowGlobal)}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>Новий пароль</span>
                </p>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <button type="button" className={styles.buttonMainGlobal}>Змінити пароль</button>
            </BlockForm>
            <BlockForm>
              {formik.errors.conditionOne && formik.touched.conditionOne && (
              <p className={styles.error}>{formik.errors.conditionOne}</p>
              )}
              {formik.errors.conditionTwo && formik.touched.conditionTwo && (
              <p className={styles.error}>{formik.errors.conditionTwo}</p>
              )}
              <button type="submit" className={styles.buttonMainGlobal}>Зберегти</button>
            </BlockForm>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Layout;

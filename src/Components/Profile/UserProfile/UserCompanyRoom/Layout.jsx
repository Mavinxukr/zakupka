import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
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
              <div className={styles.shadowBlock}>
                <div className={styles.centerBlock}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>{name}</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'name',
                      type: 'text',
                      placeholder: 'Введіть ім\'я',
                    }}
                  />
                </div>
                <div className={styles.centerBlock}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Призвіще</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'surname',
                      type: 'text',
                      placeholder: 'Введіть призвіще',
                    }}
                  />
                </div>
                <div className={styles.centerBlock}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.margn}>Посада</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'name_customer',
                      type: 'text',
                      placeholder: 'Введіть посаду',
                    }}
                  />
                </div>
                <button type="submit" className={styles.buttonMainGlobal}>Зберегти</button>
              </div>
            </BlockForm>
            <h2 className={styles.middleTitleGlobal}>Зміна пароля</h2>
            <BlockForm>
              <div className={styles.shadowBlock}>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Поточний пароль</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'companyRegister',
                      type: 'text',
                      placeholder: 'Введіть поточний пароль',
                    }}
                  />
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Новий пароль</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'companyRegister',
                      type: 'text',
                      placeholder: 'Введіть новий пароль',
                    }}
                  />
                  <span className={styles.smallGrayTextGlobal}>Не менше 6 символів</span>
                </div>
                <button type="submit" className={styles.buttonMainGlobal}>Змінити пароль</button>
              </div>
            </BlockForm>
            <h2 className={styles.middleTitleGlobal}>Зміна E-mail</h2>
            <BlockForm>
              <div className={styles.shadowBlock}>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Поточний E-mail</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'companyRegister',
                      type: 'text',
                      placeholder: 'cdenis@gmail.com',
                      disabled: true,
                    }}
                    classNameWrapperr={styles.inputInvisible}
                  />
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Поточний пароль</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'companyRegister',
                      type: 'text',
                      placeholder: 'Введіть поточний пароль',
                    }}
                  />
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Новий E-mail</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'companyRegister',
                      type: 'text',
                      placeholder: 'example@mail.com',
                    }}
                  />
                </div>
                <button type="submit" className={styles.buttonMainGlobal}>Змінити E-mail</button>
              </div>
            </BlockForm>
            <BlockForm>
              {formik.errors.conditionOne && formik.touched.conditionOne && (
              <p className={styles.error}>{formik.errors.conditionOne}</p>
              )}
              {formik.errors.conditionTwo && formik.touched.conditionTwo && (
              <p className={styles.error}>{formik.errors.conditionTwo}</p>
              )}
            </BlockForm>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Layout;

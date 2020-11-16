import React, { useEffect } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import InputFormik from '../../../../UI-Kit/InputFormik/InputFormik';
import styles from './Layout.scss';
import { companyTypeDataReceivedSelector, companyTypeDataSelector } from '../../../../utils/selectors';
import { getCompanyType } from '../../../../redux/actions/getCompanyType';

const Layout = () => {
  const dispatch = useDispatch();
  const companyTypeData = useSelector(companyTypeDataSelector);
  const isReceived = useSelector(companyTypeDataReceivedSelector);

  useEffect(() => {
    dispatch(getCompanyType({}, cookies.get('tokenProzorro')));
  }, []);

  if (!isReceived) {
    return <div />;
  }

  console.log('companyType -> ', companyTypeData);

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
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.containerGlobal}>
            <h2 className={styles.middleTitleGlobal}>Основні дані</h2>
            <BlockForm>
              <span className={styles.smallTitleGlobal}>
                <span className={styles.redStar}>*</span>
                <span>Тип компанії</span>
              </span>
              <InputFormik
                formikProps={{
                  ...formik,
                  name: 'companyRegister',
                  type: 'text',
                  placeholder: 'ЄДРПОУ',
                }}
                classNameWrapperr={styles.webInput}
              />
              <Field as="select" name="kategory" id="role" className={styles.companyType}>
                <option value="type1">-- можна вибрати --</option>
                <option value="type2">товари</option>
                <option value="type3">послуги</option>
                <option value="type4">роботи</option>
              </Field>
              <div className={styles.gridTextArea}>
                <div className={styles.flexColumnGlobal}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Назва</span>
                  </p>
                  <textarea
                    type="textarea"
                    className={styles.textAreaGlobal}
                    placeholder="Введіть назву компанії"
                  />
                  <span className={styles.smallGrayTextGlobal}>Залишилось: 1024 символа(їв).</span>
                </div>
                <div className={styles.flexColumnGlobal}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Назва англійською мовою</span>
                  </p>
                  <textarea
                    type="textarea"
                    className={styles.textAreaGlobal}
                    placeholder="Введіть назву компанії (англійською мовою)"
                  />
                  <span className={styles.smallGrayTextGlobal}>Залишилось: 1024 символа(їв).</span>
                </div>
              </div>
              <div className={styles.flexColumnGlobal}>
                <span className={styles.smallTitleGlobal}>Веб-сайт</span>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'website',
                    type: 'text',
                    placeholder: 'http://www.mysite.com/',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={styles.flexColumnGlobal}>
                <p className={styles.smallTitleGlobal}>
                  <span className={styles.redStar}>*</span>
                  <span>Категорії замовника</span>
                </p>
                <Field as="select" name="kategory" id="role" className={styles.webInput}>
                  <option value="type1">-- можна вибрати --</option>
                  <option value="type2">товари</option>
                  <option value="type3">послуги</option>
                  <option value="type4">роботи</option>
                </Field>
              </div>
            </BlockForm>
            <h2 className={styles.middleTitleGlobal}>Юридична адреса</h2>
            <BlockForm>
              <div className={styles.gridBlockThree}>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Країна</span>
                  </p>
                  <div className={styles.flexColumnGlobal}>
                    <Field as="select" name="kategory" id="role" className={styles.webInput}>
                      <option value="type1">-- можна вибрати --</option>
                      <option value="type2">товари</option>
                      <option value="type3">послуги</option>
                      <option value="type4">роботи</option>
                    </Field>
                  </div>
                  <div>
                    <p className={styles.smallTitleGlobal}>
                      <span className={styles.redStar}>*</span>
                      <span>Область</span>
                    </p>
                    <Field as="select" name="kategory" id="role" className={styles.webInput}>
                      <option value="type1">-- можна вибрати --</option>
                      <option value="type2">товари</option>
                      <option value="type3">послуги</option>
                      <option value="type4">роботи</option>
                    </Field>
                  </div>
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Населений пункт</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'website',
                      type: 'text',
                      placeholder: 'http://www.mysite.com/',
                    }}
                    classNameWrapperr={styles.webInput}
                  />
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Поштовий індекс</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'website',
                      type: 'text',
                      placeholder: 'http://www.mysite.com/',
                    }}
                    classNameWrapperr={styles.webInput}
                  />
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Адреса компанії</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'website',
                      type: 'text',
                      placeholder: 'http://www.mysite.com/',
                    }}
                    classNameWrapperr={styles.webInput}
                  />
                </div>
              </div>
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

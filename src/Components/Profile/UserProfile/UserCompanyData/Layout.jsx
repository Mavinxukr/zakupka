import React, { useEffect } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import BlockForm from '../../../shared/BlockForm/BlockForm';
import InputFormik from '../../../../UI-Kit/InputFormik/InputFormik';
import {
  companyTypeDataReceivedSelector,
  companyTypeDataSelector, regionsDataReceivedSelector,
  regionsDataSelector,
} from '../../../../utils/selectors';
import { getCompanyType } from '../../../../redux/actions/getCompanyType';
import { getRegions } from '../../../../redux/actions/getRegions';
import { userCompanyPost } from '../../../../services/userCompanyPost';
import styles from './Layout.scss';

const Layout = () => {
  const dispatch = useDispatch();
  const companyTypeData = useSelector(companyTypeDataSelector);
  const isReceived = useSelector(companyTypeDataReceivedSelector);
  const regionsData = useSelector(regionsDataSelector);
  const isReceivedRegions = useSelector(regionsDataReceivedSelector);

  const onSubmit = (values) => {
    userCompanyPost({}, cookies.get('tokenProzorro'), {
      ...values,
      type_id: +values.type_id,
      region: +values.region,
    })
      .then((res) => console.log(res))
      .catch((res) => console.log('Запит false', res));
  };

  useEffect(() => {
    dispatch(getCompanyType({}, cookies.get('tokenProzorro')));
    dispatch(getRegions({}));
  }, []);

  if (!isReceived || !isReceivedRegions) {
    return <div />;
  }

  return (
    <Formik
      initialValues={{}}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Поле обов`язкове'),
        name_en: Yup.string()
          .required('Поле обов`язкове'),
        code_edrpo: Yup.string()
          .required('Поле обов`язкове'),
        post_code: Yup.string()
          .required('Поле обов`язкове'),
        address: Yup.string()
          .required('Поле обов`язкове'),
        city: Yup.string()
          .required('Поле обов`язкове'),
      })}
      onSubmit={(values) => onSubmit(values)}
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
              <div className={styles.gridTypeCompanies}>
                <Field as="select" name="type_id" id="role" className={styles.companyType}>
                  { companyTypeData.map((item) => (<option value={item.id} key={item.id}> {item.ua_name} </option>))}
                </Field>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'code_edrpo',
                    component: 'text',
                    placeholder: 'ЄДРПОУ',
                  }}
                  classNameWrapperr={styles.inputGlobal}
                />
              </div>
              <div className={styles.gridTextArea}>
                <div className={styles.flexColumnGlobal}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Назва</span>
                  </p>
                  <Field
                    name="name"
                    component="textarea"
                    className={styles.textAreaGlobal}
                    placeholder="Введіть назву компанії"
                  />
                  {formik.errors.name && formik.touched.name && (
                    <p className={styles.warning}>
                      {formik.errors.name}
                    </p>
                  )}
                  <span className={styles.smallGrayTextGlobal}>Залишилось: 1024 символа(їв).</span>
                </div>
                <div className={styles.flexColumnGlobal}>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Назва англійською мовою</span>
                  </p>
                  <Field
                    name="name_en"
                    component="textarea"
                    className={styles.textAreaGlobal}
                    placeholder="Введіть назву компанії (англійською мовою)"
                  />
                  {formik.errors.name_en && formik.touched.name_en && (
                    <p className={styles.warning}>Поле обов`язкове</p>
                  )}
                  <span className={styles.smallGrayTextGlobal}>Залишилось: 1024 символа(їв).</span>
                </div>
              </div>
              <div className={styles.flexColumnGlobal}>
                <span className={styles.smallTitleGlobal}>Веб-сайт</span>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'site',
                    type: 'text',
                    placeholder: 'http://www.mysite.com/',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
              <div className={styles.flexColumnGlobal}>
                <span className={styles.smallTitleGlobal}>Fax</span>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'fax',
                    type: 'text',
                    placeholder: 'номер fax',
                  }}
                  classNameWrapperr={styles.webInput}
                />
              </div>
            </BlockForm>
            <h2 className={styles.middleTitleGlobal}>Юридична адреса</h2>
            <BlockForm>
              <div className={styles.gridBlockThree}>
                <div>
                  <div>
                    <p className={styles.smallTitleGlobal}>
                      <span className={styles.redStar}>*</span>
                      <span>Область</span>
                    </p>
                    <Field as="select" name="region_id" id="regions" className={styles.regions}>
                      { regionsData.map((region) => (<option value={region.id} key={`region${region.id}`}> {region.name} </option>))}
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
                      name: 'city',
                      type: 'text',
                      placeholder: 'Місто або селище',
                    }}
                    classNameWrapperr={styles.webInput}
                  />
                  {formik.errors.city && formik.touched.city}
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Поштовий індекс</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'post_code',
                      type: 'text',
                      placeholder: 'Поштовий індекс',
                    }}
                    classNameWrapperr={styles.webInput}
                  />
                  {formik.errors.post_code && formik.touched.post_code }
                </div>
                <div>
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Адреса компанії</span>
                  </p>
                  <InputFormik
                    formikProps={{
                      ...formik,
                      name: 'address',
                      type: 'text',
                      placeholder: 'Адреса компанії',
                    }}
                    classNameWrapperr={styles.webInput}
                  />
                  {formik.errors.address && formik.touched.address }
                </div>
              </div>
            </BlockForm>
            <BlockForm>
              <button type="submit" className={styles.buttonMainGlobal}>Зберегти</button>
            </BlockForm>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Layout;

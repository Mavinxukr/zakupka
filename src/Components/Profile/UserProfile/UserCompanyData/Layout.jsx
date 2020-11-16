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
import styles from './Layout.scss';

const Layout = () => {
  const dispatch = useDispatch();
  const companyTypeData = useSelector(companyTypeDataSelector);
  const isReceived = useSelector(companyTypeDataReceivedSelector);
  const regionsData = useSelector(regionsDataSelector);
  const isReceivedRegions = useSelector(regionsDataReceivedSelector);

  useEffect(() => {
    dispatch(getCompanyType({}, cookies.get('tokenProzorro')));
    dispatch(getRegions({}));
  }, []);

  if (!isReceived || !isReceivedRegions) {
    return <div />;
  }

  console.log('companyType -> ', companyTypeData);
  console.log('regions -> ', regionsData);

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
              <div className={styles.gridTypeCompanies}>
                <Field as="select" name="kategory" id="role" className={styles.companyType}>
                  { companyTypeData.map((item) => (<option key={item.id}> {item.ua_name} </option>))}
                </Field>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'companyRegister',
                    type: 'text',
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
                <span className={styles.smallTitleGlobal}>Fax</span>
                <InputFormik
                  formikProps={{
                    ...formik,
                    name: 'fax',
                    type: 'number',
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
                  <p className={styles.smallTitleGlobal}>
                    <span className={styles.redStar}>*</span>
                    <span>Країна</span>
                  </p>
                  <div className={styles.flexColumnGlobal}>
                    <InputFormik
                      formikProps={{
                        ...formik,
                        name: 'website',
                        type: 'text',
                        placeholder: 'назва країни',
                        value: 'Україна (UA-EDR)',
                      }}
                      classNameWrapperr={styles.webInput}
                    />
                  </div>
                  <div>
                    <p className={styles.smallTitleGlobal}>
                      <span className={styles.redStar}>*</span>
                      <span>Область</span>
                    </p>
                    <Field as="select" name="region" id="regions" className={styles.regions}>
                      { regionsData.map((region) => (<option key={`region${region.id}`}> {region.name} </option>))}
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
                      placeholder: 'місто або селище',
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
                      name: 'zip',
                      type: 'text',
                      placeholder: 'поштовий індекс',
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
                      name: 'address',
                      type: 'text',
                      placeholder: 'адреса компанії',
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

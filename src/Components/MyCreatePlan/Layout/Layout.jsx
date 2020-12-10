import React, { useState } from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import styles from './Layout.scss';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import { createPlan } from '../../../redux/actions/createPlane';
import { createPlanReceivedSelector, createPlanSelector } from '../../../utils/selectors';
import BlockForm from '../../shared/BlockForm/BlockForm';
import Popup from '../../shared/Popup/Popup';
import Classifier from '../../Classifier/Classifier';
import ClassifierCode from '../../ClassifierCode/ClassifierCode';
import TypeOfProcedure from '../../TypeOfProcedure/TypeOfProcedure';
import MoneyTypeComponent from '../../shared/MoneyTypeComponent/MoneyTypeComponent';
import ListItems from '../../CreatePlan';

const Layout = () => {
  const [openPopup, isOpenPopup] = useState(false);
  const [openPopupKEKV, isOpenPopupKEKV] = useState(false);
  const [dataDK, isDataDK] = useState('');
  const dispatch = useDispatch();
  const planData = useSelector(createPlanSelector);
  const isPlanData = useSelector(createPlanReceivedSelector);
  const buyers = JSON.stringify([{
    kind: 'general',
    identifier: { scheme: 'UA-EDR', id: '33455365', legalName: 'КП Ромашка тест' },
    name: 'КП Ромашка тест',
    address: {
      postalCode: '04074', countryName: 'Україна', streetAddress: 'вул. Горького, 2', region: 'м. Київ', locality: 'Київ',
    },
  }]);
  const items = JSON.stringify([{
    description: 'Насіння гірчиці', classification: { scheme: 'ДК021', description: 'Mustard seeds', id: '44617100-9' }, additionalClassifications: [{ scheme: 'ДКПП', id: '01.11.92', description: 'Насіння гірчиці' }], deliveryDate: { endDate: '2019-04-12T06:47:09.005262' }, unit: { code: 'KGM', name: 'кг' }, quantity: 1000,
  }]);

  console.log('planData ---> ', planData);
  console.log('isPlanData ---> ', isPlanData);
  console.log('dataDK ---> ', dataDK);

  const SignupSchema = Yup.object().shape({
    classification_scheme: Yup.string()
      .required('Це поле не може бути пустим!'),
    classification_description: Yup.string()
      .required('Це поле не може бути пустим!'),
    classification_id: Yup.string()
      .required('Це поле не може бути пустим!'),
    budget_amountNet: Yup.string()
      .required('Це поле не може бути пустим!'),
    budget_description: Yup.string()
      .required('Це поле не може бути пустим!'),
    budget_period_startDate: Yup.string()
      .required('Це поле не може бути пустим!'),
    budget_period_endDate: Yup.string()
      .required('Це поле не може бути пустим!'),
    project_name: Yup.string()
      .required('Це поле не може бути пустим!'),
    project_id: Yup.string()
      .required('Це поле не може бути пустим!'),
    currency: Yup.string()
      .required('Це поле не може бути пустим!'),
    amount: Yup.string()
      .required('Це поле не може бути пустим!'),
    budget_id: Yup.string()
      .required('Це поле не може бути пустим!'),
    tender_procurementMethodType: Yup.string()
      .required('Це поле не може бути пустим!'),
    tenderPeriod_startDate: Yup.string()
      .required('Це поле не може бути пустим!'),
  });

  return (
    <>
      <MenuPurchaser />
      <div className={styles.containerGlobal}>
        <h2>Створити план</h2>
        {openPopup && (
        <Popup isOpenPopup={isOpenPopup}>
          <div className={styles.popupHeader}>
            <h3>Класифікатор ДК 021:2015 </h3>
          </div>
          <div className={styles.treeContainer}>
            <Classifier radio isDataDK={isDataDK} />
          </div>
          <div className={styles.buttonsBlock}>
            <button type="button" className={styles.buttonMainGlobal}>Вибрати</button>
            <button type="button" className={styles.buttonGlobal}>Відмінити</button>
          </div>
        </Popup>
        )}
        {openPopupKEKV && (
        <Popup isOpenPopup={isOpenPopupKEKV}>
          <div className={styles.popupHeader}>
            <h3>Класифікатор КЕКВ</h3>
          </div>
          <div className={styles.treeContainer}>
            <ClassifierCode />
          </div>
          <div className={styles.buttonsBlock}>
            <button type="button" className={styles.buttonMainGlobal}>Вибрати</button>
            <button type="button" className={styles.buttonGlobal}>Відмінити</button>
          </div>
        </Popup>
        )}
        <Formik
          initialValues={
                {
                  classification_scheme: 'ДК021',
                  classification_description: 'футляри до державних нагород',
                  classification_id: '44617100-9',
                  budget_amountNet: '80000',
                  budget_description: '123',
                  budget_period_startDate: '2020',
                  budget_period_endDate: '2020',
                  project_name: '123',
                  project_id: '123',
                  currency: 'UAH',
                  amount: '60000',
                  budget_id: '12303111000-2',
                  tender_procurementMethodType: 'belowThreshold',
                  tenderPeriod_startDate: '2020',
                  buyers,
                  items,
                }
              }
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(createPlan({}, Cookies.get('tokenProzorro'), { ...values }));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.flexColumnGlobal}>
                <h2 className={styles.middleTitleGlobal}>Класификатор - название КЕКВ или ДК021</h2>
                <BlockForm
                  name="classification_scheme"
                  classWrapper={styles.blockForm}
                >
                  <h1>ss</h1>
                </BlockForm>
                <ErrorMessage name="classification_scheme" component="span" className={styles.errorGlobal} />

                <p>(Н-Р футляри до державних нагород)</p>
                <Field type="text" name="classification_description" className={styles.inputGlobal} />
                <ErrorMessage name="classification_description" component="span" className={styles.errorGlobal} />

                <p>( Н-Р 44617100-9)</p>
                <Field type="text" name="classification_id" className={styles.inputGlobal} />
                <ErrorMessage name="classification_id" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана с НДС ( 500 )</p>
                <Field type="number" name="budget_amountNet" className={styles.inputGlobal} />
                <ErrorMessage name="budget_amountNet" component="span" className={styles.errorGlobal} />

                <p>Описание к бюджету ( патроны )</p>
                <Field type="text" name="budget_description" className={styles.inputGlobal} />
                <ErrorMessage name="budget_description" component="span" className={styles.errorGlobal} />

                <p>Старт ( 2020 )</p>
                <Field type="text" name="budget_period_startDate" className={styles.inputGlobal} />
                <ErrorMessage name="budget_period_startDate" component="span" className={styles.errorGlobal} />

                <p>Конец плата ( 2020 )</p>
                <Field type="text" name="budget_period_endDate" className={styles.inputGlobal} />
                <ErrorMessage name="budget_period_endDate" component="span" className={styles.errorGlobal} />

                <p>название плана ( мой план )</p>
                <Field type="text" name="project_name" className={styles.inputGlobal} />
                <ErrorMessage name="project_name" component="span" className={styles.errorGlobal} />

                <p>пока уточняю (123)</p>
                <Field type="text" name="project_id" className={styles.inputGlobal} />
                <ErrorMessage name="project_id" component="span" className={styles.errorGlobal} />

                <p>Валюта UAH из запроса Get Tender money type ( UAH ) </p>
                <Field type="text" name="currency" className={styles.inputGlobal} />
                <ErrorMessage name="currency" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана ( 500 )</p>
                <Field type="number" name="amount" className={styles.inputGlobal} />
                <ErrorMessage name="amount" component="span" className={styles.errorGlobal} />

                <p>( 12303111000-2 )</p>
                <Field type="text" name="budget_id" className={styles.inputGlobal} />
                <ErrorMessage name="budget_id" component="span" className={styles.errorGlobal} />

                <p>Тип тендера из зарпоса Get Tender type ( aboveThresholdUA )</p>
                <Field type="text" name="tender_procurementMethodType" className={styles.inputGlobal} />
                <ErrorMessage name="tender_procurementMethodType" component="span" className={styles.errorGlobal} />

                {/* <p>Старт ( 2020 )</p> */}
                {/* <Field type="text" name="tenderPeriod_startDate" className={styles.inputGlobal} /> */}
                {/* <ErrorMessage name="tenderPeriod_startDate" component="span" className={styles.errorGlobal} /> */}
                <TypeOfProcedure />
                <BlockForm>
                  <h2 className={styles.title}>Інформація про закупівлю</h2>
                  <div className={styles.infoBlock}>
                    <section className={styles.annualPlan}>
                      <div className={styles.titleFormDate}><span className={styles.redStar}>*</span><p className={styles.normalTextGlobal}>Річний план закупівлі на</p></div>
                      <TextField
                        id="datetime-local"
                        name="budget_period_startDate"
                        label="Початок"
                        type="date"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        id="datetime-local"
                        name="budget_period_endDate"
                        label="Кінецева дата"
                        type="date"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <ErrorMessage
                        name="budget_period_startDate"
                        component="span"
                        className={styles.errorGlobal}
                      />

                    </section>
                    <section className={styles.specialName}>
                      <div className={styles.titleForm}><span className={styles.redStar}>*</span><p className={styles.normalTextGlobal}>Конкретна назва предмета закупівлі</p></div>
                      <div>
                        <Field className={styles.textarea} name="notes" component="textarea" />
                        <p>Залишилось: 20000 символа(їв).</p>
                      </div>
                    </section>
                    <section className={styles.notes}>
                      <div className={styles.titleForm}><p style={{ marginLeft: '12px' }}>Примітки</p></div>
                      <div>
                        <Field className={styles.textarea} name="area" component="textarea" />
                        <p>Залишилось: 10000 символа(їв).</p>
                      </div>
                    </section>
                    <section className={styles.gridBlockGlobal}>
                      <p style={{ paddingLeft: '10px' }}><span className={styles.redStar}>*</span>Очікувана вартість</p>
                      <Field className={styles.textarea} name="color" component="textarea" />
                    </section>
                    <MoneyTypeComponent />
                    <section className={styles.gridBlockGlobal}>
                      <div className={styles.titleForm}>
                        <span className={styles.redStar}>*</span>
                        <p>Орієнтовний початок проведення процедури закупівлі</p>
                      </div>
                      <div className={styles.startSales}>
                        <input className={styles.inputGlobal} name="color" value="2020" />
                      </div>
                    </section>
                    <section className={styles.gridBlockGlobal}>
                      <div className={styles.titleForm}>
                        <span className={styles.redStar}>*</span>
                        <p>Класифікатор</p>
                      </div>
                      <div className={cx(styles.buttonsBlock, styles.flexStart)}>
                        <button type="button" className={styles.buttonGlobal} onClick={() => isOpenPopup(true)}>ДК
                          021:2015
                        </button>
                        <button type="button" className={styles.buttonGlobal} onClick={() => isOpenPopupKEKV(true)}>КЕКВ
                        </button>
                      </div>
                    </section>
                  </div>
                </BlockForm>
                <BlockForm>
                  <h2 className={styles.middleTitleGlobal}>Джерело фінансування</h2>
                  <section className={styles.gridBlockGlobal}>
                    <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Назва джерела</p></div>
                    <div>
                      <Field as="select" name="role" id="role">
                        <option value="1">--Потрібно вибрати--</option>
                        <option value="2">Державний бюджет України</option>
                        <option value="3">Бюджет Атономної Республіки Крим</option>
                        <option value="4">Місцевий бюджет</option>
                        <option value="5">Власний бюджет (кошти від господарської діяльності підприємства)</option>
                        <option value="6">Бюджет цільових фондів (що не входить до складу Державного або місцевого
                          бюджетів)
                        </option>
                        <option value="7">Кредити або позики міжнародних валютно-кредитних організацій</option>
                        <option value="8">Інше</option>
                      </Field>
                    </div>
                  </section>
                  <section className={styles.gridBlockGlobal}>
                    <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Сума</p></div>
                    <Field name="color" component="textarea" />
                  </section>
                  <section className={styles.gridBlockGlobal}>
                    <div className={styles.titleForm}>
                      <p style={{ marginLeft: '12px' }}>Опис</p>
                    </div>
                    <Field name="description" component="input" className={styles.inputGlobal} />
                  </section>
                  <button className={styles.buttonGlobal} type="button">Видалити джерело</button>
                  <button className={styles.buttonMainGlobal} style={{ marginLeft: '40px' }} type="button">+ Додати джерело</button>
                </BlockForm>
                <ListItems />
                <BlockForm>
                  <div className={styles.footerButtons}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.buttonMainGlobal}
                    >
                      Створити план
                    </button>
                    <NavLink
                      to="/profile_purchases"
                    >
                      <button className={styles.buttonGlobal} type="button">Скасувати план</button>
                    </NavLink>
                  </div>
                </BlockForm>

              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default Layout;

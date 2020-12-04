import React, { useEffect } from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import styles from './Layout.scss';
import { getPlan, planUpdate } from '../../redux/actions/getPlan';
import { getPlanReceivedSelector, getPlanSelector } from '../../utils/selectors';
import Footer from '../shared/Footer/Footer';
import Spinner from '../shared/Spinner';

const Layout = () => {
  const router = useHistory();
  const id = router.location.pathname.split('/')[2];
  const dispatch = useDispatch();
  const getPlanData = useSelector(getPlanSelector);
  const isPlanData = useSelector(getPlanReceivedSelector);
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

  useEffect(() => {
    dispatch(getPlan({}, id));
  }, []);

  console.log(id);
  if (!isPlanData) {
    return <Spinner />;
  }
  const dataPlan = JSON.parse(getPlanData.plans);

  return (
    <>
      <div className={styles.containerGlobal}>
        <h2>Змінити план</h2>
        <Formik
          initialValues={
                        {
                          classification_scheme: dataPlan.classification.scheme,
                          classification_description: dataPlan.classification.description,
                          classification_id: dataPlan.classification.id,
                          amount: dataPlan.budget.amount,
                          budget_amountNet: dataPlan.budget.amountNet,
                          budget_description: dataPlan.budget.description,
                          budget_period_startDate: dataPlan.budget.period.startDate,
                          budget_period_endDate: dataPlan.budget.period.endDate,
                          project_name: dataPlan.budget.project.name,
                          project_id: dataPlan.budget.project.id,
                          currency: dataPlan.budget.currency,
                          budget_id: dataPlan.budget.id,
                          tender_procurementMethodType: dataPlan.tender.procurementMethodType,
                          tenderPeriod_startDate: dataPlan.tender.tenderPeriod.startDate,
                          buyers,
                          items,
                        }
                    }
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            dispatch(planUpdate({}, Cookies.get('tokenProzorro'), id, { ...values }));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.flexColumnGlobal}>
                <p>Класификатор - название КЕКВ или ДК021</p>
                <Field type="text" name="classification_scheme" className={styles.inputGlobal} />
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

                <p>Старт ( 2020 )</p>
                <Field type="text" name="tenderPeriod_startDate" className={styles.inputGlobal} />
                <ErrorMessage name="tenderPeriod_startDate" component="span" className={styles.errorGlobal} />
                <div className={styles.buttons}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.buttonMainGlobal}
                  >
                    Зберегти зміни
                  </button>
                  <NavLink
                    to="/my_procurement_plans?page=1"
                  >
                    <button
                      type="button"
                      className={styles.buttonMainGlobal}
                    >
                      Відмінити зміни
                    </button>
                  </NavLink>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

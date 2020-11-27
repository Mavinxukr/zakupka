import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
// import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import styles from './CreateTenderProto.scss';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import Footer from '../../shared/Footer/Footer';
import { createTenderReceivedSelector, createTenderSelector } from '../../../utils/selectors';
import { createTender } from '../../../redux/actions/createTender';

const Layout = () => {
  const dispatch = useDispatch();
  const tenderData = useSelector(createTenderSelector);
  const tenderReceived = useSelector(createTenderReceivedSelector);
  const milestones = JSON.stringify([{
    title: 'deliveryOfGoods', description: 'Configurable optimal superstructure', type: 'financing', code: 'prepayment', percentage: 100, duration: { days: 900, type: 'working' }, sequenceNumber: 1,
  }]);
  const documents = JSON.stringify([{
    url: 'https://public-docs-sandbox.prozorro.gov.ua/get/'
        + 'e745775f4c864a4fa371fad4650cf755?KeyID=9d92c6f9&Signature'
        + '=x2VpYDw65Th3n5Sbji0T4ynt8ATKgFJxW24UQxRLYGyh7Dh8Xm%2F'
        + '7BlPEH4GxY6rjZ9MQnk7FIcDvQYkpzlu%2FDA%253D%253D',
    title: '1474011210_15.jpg',
    hash: 'md5:d41d8cd98f00b204e9800998ecf8427e',
    format: 'image/jpeg',
    for: 'item',
    in_array: 0,
    documentOf: 'tender',
  }]);
  const items = JSON.stringify([{
    description: 'футляри до державних нагород мпор рпрпо',
    description_en: 'hello',
    classification: { scheme: 'ДК021', id: '44617100-9', description: 'футляри до державних нагород' },
    deliveryAddress: {
      countryName: 'Україна', postalCode: '79000', region: 'м. Київ', streetAddress: 'вул. Банкова 1', locality: 'м. Київ',
    },
    deliveryDate: { startDate: '2017-07-27T17:36:49.306344', endDate: '2017-07-30T17:36:49.306344' },
    unit: { code: 'KGM', name: 'кілограм' },
    quantity: 5,
  }]);

  console.log(tenderData, tenderReceived);

  // const SignupSchema = Yup.object().shape({
  //   tenderPeriod_startDate: Yup.string()
  //     .required('Це поле не може бути пустим!'),
  // tenderPeriod_endDate: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // mainProcurementCategory: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // title: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // related_plan_id: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // title_en: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // procuringEntity_identifier_legalName_en: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // company_name_us: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // fundingKind: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // NBUdiscountRate: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // minimalStepPercentage: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // yearlyPaymentsPercentageRange: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // multilot: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // amount: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // description: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // description_en: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // value_amount: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // value_currency: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // value_valueAddedTaxIncluded: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // minimalStep_currency: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // guarantee_amount: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // procurementMethodType: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // cause: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // causeDescription: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // causeDescription_ru: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // causeDescription_en: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // milestones: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // documents: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // lots: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // funders: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // features: Yup.string()
  //   .required('Це поле не може бути пустим!'),
  // items: Yup.string()
  //   .required('Це поле не може бути пустим!'),

  // });

  return (
    <>
      <MenuPurchaser />
      <div className={styles.containerGlobal}>
        <h2>Створити тендер</h2>
        <Formik
          initialValues={
                        {
                          tenderPeriod_startDate: '2021-02-20',
                          tenderPeriod_endDate: '2021-03-20',
                          mainProcurementCategory: 'goods',
                          title: 'Футляри до державних нагород',
                          related_plan_id: '',
                          title_en: '',
                          procuringEntity_identifier_legalName_en: '',
                          company_name_us: '',
                          fundingKind: '',
                          NBUdiscountRate: '',
                          minimalStepPercentage: '',
                          yearlyPaymentsPercentageRange: '',
                          multilot: '',
                          amount: '1000',
                          description: 'hgf',
                          description_en: '',
                          value_amount: '50500',
                          value_currency: 'UAH',
                          value_valueAddedTaxIncluded: 'true',
                          minimalStep_currency: 'UAH',
                          guarantee_amount: '',
                          guarantee_currency: '',
                          procurementMethodType: 'belowThreshold',
                          cause: 'twiceUnsuccessful',
                          causeDescription: 'Двічі відмінено процедуру відкритих торгів, у тому числі частково (за лотом), через відсутність достатньої кількості тендерних пропозицій, визначеної цим Законом',
                          causeDescription_ru: '',
                          causeDescription_en: '',
                          milestones,
                          documents,
                          lots: '',
                          funders: '',
                          features: '',
                          items,
                        }
                    }
          // validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(createTender({}, Cookies.get('tokenProzorro'), { ...values }));
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.flexColumnGlobal}>
                <p>Класификатор - название КЕКВ или ДК021</p>
                <Field type="text" name="tenderPeriod_startDate" className={styles.inputGlobal} />
                <ErrorMessage name="tenderPeriod_startDate" component="span" className={styles.errorGlobal} />

                <p>(Н-Р футляри до державних нагород)</p>
                <Field type="text" name="tenderPeriod_endDate" className={styles.inputGlobal} />
                <ErrorMessage name="tenderPeriod_endDate" component="span" className={styles.errorGlobal} />

                <p>( Н-Р 44617100-9)</p>
                <Field type="text" name="mainProcurementCategory" className={styles.inputGlobal} />
                <ErrorMessage name="mainProcurementCategory" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана с НДС ( 500 )</p>
                <Field type="number" name="title" className={styles.inputGlobal} />
                <ErrorMessage name="title" component="span" className={styles.errorGlobal} />

                <p>Описание к бюджету ( патроны )</p>
                <Field type="text" name="related_plan_id" className={styles.inputGlobal} />
                <ErrorMessage name="related_plan_id" component="span" className={styles.errorGlobal} />

                <p>Старт ( 2020 )</p>
                <Field type="text" name="title_en" className={styles.inputGlobal} />
                <ErrorMessage name="title_en" component="span" className={styles.errorGlobal} />

                <p>Конец плата ( 2020 )</p>
                <Field type="text" name="procuringEntity_identifier_legalName_en" className={styles.inputGlobal} />
                <ErrorMessage name="procuringEntity_identifier_legalName_en" component="span" className={styles.errorGlobal} />

                <p>название плана ( мой план )</p>
                <Field type="text" name="company_name_us" className={styles.inputGlobal} />
                <ErrorMessage name="company_name_us" component="span" className={styles.errorGlobal} />

                <p>пока уточняю (123)</p>
                <Field type="text" name="fundingKind" className={styles.inputGlobal} />
                <ErrorMessage name="fundingKind" component="span" className={styles.errorGlobal} />

                <p>Валюта UAH из запроса Get Tender money type ( UAH ) </p>
                <Field type="text" name="NBUdiscountRate" className={styles.inputGlobal} />
                <ErrorMessage name="NBUdiscountRate" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана ( 500 )</p>
                <Field type="number" name="minimalStepPercentage" className={styles.inputGlobal} />
                <ErrorMessage name="minimalStepPercentage" component="span" className={styles.errorGlobal} />

                <p>( 12303111000-2 )</p>
                <Field type="text" name="yearlyPaymentsPercentageRange" className={styles.inputGlobal} />
                <ErrorMessage name="yearlyPaymentsPercentageRange" component="span" className={styles.errorGlobal} />

                <p>Тип тендера из зарпоса Get Tender type ( aboveThresholdUA )</p>
                <Field type="text" name="multilot" className={styles.inputGlobal} />
                <ErrorMessage name="multilot" component="span" className={styles.errorGlobal} />

                <p>Старт ( 2020 )</p>
                <Field type="text" name="amount" className={styles.inputGlobal} />
                <ErrorMessage name="amount" component="span" className={styles.errorGlobal} />

                <p>Класификатор - название КЕКВ или ДК021</p>
                <Field type="text" name="description" className={styles.inputGlobal} />
                <ErrorMessage name="description" component="span" className={styles.errorGlobal} />

                <p>(Н-Р футляри до державних нагород)</p>
                <Field type="text" name="description_en" className={styles.inputGlobal} />
                <ErrorMessage name="description_en" component="span" className={styles.errorGlobal} />

                <p>( Н-Р 44617100-9)</p>
                <Field type="text" name="value_amount" className={styles.inputGlobal} />
                <ErrorMessage name="value_amount" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана с НДС ( 500 )</p>
                <Field type="number" name="value_currency" className={styles.inputGlobal} />
                <ErrorMessage name="value_currency" component="span" className={styles.errorGlobal} />

                <p>Описание к бюджету ( патроны )</p>
                <Field type="text" name="value_valueAddedTaxIncluded" className={styles.inputGlobal} />
                <ErrorMessage name="value_valueAddedTaxIncluded" component="span" className={styles.errorGlobal} />

                <p>Старт ( 2020 )</p>
                <Field type="text" name="minimalStep_currency" className={styles.inputGlobal} />
                <ErrorMessage name="minimalStep_currency" component="span" className={styles.errorGlobal} />

                <p>Конец плата ( 2020 )</p>
                <Field type="text" name="guarantee_amount" className={styles.inputGlobal} />
                <ErrorMessage name="guarantee_amount" component="span" className={styles.errorGlobal} />

                <p>название плана ( мой план )</p>
                <Field type="text" name="guarantee_currency" className={styles.inputGlobal} />
                <ErrorMessage name="guarantee_currency" component="span" className={styles.errorGlobal} />

                <p>пока уточняю (123)</p>
                <Field type="text" name="procurementMethodType" className={styles.inputGlobal} />
                <ErrorMessage name="procurementMethodType" component="span" className={styles.errorGlobal} />

                <p>Валюта UAH из запроса Get Tender money type ( UAH ) </p>
                <Field type="text" name="cause" className={styles.inputGlobal} />
                <ErrorMessage name="cause" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана ( 500 )</p>
                <Field type="number" name="causeDescription" className={styles.inputGlobal} />
                <ErrorMessage name="causeDescription" component="span" className={styles.errorGlobal} />

                <p>( 12303111000-2 )</p>
                <Field type="text" name="causeDescription_ru" className={styles.inputGlobal} />
                <ErrorMessage name="causeDescription_ru" component="span" className={styles.errorGlobal} />

                <p>Тип тендера из зарпоса Get Tender type ( aboveThresholdUA )</p>
                <Field type="text" name="causeDescription_en" className={styles.inputGlobal} />
                <ErrorMessage name="causeDescription_en" component="span" className={styles.errorGlobal} />

                <p>Старт ( 2020 )</p>
                <Field type="text" name="milestones" className={styles.inputGlobal} />
                <ErrorMessage name="milestones" component="span" className={styles.errorGlobal} />

                <p>Класификатор - название КЕКВ или ДК021</p>
                <Field type="text" name="documents" className={styles.inputGlobal} />
                <ErrorMessage name="documents" component="span" className={styles.errorGlobal} />

                <p>(Н-Р футляри до державних нагород)</p>
                <Field type="text" name="lots" className={styles.inputGlobal} />
                <ErrorMessage name="lots" component="span" className={styles.errorGlobal} />

                <p>( Н-Р 44617100-9)</p>
                <Field type="text" name="funders" className={styles.inputGlobal} />
                <ErrorMessage name="funders" component="span" className={styles.errorGlobal} />

                <p>Бюджет плана с НДС ( 500 )</p>
                <Field type="number" name="features" className={styles.inputGlobal} />
                <ErrorMessage name="features" component="span" className={styles.errorGlobal} />

                <p>Описание к бюджету ( патроны )</p>
                <Field type="text" name="items" className={styles.inputGlobal} />
                <ErrorMessage name="items" component="span" className={styles.errorGlobal} />

                <button type="submit" disabled={isSubmitting} className={styles.buttonMainGlobal}>Submit</button>
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

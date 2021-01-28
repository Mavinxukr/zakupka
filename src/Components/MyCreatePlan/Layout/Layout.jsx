import React from 'react';
// import {
//   ErrorMessage, Field, Form, Formik,
// } from 'formik';
import Typography from '@material-ui/core/Typography';
// import Cookies from 'js-cookie';
// import { NavLink } from 'react-router-dom';
// import { TextField } from '@material-ui/core';
import styles from './Layout.scss';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
// import { createPlan } from '../../../redux/actions/createPlane';
// import BlockForm from '../../shared/BlockForm/BlockForm';

// import MoneyTypeComponent from '../../shared/MoneyTypeComponent/MoneyTypeComponent';
// import ListItems from '../../CreatePlan';
import FormCreatPlan from './FormCreatPlan/FormCreatPlan';
import { CreatPlanContext } from '../../../context/CreatPlanContext';
import { useCreatPlan } from '../../../hooks/useCreatPlan.hook';

const Layout = () => {
  const {
    tenderType,
    selectTenderType,
    classificatorDK,
    selectClassificationDK,
    classificationsKEKV,
    addKekv,
    removeKekv,
  } = useCreatPlan();
  return (
    // const buyers = JSON.stringify([{
    //   kind: 'general',
    //   identifier: { scheme: 'UA-EDR', id: '33455365', legalName: 'КП Ромашка тест' },
    //   name: 'КП Ромашка тест',
    //   address: {
    //     postalCode: '04074', countryName: 'Україна', streetAddress: 'вул. Горького, 2', region: 'м. Київ', locality: 'Київ',
    //   },
    // }]);
    // const items = JSON.stringify([{
    //   description: 'Насіння гірчиці', classification: { scheme: 'ДК021', description: 'Mustard seeds', id: '44617100-9' }, additionalClassifications: [{ scheme: 'ДКПП', id: '01.11.92', description: 'Насіння гірчиці' }], deliveryDate: { endDate: '2019-04-12T06:47:09.005262' }, unit: { code: 'KGM', name: 'кг' }, quantity: 1000,
    // }]);
    <CreatPlanContext.Provider
      value={{
        tenderType,
        selectTenderType,
        classificatorDK,
        selectClassificationDK,
        classificationsKEKV,
        addKekv,
        removeKekv,
      }}
    >
      <MenuPurchaser />
      <div className={styles.containerGlobal}>
        <Typography variant="h3" gutterBottom>
          Створити план
        </Typography>
        <FormCreatPlan />
        {/* <Formik
        onSubmit={(values) => {
          console.log(values);
          dispatch(createPlan({}, Cookies.get('tokenProzorro'), { ...values }));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
                    <input className={styles.inputGlobal} name="color" defaultValue="2020" />
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
          </Form>
        )}
      </Formik> */}
      </div>
    </CreatPlanContext.Provider>
  );
};

export default Layout;

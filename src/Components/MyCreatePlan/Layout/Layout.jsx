import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import cx from 'classnames';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import BlockForm from '../../shared/BlockForm/BlockForm';
import MoneyTypeComponent from '../../shared/MoneyTypeComponent/MoneyTypeComponent';
import Popup from '../../shared/Popup/Popup';
import Classifier from '../../Classifier/Classifier';
import UserInfo from '../../shared/UserInfo/UserInfo';
import ClassifierCode from '../../ClassifierCode/ClassifierCode';
import AnotherLegalEntity from '../../AnotherLegalEntity/AnotherLegalEntity';
import styles from './Layout.scss';

const Layout = () => {
  const [openPopup, isOpenPopup] = useState(false);
  const [openPopupKEKV, isOpenPopupKEKV] = useState(false);
  // const onSubmit = (values) => console.log(values);

  return (
    <>
      <MenuPurchaser />
      <div className={styles.container}>
        <h2>Новий план закупівлі</h2>
        {openPopup && (
          <Popup isOpenPopup={isOpenPopup}>
            <div className={styles.popupHeader}>
              <h3>Класифікатор ДК 021:2015 </h3>
            </div>
            <div className={styles.treeContainer}>
              <Classifier />
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
          </Popup>
        )}
        <Formik
          initialValues={{}}
          // onSubmit={(values) => onSubmit(values)}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
            >
              <BlockForm>
                <UserInfo />
              </BlockForm>
              <BlockForm>
                <h4 className={styles.middleTitleGlobal}>Інформація про закупівельника</h4>
                <span>У разі, якщо за даним планом закупівлю буде проводити інша юридична особа,вкажіть дані цієї орнанізації</span>
                <div className={styles.radioButton}>
                  {/* eslint-disable */}
                      <label>
                        <Field type="radio" name="infoShopper" value="One" checked/>
                        <span>Самостійно проводимо закупівлю за даним планом.</span>
                      </label>
                      <label>
                        <Field type="radio" name="infoShopper" value="Two"/>
                        <span>Закупівлю за даним планом буде проводити інща юридична особа, вказати дані цієї організації.</span>
                      </label>
                      {/* eslint-enable */}
                </div>
              </BlockForm>
              <AnotherLegalEntity />
              <BlockForm>
                <h4 className={styles.middleTitleGlobal}>Тип процедури</h4>
                <div className={styles.gridBlockGlobal}>
                  <span>Оберіть тип процедури</span>
                  <Field as="select" name="TypeOfProcedure" id="role">
                    <option value="Procedure1">Постачальник</option>
                    <option value="Procedure2">Відкриті торги</option>
                    <option value="Procedure3">Відкриті торги з публікацією англлійською мовою</option>
                    <option value="Procedure4">Закупівля без використання електронної системи</option>
                    <option value="Procedure5">Переговорна процедура</option>
                    <option value="Procedure6">Переговорна процедура,скорочена</option>
                    <option value="Procedure7">Конкурентний діалог</option>
                    <option value="Procedure8">Конкурентний діалог з публікацією англійською мовою</option>
                    <option value="Procedure9">Публічні закупівлі енергосервісу</option>
                    <option value="Procedure10">Укладення рамкової угоди</option>
                    <option value="Procedure11">Закупівля через централізавану закупівельну організацію</option>
                  </Field>
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Інформація про закупівлю</h4>
                <div className={styles.infoBlock}>
                  <section className={styles.annualPlan}>
                    <div className={styles.titleForm}><span>*</span><p className={styles.normalTextGlobal}>Річний план закупівлі на</p></div>
                    <Field className={styles.textarea} name="color" value="2020" />
                  </section>
                  <section className={styles.specialName}>
                    <div className={styles.titleForm}><span>*</span><p className={styles.normalTextGlobal}>Конкретна назва предмета закупівлі</p></div>
                    <div>
                      <Field className={styles.textarea} name="area" component="textarea" />
                      <p className={styles.textLow}>Залишилось: 20000 символа(їв).</p>
                    </div>
                  </section>
                  <section className={styles.notes}>
                    <div className={styles.titleForm}><p style={{ marginLeft: '12px' }}>Примітки</p></div>
                    <div>
                      <Field className={styles.textarea} name="area" component="textarea" />
                      <p className={styles.textLow}>Залишилось: 10000 символа(їв).</p>
                    </div>
                  </section>
                  <section className={styles.gridBlockGlobal}>
                    <p style={{ paddingLeft: '10px' }}><span className={styles.redStar}>*</span>Очікувана вартість</p>
                    <Field className={styles.textarea} name="color" component="textarea" />
                  </section>
                  <MoneyTypeComponent />
                  <section className={styles.gridBlockGlobal}>
                    <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Орієнтовний початок проведення процедури закупівлі</p>
                    </div>
                    <div className={styles.startSales}>
                      <Field className={styles.textarea} name="color" value="2020" />
                    </div>
                  </section>
                  <section className={styles.gridBlockGlobal}>
                    <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Класифікатор</p></div>
                    <div className={styles.buttons}>
                      <button type="button" className={styles.buttonGlobal} onClick={() => isOpenPopup(true)}>ДК 021:2015</button>
                      <button type="button" className={styles.buttonGlobal} onClick={() => isOpenPopupKEKV(true)}>КЕКВ</button>
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
                  <Field name="color" component="textarea" />
                </section>
                <button className={styles.buttonGlobal} type="button">Видалити джерело</button>
              </BlockForm>
              <BlockForm>
                <button className={styles.buttonMainGlobal} type="button">+ Додати джерело</button>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Список товарів та послуг,що закуповують</h4>
                <button className={styles.buttonMainGlobal} type="button">+ Додати товари або послугу</button>
              </BlockForm>
              <BlockForm>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2 className={styles.smallTitleGlobal}>Необов'язково, але в разі потреби тут можна завантажити додаткові
                  файли плану або майбутньої закупівлі
                </h2>
                <label htmlFor="downloadFile" className={cx(styles.buttonMainGlobal, styles.downloadFiles)}>
                  Прикріпити файл
                  {/* eslint-disable-next-line react/button-has-type */}
                  <input
                    type="file"
                    id="downloadFile"
                    className={styles.downloadFile}
                  />
                </label>
                <p className={styles.smallGrayTextGlobal}>
                  Можна завантажити додаткові файли плану або майбутньої закупівлі.
                  Максимум 100 фалів,не більше 49Мб кожен.
                </p>
                <div className={styles.footerButtons}>
                  <button className={styles.buttonMainGlobal} type="submit">Опублікувати план</button>
                  <button className={styles.buttonMainGlobal} type="button">Скасувати</button>
                </div>
              </BlockForm>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Layout;

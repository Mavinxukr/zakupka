import React from 'react';
import { Field, Formik } from 'formik';
import MenuPurchaser from '../../shared/MenuPurchaser/MenuPurchaser';
import BlockForm from '../../shared/BlockForm/BlockForm';
import styles from './Layout.scss';
import MoneyTypeComponent from '../../shared/MoneyTypeComponent/MoneyTypeComponent';

const Layout = () => {
  const onSubmit = (values) => console.log(values);
  return (
    <>
      <MenuPurchaser />
      <div className={styles.container}>
        <h2>Новий план закупівлі</h2>
        <Formik
          initialValues={{}}
          onSubmit={(values) => onSubmit(values)}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
            >
              <BlockForm>
                <div className={styles.blockInfo}>
                  <h4 className={styles.middleTitleGlobal}>Інформація про замовника</h4>
                  <p>Name</p>
                </div>
                <div className={styles.blockContacts}>
                  <h4 className={styles.customerContacts}>Контакти</h4>
                  <p>3434, Україна, Вінницька область, asdads, aasd</p>
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Інформація про закупівельника</h4>
                <span className={styles.textLow}>У разі, якщо за даним планом закупівлю буде проводити інша юридична особа,вкажіть дані цієї орнанізації</span>
                <div className={styles.radioButton}>
                  {/* eslint-disable */}
                      <label>
                        <Field type="radio" name="picked" value="One"/>
                        <span>Самостійно проводимо закупівлю за даним планом.</span>
                      </label>
                      <label>
                        <Field type="radio" name="picked" value="Two"/>
                        <span>Закупівлю за даним планом буде проводити інща юридична особа, вказати дані цієї організації.</span>
                      </label>
                      {/* eslint-enable */}
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.middleTitleGlobal}>Тип процедури</h4>
                <div className={styles.procedureType}>
                  <p>Оберіть тип процедури</p>
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
                  <section className={styles.expectedCost}>
                    <p><span className={styles.redStar}>*</span>Очікувана вартість</p>
                    <Field className={styles.textarea} name="color" component="textarea" />
                  </section>
                  <MoneyTypeComponent />
                  <section className={styles.annualPlan}>
                    <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Орієнтовний початок проведення процедури закупівлі</p>
                    </div>
                    <div className={styles.startSales}>
                      <Field className={styles.textarea} name="color" value="2020" />
                    </div>
                  </section>
                  <section className={styles.annualPlan}>
                    <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Класифікатор</p></div>
                    <div className={styles.buttons}>
                      <button type="button">ДК 021:2015</button>
                      <button type="button">Інші ДК</button>
                      <button type="button">КЕКВ</button>
                    </div>
                  </section>
                </div>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Джерело фінансування</h4>
                <section className={styles.nameSourсe}>
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
                <section className={styles.sum}>
                  <div className={styles.titleForm}><span className={styles.redStar}>*</span><p>Сума</p></div>
                  <Field name="color" component="textarea" />
                </section>
                <section className={styles.description}>
                  <div className={styles.titleForm}>
                    <p style={{ marginLeft: '12px' }}>Опис</p>
                  </div>
                  <Field name="color" component="textarea" />
                </section>
                <button type="button">Видалити джерело</button>
              </BlockForm>
              <BlockForm>
                <button className={styles.greenButtonAdd} type="button">+ Додати джерело</button>
              </BlockForm>
              <BlockForm>
                <h4 className={styles.title}>Список товарів та послуг,що закуповують</h4>
                <button className={styles.greenButtonAdd} type="button">+ Додати товари або послугу</button>
              </BlockForm>
              <BlockForm>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h5 className={styles.smallText}>Необов'язково, але в разі потреби тут можна завантажити додаткові
                  файли плану або майбутньої закупівлі
                </h5>
                <p style={{ margin: '20px 0' }}>Прикріпити файл</p>
                <input type="file" name="file" />
                <p className={styles.textLow}>Можна завантажити додаткові файли плану або майбутньої закупівлі.
                  Максимум 100 фалів,не більше 49Мб кожен.
                </p>
                <div className={styles.footerButtons}>
                  <button className={styles.greenButtonAdd} type="submit">Опублікувати план</button>
                  <button type="button">Зберегти чернетку</button>
                  <button className={styles.blueButton} type="button">Скасувати</button>
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

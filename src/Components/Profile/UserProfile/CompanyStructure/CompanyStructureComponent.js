import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import IconCompany from '../../../../static/svg/company.svg';
import styles from './CompanyStructureComponent.scss';

const Layout = () => {
  const comp = 'CompanyStructureComponent';
  console.log(comp);
  return (
    <div className={styles.containerGlobal}>
      <h2 className={styles.middleTitleGlobal}>Структура компанії</h2>
      <div className={styles.blockTo}>
        <div className={styles.flexRowGlobal}>
          <IconCompany className={styles.iconMiddleGlobal} />
          <p className={cx(styles.flexColumnGlobal, styles.indent)}>
            <span className={styles.middleTitleGlobal}>Компанія</span>
            <span className={styles.smallBoldTextGlobal}>Моя компанія (назва) (державний замовник)</span>
          </p>
        </div>
        <NavLink
          to="/user_company_data"
          asset
          className={styles.linkGlobal}
        >
          <button type="button" className={styles.buttonMainGlobal}>Редагувати дані</button>
        </NavLink>
      </div>
      <div>
        <h2 className={styles.smallTitleGlobal}>Співробітник</h2>
        <div className={styles.tableTitle}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span>Ім'я та призвіще</span>
          <span>Роль</span>
          <span>Телефон</span>
          <span>Електронна адреса</span>
          <span>Управління</span>
        </div>
        <div className={styles.tableRow}>
          <span>Альберт Енштейн</span>
          <span>адміністратор</span>
          <span>+380673333333</span>
          <span>example@mail.com</span>
          <span>Icon</span>
        </div>
      </div>
      <div className={cx(styles.smallTitleGlobal, styles.addBlock)}>
        <h2 className={styles.smallTitleGlobal}>Дочірні компанії</h2>
        <span className={styles.smallGrayTextGlobal}>Ви не маєте дочірніх копаній.</span>
        <div className={styles.buttons}>
          <button type="button" className={styles.buttonGlobal}>Додати компанію із існуючих</button>
          <button type="button" className={styles.buttonGlobal}>Додати нову компанію</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;

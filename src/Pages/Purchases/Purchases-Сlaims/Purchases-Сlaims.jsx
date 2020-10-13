import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import TabsComponent from '../../../Components/Purchases/TabsComponent/TabsComponent';
import MenuPurchaser from '../../../Components/shared/MenuPurchaser/MenuPurchaser';
import Header from '../../../Components/shared/Header/Header';
import Footer from '../../../Components/shared/Footer/Footer';
import Bulletin from '../../../Components/Purchases/Bulletin board/Bulletin';
import Window from '../../../Components/shared/Popup/Window/Window';
import styles from './Purchases-Сlaims.scss';

const Layout = () => (
  <>
    <Header />
    <MenuPurchaser />
    <TabsComponent />
    <div className={styles.containerGlobal}>
      <div className={styles.leftCard}>
        <div className={styles.flexColumnGlobal}>
          <h3 className={styles.middleTitleGlobal}>Скарга</h3>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <span className={styles.titleTable}>Необґрунтоване відхилення тендерної пропозиції Учасника ТОВ 'Атлант плюс 2018'</span>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Скарга від:</p>
            <p>15.08.20, 12:48</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Дата подачі:</p>
            <p>Оскарження визначення переможця</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Тип:</p>
            <p>UA-2020-04-14-003755-a.b1</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Ідентифікатор:</p>
            <p>ТОВ Атлант плюс 2018</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Переможець:</p>
            <p>20.05.20, 09:23</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Дата прийняття до розгляду АМКУ:</p>
            <p>10.06.20,22:29</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Дата оприлюднення рішення АМКУ:</p>
            <p>20.05.20, 09:23</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Коментар замовника щодо усунення порушення:</p>
            <p>Рішення постійно діючої адміністративної колегії Антимонопольного комітету України з розгляду скарг виконано.</p>
          </div>
          <div className={styles.tableRow}>
            <p className={styles.smallBoldTextGlobal}>Дата виконання рішення Замовником:</p>
            <p>26.06.20, 14:08</p>
          </div>
        </div>
        <div>
          <h3 className={styles.middleTitleGlobal}>Документи автора скарги</h3>
        </div>
        <p className={styles.smallTextGlobal}>
          Як правильно обробляти скарги
          <NavLink
            to="/purchases/claims"
            className={cx(styles.linkGlobal, styles.link)}
          >
            читайте тут
          </NavLink>
        </p>
        <p className={cx(styles.smallTitleGlobal, styles.beforeSales)}>
          АМКУ до закупівлі
        </p>
        <div>
          <span>Скарги не має</span>
        </div>
      </div>
      <Bulletin classNameWrapper={styles.bulletin} />
      <Window title="Завантаження шаблону платіжного документа" />
      <div className={cx(styles.blockComplaint, styles.shadowBlock)}>
        <h3 className={styles.middleTitleGlobal}>Інформація про скаргу</h3>
        <div className={styles.gridAll}>
          <p><span className={styles.redStar}>*</span>Назва</p>
          <textarea className={styles.textArea} />
          <span />
          <span className={styles.smallGrayTextGlobal}>Залишилось n символів</span>
        </div>
        <div className={styles.gridAll}>
          <p><span className={styles.redStar}>*</span>Опис</p>
          <textarea className={styles.textArea} />
          <span />
          <span className={styles.smallGrayTextGlobal}>Залишилось n символів</span>
        </div>
        <div className={styles.documentDownload}>
          <p className={styles.doc}>Документація</p>
          <div className={styles.flexColumnGlobal}>
            <label htmlFor="downloadButton" className={styles.buttonGlobal}>
              Завантажити документ
              <input type="file" id="downloadButton" className={styles.input} />
            </label>
            <span className={styles.smallGrayTextGlobal}>Макстмум 100 файлів, не більше 49 MB кожен.</span>
          </div>
        </div>
      </div>
      <NavLink
        to="/complaints/newComplains"
        className={styles.buttonMainGlobal}
      >
        Подати скаргу на умови закупівлі
      </NavLink>
    </div>
    <Footer />
  </>
);

export default Layout;

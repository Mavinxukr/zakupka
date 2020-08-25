import React from 'react';
import IconLogo from '../../../static/svg/zakupki-logo.svg';
import IconArrow from '../../../static/svg/angle-up-solid.svg';
import IconSearch from '../../../static/svg/search.svg';
import IconMenu from '../../../static/svg/menu.svg';
import IconMail from '../../../static/svg/mail.svg';
import IconPhone from '../../../static/svg/phone.svg';
import styles from './Header.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <IconLogo />
        </div>
        <nav>
          <div className={styles.tel}>
            <IconPhone className={styles.icon} />
            <div className={styles.showContainer}>
              <div className={styles.show}>
                <span className={styles.days}>Пн - Пт, 8:00 - 19:00</span>
                <span className={styles.days}>Сб - Нд, 9:00 - 19:00</span>
                <a href="/">0 800 500 011</a>
                <button type="button" className={styles.buttonCall}>Передзвоніть мені</button>
              </div>
            </div>
          </div>
          <div className={styles.mail}>
            <IconMail className={styles.icon} />
          </div>
          <div className={styles.searchTrade}>
            <IconSearch className={styles.icon} />
            <p>Знайти закупівлю</p>
          </div>
          <div className={styles.otherServices}>
            <IconMenu className={styles.icon} />
          </div>
          <div className={styles.prozorroSales}>
            <p className={styles.content}>
              <h2>Prozorro</h2>
              <span>Державні закупівлі</span>
            </p>
            <IconArrow className={styles.iconArrow} />
            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.content}>
                  <h2>Комерційні тендери</h2>
                  <span>Комерційні закупівлі</span>
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.content}>
                  <h2>Prozorro.Sale</h2>
                  <span>Аукціони</span>
                </p>
              </li>
              <li className={styles.item}>
                <p className={styles.content}>
                  <h2>Prozorro</h2>
                  <span>Державні закупівлі</span>
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.register}>Зареєструватись</div>
          <div className={styles.enter}>
            <span>Увійти до кабінету</span>
          </div>
        </nav>
      </div>
    </div>
  </div>
);

export default Header;

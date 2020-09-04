import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';
import IconCall from '../../../static/svg/phone.svg';
import IconExit from '../../../static/svg/exit.svg';
import IconEnvelope from '../../../static/svg/mail.svg';

const Header = () => (
  <div className={styles.header}>
    <div className={styles.container}>
      <a className={styles.logo} href="/">logo</a>
      <div className={styles.rightBlock}>
        <div className={styles.phoneBlock}>
          <IconCall className={styles.icon} />
          <div className={styles.telContainer}>
            <a
              href="tel: 0 800 500 016"
              className={styles.tel}
            >
              0 800 500 016
            </a>
            <div className={styles.phoneBlockInside}>
              <div className={styles.workDays}>
                <span>
                  Пн - Пт, 8:00 - 19:00
                </span>
                <span>
                  Пн - Пт, 8:00 - 19:00
                </span>
              </div>
              <a
                href="tel: 0 800 500 016"
                className={styles.tel}
              >
                <IconCall className={styles.iconTel} />
                0 800 500 016
              </a>
              <a
                href="tel: +38 067 827 00 11"
                className={styles.tel}
              >
                <IconCall className={styles.iconTel} />
                +38 067 827 00 11
              </a>
              <a
                href="tel: +38 067 827 00 11"
                className={styles.tel}
              >
                <IconCall className={styles.iconTel} />
                +38 067 827 00 11
              </a>
              <a
                href="tel: +38 063 827 00 11"
                className={styles.tel}
              >
                <IconCall className={styles.iconTel} />
                +38 063 827 00 11
              </a>
            </div>
          </div>
          <IconEnvelope className={styles.icon} />
          <a href="email: /" className={styles.mail}>Напишіть нам</a>
        </div>
        <div className={styles.exit}>
          <NavLink
            to="/profile-purchases"
            exact
            className={styles.userRoom}
          >
            Кабінет
          </NavLink>
          <button className={styles.enter} type="button"><IconExit className={styles.icon} /> Вийти</button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;

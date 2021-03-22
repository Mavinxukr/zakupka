import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import IconCall from '../../../static/svg/phone.svg';
import IconExit from '../../../static/svg/exit.svg';
import IconEnvelope from '../../../static/svg/mail.svg';
import { currentUserDataSelector } from '../../../utils/selectors';
import {
  getCurrentUser,
  logoutCurrentUser,
} from '../../../redux/actions/currentUser';
import styles from './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(currentUserDataSelector);
  const history = useHistory();
  console.log('header');
  useEffect(() => {
    dispatch(getCurrentUser({}, cookies.get('tokenProzorro')));
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="/">
          UKRTENDERS
        </a>
        <div className={styles.rightBlock}>
          <div className={styles.phoneBlock}>
            <IconCall className={styles.icon} />
            <div className={styles.telContainer}>
              <a href="tel: 0 800 500 016" className={styles.tel}>
                0 800 500 016
              </a>
              <div className={styles.phoneBlockInside}>
                <div className={styles.workDays}>
                  <span>Пн - Пт, 8:00 - 19:00</span>
                  <span>Пн - Пт, 8:00 - 19:00</span>
                </div>
                <a href="tel: 0 800 500 016" className={styles.tel}>
                  <IconCall className={styles.iconTel} />0 800 500 016
                </a>
                <a href="tel: +38 067 827 00 11" className={styles.tel}>
                  <IconCall className={styles.iconTel} />
                  +38 067 827 00 11
                </a>
                <a href="tel: +38 067 827 00 11" className={styles.tel}>
                  <IconCall className={styles.iconTel} />
                  +38 067 827 00 11
                </a>
                <a href="tel: +38 063 827 00 11">
                  <IconCall className={styles.iconTel} />
                  +38 063 827 00 11
                </a>
              </div>
            </div>
            <IconEnvelope className={styles.icon} />
            <a href="/" className={styles.mail}>
              Напишіть нам
            </a>
          </div>
          {userData && (
            <div className={styles.user}>
              <p>{userData?.user?.name}</p>
            </div>
          )}
          <div className={styles.exit}>
            <NavLink
              to={
                cookies.get('tokenProzorro')
                  ? '/profile_purchases'
                  : '/registration'
              }
              exact
              className={styles.userRoom}
            >
              Кабінет
            </NavLink>
            {cookies.get('tokenProzorro') && (
              <button
                className={styles.enter}
                type="button"
                onClick={() => {
                  dispatch(logoutCurrentUser({}, cookies.get('tokenProzorro')));
                  cookies.remove('tokenProzorro');
                  setTimeout(() => history.push('/'), 800);
                }}
              >
                <IconExit className={styles.icon} /> Вийти
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

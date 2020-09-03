import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import styles from './UserProfile.scss';
import IconBriefcase from '../../static/svg/briefcase-solid.svg';
import IconStar from '../../static/svg/star.svg';
// import IconClock from '../../static/svg/clock.svg';
// import IconAward from '../../static/svg/award.svg';
// import IconCup from '../../static/svg/cup.svg';

const UserProfile = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.buttonTabs}>
          <NavLink
            to="/profile"
            exact
            className={styles.tab}
            activeClassName={styles.tabActive}
          >
            <IconBriefcase className={styles.icon} />
            <span>Всі закупівлі</span>
          </NavLink>
          <NavLink
            to="/profile1"
            exact
            className={styles.tab}
            activeClassName={styles.tabActive}
          >
            <IconStar className={styles.icon} />
            <span>Плани закупівель</span>
          </NavLink>
          {/* <NavLink> */}
          {/*  <IconClock className={styles.icon} /> */}
          {/*  <span>Підписані контракти</span> */}
          {/* </NavLink> */}
          {/* <NavLink> */}
          {/*  <IconAward className={styles.icon} /> */}
          {/*  <span>Підписані контракти</span> */}
          {/* </NavLink> */}
          {/* <NavLink> */}
          {/*  <IconCup className={styles.icon} /> */}
          {/*  <span>Підписані контракти</span> */}
          {/* </NavLink> */}
        </div>
        <div>1</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default UserProfile;

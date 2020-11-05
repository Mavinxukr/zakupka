import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AllComplaintsComponent.scss';
import IconCase from '../../../static/svg/briefcase-solid.svg';
import IconStar from '../../../static/svg/star.svg';
import Filter from '../../shared/Filters/Filters';

const AllComplaintsComponent = () => (
  <>
    <h2 className={styles.middleTitleGlobal}>AllComplaints</h2>
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <NavLink
          to="/complaints"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <IconCase className={styles.iconGlobal} />
          <span className={styles.text}>Скарги в моїх закупівлях</span>
        </NavLink>
        <NavLink
          to="/complaints/tracking"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <IconStar className={styles.iconGlobal} />
          <span>Відстежую (1)</span>
        </NavLink>
        <NavLink
          to="/complaints/all_complains"
          exact
          activeClassName={styles.tabActive}
          className={styles.tab}
        >
          <IconCase className={styles.iconGlobal} />
          <span>Усі скарги (1525)</span>
        </NavLink>
      </div>
      <div className={styles.blockOutside}>
        <Filter />
      </div>
    </div>
  </>
);

export default AllComplaintsComponent;

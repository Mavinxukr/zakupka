import React from 'react';
import styles from './MainMenu.scss';
import IconCar from '../../../static/svg/car-solid.svg';
import IconCog from '../../../static/svg/cog-solid.svg';
import IconInbox from '../../../static/svg/inbox-solid.svg';
import IconUser from '../../../static/svg/user-circle-solid.svg';
import IconBriefcase from '../../../static/svg/briefcase-solid.svg';

const MainMenu = () => (
  <div className={styles.container}>
    <div className={styles.tabs}>
      <div className={`${styles.tab} ${styles.active}`}>
        <IconBriefcase className={styles.icon} />
        <h2 className={styles.title}>Закупки</h2>
      </div>
      <div className={styles.tab}>
        <IconUser className={styles.icon} />
        <h2 className={styles.title}>подписки</h2>
      </div>
      <div className={styles.tab}>
        <IconCar className={styles.icon} />
        <h2 className={styles.title}>профиль</h2>
      </div>
      <div className={styles.tab}>
        <IconCog className={styles.icon} />
        <h2 className={styles.title}>оплаты</h2>
      </div>
      <div className={styles.tab}>
        <IconCog className={styles.icon} />
        <h2 className={styles.title}>Настройки</h2>
      </div>
      <div className={styles.tab}>
        <IconInbox className={styles.icon} />
        <h2 className={styles.title}>уведомление</h2>
      </div>
    </div>
  </div>
);

export default MainMenu;

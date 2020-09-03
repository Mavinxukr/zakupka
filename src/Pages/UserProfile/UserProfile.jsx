import React from 'react';
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs';
import cx from 'classnames';
import Header from '../../Components/shared/Header/Header';
import Footer from '../../Components/shared/Footer/Footer';
import styles from './UserProfile.scss';
import IconBriefcase from '../../static/svg/briefcase-solid.svg';
import IconStar from '../../static/svg/star.svg';
import IconClock from '../../static/svg/clock.svg';
import IconAward from '../../static/svg/award.svg';
import IconCup from '../../static/svg/cup.svg';

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button type="button" className={cx(styles.tab, isActive && styles.tabActive)} onClick={onClick}>
      {children}
    </button>
  );
};

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? <div>{children}</div> : null;
};

const UserProfile = () => (
  <div>
    <Header />
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <Tabs>
          <div className={styles.buttonTabs}>
            <Tab>
              <IconBriefcase className={styles.icon} />
              <span>Всі закупівлі</span>
            </Tab>
            <Tab>
              <IconStar className={styles.icon} />
              <span>Плани закупівель</span>
            </Tab>
            <Tab>
              <IconClock className={styles.icon} />
              <span>Підписані контракти</span>
            </Tab>
            <Tab>
              <IconAward className={styles.icon} />
              <span>Підписані контракти</span>
            </Tab>
            <Tab>
              <IconCup className={styles.icon} />
              <span>Підписані контракти</span>
            </Tab>
          </div>
          <Panel>
            <p>222</p>
          </Panel>
          <Panel>
            <p>Tab2</p>
          </Panel>
          <Panel>
            <p>Tab3</p>
          </Panel>
          <Panel>
            <p>Tab4</p>
          </Panel>
          <Panel>
            <p>tab5</p>
          </Panel>
        </Tabs>
      </div>
    </div>
    <Footer />
  </div>
);

export default UserProfile;

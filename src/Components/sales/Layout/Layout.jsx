import React from 'react';
import cx from 'classnames';
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs';
import styles from './Layout.scss';
import Tab1 from './Tab1/Tab1';
import IconAllergies from '../../../static/svg/briefcase-solid.svg';
import IconList from '../../../static/svg/list.svg';
import IconBriefcase from '../../../static/svg/allergies.svg';

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

const Layout = () => (
  <div className={styles.flexContainer}>
    <Tabs>
      <div className={styles.buttonTabs}>
        <Tab>
          <IconBriefcase className={styles.icon} />
          <span>Все закупки</span>
        </Tab>
        <Tab>
          <IconList className={styles.icon} />
          <span>Планы закупок</span>
        </Tab>
        <Tab>
          <IconAllergies className={styles.icon} />
          <span>Жалобы</span>
        </Tab>
      </div>
      <Panel>
        <Tab1 />
      </Panel>
      <Panel><p>Panel 2</p></Panel>
      <Panel><p>panel 3</p></Panel>
    </Tabs>
  </div>
);

export default Layout;

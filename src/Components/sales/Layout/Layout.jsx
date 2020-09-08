import React, { useEffect } from 'react';
import cx from 'classnames';
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs';
import { useDispatch, useSelector } from 'react-redux';
import { tendersDataSelector, tendersDataReceivedSelector } from '../../../utils/selectors';
import { getTenders } from '../../../redux/actions/tenders';
import styles from './Layout.scss';
import Tab1 from './Tab1/Tab1';
import Tab2 from './Tab2/Tab2';
import Tab3 from './Tab3/Tab3';
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

const Layout = () => {
  const dispatch = useDispatch();
  const tenders = useSelector(tendersDataSelector);
  const isDataReceived = useSelector(tendersDataReceivedSelector);

  useEffect(() => {
    dispatch(getTenders({}));
  }, []);

  if (!isDataReceived) {
    return <div />;
  }

  return (
    <div className={styles.flexContainer}>
      <Tabs>
        <div className={styles.buttonTabs}>
          <Tab>
            <IconBriefcase className={styles.icon} />
            <span>Всі закупівлі</span>
          </Tab>
          <Tab>
            <IconList className={styles.icon} />
            <span>Плани закупівель</span>
          </Tab>
          <Tab>
            <IconAllergies className={styles.icon} />
            <span>Підписані контракти</span>
          </Tab>
        </div>
        <Panel>
          <Tab1 tenders={tenders} />
        </Panel>
        <Panel>
          <Tab2 />
        </Panel>
        <Panel>
          <Tab3 />
        </Panel>
      </Tabs>
    </div>
  );
};

export default Layout;

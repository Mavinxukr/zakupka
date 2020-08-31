import React from 'react';
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs';
import styles from './Layout.scss';
import Tab1 from './Tab1/Tab1';

const Tab = ({ children }) => {
  const { onClick } = useTabState();
  return <button type="button" onClick={onClick}>{children}</button>;
};

const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? <p>{children}</p> : null;
};

const Layout = () => (
  <div className={styles.flexContainer}>
    <Tabs>
      <div>
        <Tab>
          Закупки
        </Tab>
        <Tab>
          закупки 2
        </Tab>
        <Tab>
          закупки 3
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

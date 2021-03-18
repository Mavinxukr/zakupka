import React from 'react';
import styles from './ContainerSmall.scss';

const ContainerSmall = ({ children }) => (
  <div className={styles.ContainerSmall}>
    {children}
  </div>
)

export default ContainerSmall;
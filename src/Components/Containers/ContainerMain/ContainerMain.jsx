import React from 'react';
import styles from './ContainerMain.scss'

const ContainerMain = ({ children }) => {
  return (
    <div className={styles.ContainerMain}>
      {children}
    </div>
  )
}

export default ContainerMain;
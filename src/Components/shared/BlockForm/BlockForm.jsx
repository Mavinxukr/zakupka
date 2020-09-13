import React from 'react';
import styles from './BlockForm.scss';

const BlockForm = ({ children }) => (
  <div className={styles.blockForm}>{children}</div>
);

export default BlockForm;

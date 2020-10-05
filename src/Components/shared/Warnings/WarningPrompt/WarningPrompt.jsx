import React from 'react';
import styles from './WarningPrompt.scss';

const WarningPrompt = ({ value = '' }) => (
  <>
    <p className={styles.blockWarning}>{value}</p>
  </>
);

export default WarningPrompt;

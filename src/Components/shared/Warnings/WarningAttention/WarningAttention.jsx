import React from 'react';
import styles from './WarningAttention.scss';

const WarningAttention = ({ value = '' }) => (
  <>
    <div className={styles.blockWarning}>
      <div className={styles.circle}>!</div>
      <p>{value}</p>
    </div>
  </>
);

export default WarningAttention;

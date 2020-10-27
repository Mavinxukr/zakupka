import React from 'react';
import cx from 'classnames';
import styles from './WarningAttention.scss';

// eslint-disable-next-line no-unused-vars
const WarningAttention = ({ value = '', children, classWrapper }) => (
  <>
    <div className={cx(styles.blockWarning, classWrapper)}>
      { children }
      <p>{value}</p>
    </div>
  </>
);

export default WarningAttention;

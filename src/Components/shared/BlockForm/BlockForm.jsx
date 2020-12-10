import React from 'react';
import cx from 'classnames';
import styles from './BlockForm.scss';

const BlockForm = ({ children, classWrapper }) => (
  <div className={cx(styles.blockForm, classWrapper)}>{children}</div>
);

export default BlockForm;

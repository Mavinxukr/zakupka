import React from 'react';
import cx from 'classnames';
import styles from './Footer.scss';

const Footer = ({ classWrapper }) => (
  <div className={cx(styles.footer, classWrapper)}>
    <div className={styles.container}>
      <p>© company, 2020</p>
      <p>Акредитований учасник електронної системи державних закупівель України ProZorroo</p>
    </div>
  </div>

);

export default Footer;

import React from 'react';
import cx from 'classnames';
import IconClose from '../../../static/svg/close.svg';
import styles from './Popup.scss';

const Popup = ({ children, isOpenPopup, classNameWrapperr }) => (
  <div className={cx(styles.Popup, classNameWrapperr)}>
    <div className={styles.bg} />
    <div className={styles.popupContent}>
      <button type="button" className={styles.close} onClick={() => isOpenPopup(false)}>
        <IconClose />
      </button>
      {children}
    </div>
  </div>
);

export default Popup;

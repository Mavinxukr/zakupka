import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Bulletin.scss';
import IconStart from '../../../static/svg/star.svg';
import IconEye from '../../../static/svg/eye.svg';

const Bulletin = () => {
  const [activeBtn, isActiveBtn] = useState(false);

  const classNameButton = cx(styles.iconGlobal, {
    [styles.activeIconGlobal]: activeBtn,
  });

  return (
    <>
      <div className={styles.card}>
        <ul className={styles.header}>
          <li className={cx(styles.smallBoldTextGlobal, styles.sum)}>470 000 з ПДВ</li>
          <li className={styles.status}>Закупівля не відбулась</li>
        </ul>
        <p className={styles.footer}>
          <button
            type="button"
            className={styles.smallTextGlobal}
            onClick={() => isActiveBtn(!activeBtn)}
          >
            <IconStart className={classNameButton} />
            <span>Додати в обране</span>
          </button>
          <div className={styles.content}>
            <span><IconEye className={styles.iconGlobal} /> Переглядів закупівлі: 4</span>
            <p>
              Орієнтовна кількість переглядів у системі Prozorro на основі відкритої інформації
            </p>
          </div>
        </p>
      </div>
    </>
  );
};

export default Bulletin;

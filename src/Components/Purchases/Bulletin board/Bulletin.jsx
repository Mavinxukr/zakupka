import React, { useState } from 'react';
import cx from 'classnames';
import styles from './Bulletin.scss';
import IconStar from '../../../static/svg/star.svg';
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
        <div className={styles.footer}>
          <div className={styles.icons}>
            <IconStar className={classNameButton} />
            <IconEye className={styles.iconGlobal} />
          </div>
          <div className={styles.text}>
            <button
              type="button"
              className={styles.smallTextGlobal}
              onClick={() => isActiveBtn(!activeBtn)}
            >
              Додати в обране
            </button>
            <div className={styles.content}>
              <span> Переглядів закупівлі: 4</span>
              <p>
                Орієнтовна кількість переглядів у системі Prozorro на основі відкритої інформації
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bulletin;

import React, { useState } from 'react';
import cookies from 'js-cookie';
import cx from 'classnames';
import IconStart from '../../../static/svg/star.svg';
import IconClock from '../../../static/svg/clock.svg';
import IconPen from '../../../static/svg/pen.svg';
import IconManager from '../../../static/svg/manager.svg';
import IconChat from '../../../static/svg/chat.svg';

import styles from './Card.scss';

const Card = () => {
  const [buttonActive, isButtonActive] = useState(false);
  const [buttonPlane, isButtonPlane] = useState(false);
  const [buttonManager, isButtonManager] = useState(false);

  return (
    <div className={styles.bgWhite}>
      <div className={styles.titleContainer}>
        <div className={styles.leftBlock}>
          <a href="/">[ТЕСТУВАННЯ] Назва зкупівлі 1 </a>
          <span className={styles.contentText}>
            ЗамовникТест
          </span>
          <span className={styles.contentText}>
            О компании
          </span>
          <span className={styles.contentText}>
            ID: UA-2020-08-31-000045-a
          </span>
        </div>
        <div className={styles.middleBlock}>
          <div className={styles.sumBlock}>
            <span className={styles.sum}>25 000,00 ₴</span>
            <span className={styles.data}>c НДС</span>
          </div>
          <div>
            <span className={styles.contentText}>
              Объявлена::
            </span>
            <span className={styles.data}>
              31 серп., 11:19
            </span>
            <span className={styles.contentText}>
              Завершение периода уточнений:
            </span>
            <span className={styles.data}>
              31 серп., 11:45
            </span>
            <span className={styles.contentText}>
              Прием предложений:
            </span>
            <span className={styles.data}>
              31 серп., 11:19 – 31 серп., 11:55
            </span>
          </div>
        </div>
        <div className={styles.rightBLock}>
          <span className={styles.period}>
            Період уточнень
          </span>
          <span className={styles.data}>
            Осталось: --
          </span>
          <button
            type="button"
            className={cx(styles.iconBlock, styles.data)}
            onClick={() => isButtonActive(!buttonActive)}
          >
            <IconStart className={cx(styles.iconStar, {
              [styles.active]: buttonActive,
            })}
            />
            {buttonActive ? (<p>Видалити</p>) : (<p>Добавить в избранное</p>)}
          </button>
          {cookies.get('tokenProzorro') && (
          <>
            <button
              className={cx(styles.iconBlock, styles.data)}
              type="button"
              onClick={() => isButtonPlane(!buttonPlane)}
            >
              <IconClock className={cx(styles.iconStar, {
                [styles.active]: buttonPlane,
              })}
              />
              {buttonPlane ? (<p>Планую взяти участь</p>) : (<p>Запланувати участь</p>)}
            </button>
            <button
              className={cx(styles.iconBlock, styles.data)}
              type="button"
            >
              <IconPen className={styles.iconStar} /> Додати нотатку
            </button>
            <div>
              <button
                className={cx(styles.iconBlock, styles.data)}
                type="button"
                onClick={() => isButtonManager(!buttonManager)}
              >
                <IconManager className={styles.iconStar} /> Призначити менеджеру
              </button>
              {buttonManager && (
              <div>show</div>
              )}
            </div>
            <button
              className={cx(styles.iconBlock, styles.data)}
              type="button"
            >
              <IconChat className={styles.iconStar} /> Почати обговорення
            </button>
          </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;

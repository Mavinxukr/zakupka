import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import IconDown from '../../../../static/svg/rowDown.svg';
import IconUp from '../../../../static/svg/rowUp.svg';
import WarningAttention from '../../../shared/Warnings/WarningAttention/WarningAttention';
import styles from './AnswerQwestion.scss';

const AnswerQuestions = () => (
  <>
    <h4 className={styles.middleTitleGlobal}>Питання та відповіді</h4>
    <h3 className={styles.smallTitleGlobal}>Запитання до всієї закупівлі</h3>
    <div className={cx(styles.questionBlock, styles.shadowBlock)}>
      <IconDown className={styles.iconGlobal} />
      <IconUp className={styles.iconGlobal} />
      <div className={styles.blockState}>
        <span className={styles.smallBoldTextGlobal}>Борошно</span>
        <span className={styles.smallGrayTextGlobal}>26.03.20 13:59</span>
      </div>
      <WarningAttention value="Немає відповіді" classWrapper={styles.notAnswer} />
      <WarningAttention value="Перегляньте відповідь" classWrapper={styles.isAnswer} />
    </div>
    <div className={styles.answerBlock}>
      <span>Борошно має бути лише вищого ґатунку?</span>
      <textarea className={styles.textArea} name="area" maxLength="6000" />
      <span className={styles.smallGrayTextGlobal}>Залишилось 6000 символів</span>
      <div>
        <button type="submit" className={cx(styles.buttonMainGlobal, styles.buttonSubmit)}>Відповісти</button>
        <NavLink
          to="/purchases/questions/ask"
          exact
          className={styles.buttonGlobal}
        >
          Поставити запитання
        </NavLink>
      </div>
    </div>
  </>
);

export default AnswerQuestions;

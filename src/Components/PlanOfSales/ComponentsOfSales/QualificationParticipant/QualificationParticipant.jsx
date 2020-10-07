import React from 'react';
import WarningAttention from '../../../shared/Warnings/WarningAttention/WarningAttention';
import IconCheck from '../../../../static/svg/check.svg';
import styles from './QualificationParticipant.scss';

const QualificationParticipant = () => (
  <>
    <div className={styles.containerQualification}>
      <h4 className={styles.middleTitleGlobal}>Кваліфікація учасника</h4>
      <WarningAttention
        classWrapper={styles.one}
        value="Учасник підтверджений.Завантажте підписаний сторонами договір."
      >
        <IconCheck className={styles.icon} />
      </WarningAttention>
    </div>
  </>
);

export default QualificationParticipant;

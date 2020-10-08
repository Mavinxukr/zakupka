import React from 'react';
import WarningAttention from '../../../shared/Warnings/WarningAttention/WarningAttention';
import IconCheck from '../../../../static/svg/check.svg';
import IconClip from '../../../../static/svg/clip.svg';
import styles from './QualificationParticipant.scss';

const QualificationParticipant = () => (
  <>
    <div className={styles.containerQualification}>
      <h4 className={styles.middleTitleGlobal}>Кваліфікація учасника</h4>
      <WarningAttention
        classWrapper={styles.wrapper}
        value="Учасник підтверджений.Завантажте підписаний сторонами договір."
      >
        <IconCheck className={styles.icon} />
      </WarningAttention>
      <WarningAttention
        value='Залишився останній крок. Натисніть "Завершити процедуру".'
        classWrapper={styles.wrapperWidth}
      >
        <span className={styles.warningGlobal}>!</span>
      </WarningAttention>
      <div className={styles.tableContainer}>
        <div className={styles.tableColumn}>
          <p className={styles.smallTitleGlobal}>Учасник</p>
          <ul>
            <li className={styles.upperCase}>товариство з обмеженною відповідальністю</li>
            <li className={styles.normalBlueTextGlobal}>Про компанию</li>
            <li>Повідомлення про намір підписати договір сформовано: 06.04.20. 15:25 <span className={styles.normalBlueTextGlobal}>Переглянути</span> </li>
            <li>
              <WarningAttention
                value="з ЕЦПЛУП"
                classWrapper={styles.iconGreen}
              >
                <IconCheck className={styles.icon} />
              </WarningAttention>
            </li>
            <li className={styles.smallGrayTextGlobal}>ID: 7098798123bfv90898vcb8</li>
          </ul>
        </div>
        <div className={styles.tableColumn}>
          <p className={styles.smallTitleGlobal}>Остаточна пропозиція</p>
          <ul>
            <li>15 990 грн з ПДВ</li>
          </ul>
        </div>
        <div className={styles.tableColumn}>
          <p className={styles.smallTitleGlobal}>Статус</p>
          <ul>
            <li>Пропозицію прийнято</li>
          </ul>
        </div>
        <div className={styles.tableColumn}>
          <p className={styles.smallTitleGlobal}>Документи</p>
          <IconClip className={styles.iconGlobalGreen} />
        </div>
      </div>
    </div>
  </>
);

export default QualificationParticipant;

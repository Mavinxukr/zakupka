import React from 'react';
import { useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import cx from 'classnames';
import Popup from '../../../shared/Popup/Popup';
import ClassifierDK from '../../../Classifier/Classifier';
import ClassifierKEKV from '../../../ClassifierCode/ClassifierCode';
import {
  createPlanReceivedSelector,
  createPlanSelector,
} from '../../../../utils/selectors';
import styles from './ClassifierBlock.scss';

const ClassifierBlock = () => {
  const [value, setValue] = React.useState('dk');
  const [openPopup, isOpenPopup] = React.useState(false);
  const [openPopupKEKV, isOpenPopupKEKV] = React.useState(false);
  const [dataDK, isDataDK] = React.useState('');
  const [disabled, setDisabled] = React.useState({
    dk: false,
    kekv: true,
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    console.log(value);
    if (value !== 'dk') {
      setDisabled((prev) => ({ ...prev, dk: true, kekv: false }));
    } else {
      setDisabled((prev) => ({ ...prev, dk: false, kekv: true }));
    }
  }, [value]);

  const [classiferCodeList, setClassiferCodeList] = React.useState([]);
  const handleDelete = (ev) => console.log(ev.target.parentNode.parentNode);
  const popupClickHandler = () => {
    console.log(dataDK);
  };
  const planData = useSelector(createPlanSelector);
  const isPlanData = useSelector(createPlanReceivedSelector);
  console.log(planData, isPlanData);

  React.useEffect(() => {
    console.log(classiferCodeList);
  }, [classiferCodeList]);

  return (
    <div className={styles.classifiersBlock}>
      {openPopup && (
        <Popup isOpenPopup={isOpenPopup}>
          <div className={styles.popupHeader}>
            <h3>Класифікатор ДК 021:2015 </h3>
          </div>
          <div className={styles.treeContainer}>
            <ClassifierDK radio isDataDK={isDataDK} />
          </div>
          <div className={styles.buttonsBlock}>
            <button
              type="button"
              onClick={popupClickHandler}
              className={styles.buttonMainGlobal}
            >
              Вибрати
            </button>
            <button
              type="button"
              onClick={() => isOpenPopup((prev) => !prev)}
              className={styles.buttonGlobal}
            >
              Відмінити
            </button>
          </div>
        </Popup>
      )}
      {openPopupKEKV && (
        <Popup isOpenPopup={isOpenPopupKEKV}>
          <div className={styles.popupHeader}>
            <h3>Класифікатор КЕКВ</h3>
          </div>
          <div className={styles.treeContainer}>
            <ClassifierKEKV listBuilder={setClassiferCodeList} />
          </div>
          <div className={styles.buttonsBlock}>
            <button type="button" className={styles.buttonMainGlobal}>
              Вибрати
            </button>
            <button type="button" className={styles.buttonGlobal}>
              Відмінити
            </button>
          </div>
        </Popup>
      )}
      <FormControl component="fieldset">
        <FormLabel component="legend">Класифікатор</FormLabel>
        <RadioGroup
          aria-label="classifier-radio"
          name="classifier-radio"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="dk"
            control={<Radio />}
            label="ДК 021:2015"
          />
          <FormControlLabel value="kekv" control={<Radio />} label="КЕКВ" />
        </RadioGroup>
      </FormControl>
      <div className={cx(styles.buttonsBlock, styles.flexStart)}>
        <Button
          variant="outlined"
          disabled={disabled.dk}
          onClick={() => isOpenPopup(true)}
        >
          ДК 021:2015
        </Button>
        <Button
          variant="outlined"
          disabled={disabled.kekv}
          onClick={() => isOpenPopupKEKV(true)}
        >
          КЕКВ
        </Button>
      </div>
      <div className={styles.classifiers}>
        {classiferCodeList.map((item) => (
          <Chip
            key={item.key}
            label={item.value}
            onDelete={handleDelete}
            color="primary"
          />
        ))}
      </div>
    </div>
  );
};

export default ClassifierBlock;

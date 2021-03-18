import React, { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getClassification } from '../../../../redux/actions/classification';

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import {
  // createPlanReceivedSelector,
  // createPlanSelector,
  classificationSelector,
  classificationDataReceivedSelector,
} from '../../../../utils/selectors';
import styles from './ClassificationsBlock.scss';
import { CreatPlanContext } from '../../../../context/CreatPlanContext';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    display: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  progress: {
    zIndex: 9999,
  },
}));

const ClassificationsBlock = () => {
  const planContext = React.useContext(CreatPlanContext);
  const [value, setValue] = React.useState('dk');
  const [openDK, setOpenDK] = React.useState(false);
  const [openPopupKEKV, isOpenPopupKEKV] = React.useState(false);
  const [disabled, setDisabled] = React.useState({
    dk: false,
    kekv: true,
  });
  const dispatch = useDispatch();
  const state = useSelector(classificationSelector);
  const isReceived = useSelector(classificationDataReceivedSelector);

  React.useEffect(() => {
    dispatch(getClassification({}));
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const PopUpClassificationDK = React.lazy(() =>
    import('./PopUpClassificationDK/PopUpClassificationDK')
  );

  React.useEffect(() => {
    if (value !== 'dk') {
      setDisabled((prev) => ({ ...prev, dk: true, kekv: false }));
    } else {
      setDisabled((prev) => ({ ...prev, dk: false, kekv: true }));
    }
  }, [value]);

  const classes = useStyles();

  return (
    <div className={styles.classifiersBlock}>
      {openDK && (
        <Suspense
          fallback={
            <Backdrop className={classes.backdrop} open={open}>
              <CircularProgress className={classes.progress} color="inherit" />
            </Backdrop>
          }
        >
          <PopUpClassificationDK
            status={openDK}
            opening={setOpenDK}
            data={state}
          ></PopUpClassificationDK>
        </Suspense>
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
          onClick={() => setOpenDK(true)}
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

export default ClassificationsBlock;

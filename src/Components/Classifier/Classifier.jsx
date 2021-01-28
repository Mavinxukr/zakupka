import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getClassification } from '../../redux/actions/classification';
import {
  classificationSelector,
  classificationDataReceivedSelector,
} from '../../utils/selectors';
import Tree from './Tree/Tree';
import { data } from './data';
import styles from './Classifier.scss';

const ClassifierDK = ({ isDataDK, radio }) => {
  const dispatch = useDispatch();
  const state = useSelector(classificationSelector);
  const isReceived = useSelector(classificationDataReceivedSelector);

  React.useEffect(() => {
    dispatch(getClassification({}));
  }, []);

  return (
    <>
      <div className={styles.containerMain}>
        <div className={styles.containerInfo}>
          <Tree isDataDK={isDataDK} radio={radio} data={data.rootNodes} />
        </div>
      </div>
    </>
  );
};

ClassifierDK.propTypes = {
  isDataDK: PropTypes.func,
  radio: PropTypes.bool,
};

export default ClassifierDK;

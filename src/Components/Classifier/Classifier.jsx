import React from 'react';
import PropTypes from 'prop-types';
import Tree from './Tree/Tree';
import { data } from './data';
import styles from './Classifier.scss';

const Classifier = ({ isDataDK, radio }) => (
  <>
    <div className={styles.containerMain}>
      <div className={styles.containerInfo}>
        <Tree isDataDK={isDataDK} radio={radio} data={data.rootNodes} />
      </div>
    </div>
  </>
);

Classifier.propTypes = {
  isDataDK: PropTypes.func,
  radio: PropTypes.bool,
};

export default Classifier;

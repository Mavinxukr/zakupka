import React from 'react';
import cx from 'classnames';
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
      <div>
        <button type="button" className={cx(styles.buttonMainGlobal, styles.button)}>Вибрати</button>
        <button type="button" className={cx(styles.buttonGlobal, styles.button)}>Скасувати</button>
      </div>
    </div>
  </>
);

Classifier.propTypes = {
  isDataDK: PropTypes.func,
  radio: PropTypes.bool,
};

export default Classifier;

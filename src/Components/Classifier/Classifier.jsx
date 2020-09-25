import React from 'react';
import cx from 'classnames';
import Tree from './Tree/Tree';
import { data } from './data';
import styles from './Classifier.scss';

const Classifier = () => (
  <>
    <div className={styles.containerMain}>
      <input
        type="text"
        className={styles.input}
        placeholder="Знайти (наприклад: паливо, продукти)"
      />
      <div className={styles.containerInfo}>
        <Tree data={data.rootNodes} />
      </div>
      <div>
        <button type="button" className={cx(styles.buttonMainGlobal, styles.button)}>Вибрати</button>
        <button type="button" className={cx(styles.buttonGlobal, styles.button)}>Скасувати</button>
      </div>
    </div>
  </>
);

export default Classifier;

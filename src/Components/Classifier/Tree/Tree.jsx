import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconPlus from '../../../static/img/expand_plus.gif';
import IconMinus from '../../../static/img/expand_minus.gif';
import styles from './Tree.scss';

const Tree = ({ data, classNameWrapperr, isDataDK }) => (
  <>
    {data.map((item) => (
      <div key={item.data.code}>
        <div className={cx(styles.showBlock, classNameWrapperr)}>
          {item?.children?.length > 0 && (
            <button onClick={(e) => e.target.parentNode.parentNode.classList.toggle(styles.open)} type="button" className={styles.button}>
              <img src={IconPlus} alt="plus" className={styles.img} />
              <img src={IconMinus} alt="minus" className={styles.img} />
            </button>
          )}
          <label className={styles.label} htmlFor={item.data.code}>
            <input id={item.data.code} type="checkbox" value={item.data.name} onClick={(e) => isDataDK(e.target.value)} />
            {' '}{item.data.code} - {item.data.name}
          </label>
        </div>
        <div
          className={styles.sub}
        >
          {item?.children?.length > 0 && (
            <Tree key={item.children.code} classNameWrapperr={styles.children} data={item.children} isDataDK={isDataDK} />
              )}
        </div>
      </div>
    ))}
  </>
);

Tree.propTypes = {
  classNameWrapperr: PropTypes.string,
  data: PropTypes.array,
  isDataDK: PropTypes.func,
};

export default Tree;

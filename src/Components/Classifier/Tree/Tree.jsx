import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconPlus from '../../../static/img/expand_plus.gif';
import IconMinus from '../../../static/img/expand_minus.gif';
import styles from './Tree.scss';

const Tree = ({ data, classNameWrapper }) => (
  <>
    {data.map((item) => (
      <div key={item.data.code}>
        <div className={cx(styles.showBlock, classNameWrapper)}>
          {item?.children?.length > 0 && (
            <button onClick={(e) => e.target.parentNode.parentNode.classList.toggle(styles.open)} type="button" className={styles.button}>
              <img src={IconPlus} alt="plus" className={styles.img} />
              <img src={IconMinus} alt="minus" className={styles.img} />
            </button>
          )}
          <label className={styles.label} htmlFor={item.data.code}>
            <input id={item.data.code} type="checkbox" />
            {' '}{item.data.code} - {item.data.name}
          </label>
        </div>
        <div
          className={styles.sub}
        >
          {item?.children?.length > 0 && (
            <Tree key={item.children.code} classNameWrapper={styles.children} data={item.children} />
              )}
        </div>
      </div>
    ))}
  </>
);

Tree.propTypes = {
  classNameWrapper: PropTypes.string,
  data: PropTypes.array,
};

export default Tree;

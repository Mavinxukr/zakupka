import React from 'react';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem/TreeItem';
// import IconPlus from '../../../static/img/expand_plus.gif';
// import IconMinus from '../../../static/img/expand_minus.gif';
// import styles from './Tree.scss';
// classNameWrapperr, isDataDK, radio,

const Tree = ({ data }) => {
  console.log(data);
  return (
    <>
      {
        data.map((item) => {
          const { data: { name, code }, children } = item;

          return (
            <TreeItem key={code} name={name} code={code} data={children} />
          );
        })
      }
      {/* {data.map((item) => (
        <div key={item.data.code}>
          <div className={cx(styles.showBlock, classNameWrapperr)}>
            {item?.children?.length > 0 && (
              <button onClick={(e) => e.target.parentNode.parentNode.classList.toggle(styles.open)} type="button" className={styles.button}>
                <img src={IconPlus} alt="plus" className={styles.img} />
                <img src={IconMinus} alt="minus" className={styles.img} />
              </button>
            )}
            <label className={styles.label} htmlFor={item.data.code}>
              <input id={item.data.code} name={radio ? 'one' : item.data.name} type={radio ? 'radio' : 'checkbox'} value={item.data.name} onClick={(e) => isDataDK(e.target.value)} />
              {' '}{item.data.code} - {item.data.name}
            </label>
          </div>
          {radio ? (
            <div
              className={styles.sub}
            >
              {item?.children?.length > 0 && (
                <Tree radio key={item.children.code} classNameWrapperr={styles.children} data={item.children} isDataDK={isDataDK} />
              )}
            </div>
          ) : (
            <div
              className={styles.sub}
            >
              {item?.children?.length > 0 && (
                <Tree key={item.children.code} classNameWrapperr={styles.children} data={item.children} isDataDK={isDataDK} />
              )}
            </div>
          )}
        </div>
      ))} */}
    </>
  );
};

Tree.propTypes = {
  data: PropTypes.array,
  // classNameWrapperr: PropTypes.string,
  // isDataDK: PropTypes.func,
  // radio: PropTypes.bool,
};

export default Tree;

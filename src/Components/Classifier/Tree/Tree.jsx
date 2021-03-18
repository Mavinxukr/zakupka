import React from 'react';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem/TreeItem';
// import IconPlus from '../../../static/img/expand_plus.gif';
// import IconMinus from '../../../static/img/expand_minus.gif';
// import styles from './Tree.scss';
// classNameWrapperr, isDataDK, radio,

<<<<<<< HEAD
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
=======
const Tree = ({ data, classNameWrapperr, event, radio }) => {
  return (
    <>
      {data.map((item) => {
        console.log('new input');

        return (
          <div key={item.data.code}>
            <div className={cx(styles.showBlock, classNameWrapperr)}>
              {item?.children?.length > 0 && (
                <button
                  onClick={(e) =>
                    e.target.parentNode.parentNode.classList.toggle(styles.open)
                  }
                  type="button"
                  className={styles.button}
                >
                  <img src={IconPlus} alt="plus" className={styles.img} />
                  <img src={IconMinus} alt="minus" className={styles.img} />
                </button>
              )}
              <label className={styles.label} htmlFor={item.data.code}>
                <input
                  id={item.data.code}
                  name={radio ? 'one' : item.data.name}
                  type={radio ? 'radio' : 'checkbox'}
                  value={item.data.name}
                  onClick={(e) => event(e)}
                />{' '}
                {item.data.code} - {item.data.name}
              </label>
            </div>
            {radio ? (
              <div className={styles.sub}>
                {item?.children?.length > 0 && (
                  <Tree
                    radio
                    key={item.children.code}
                    classNameWrapperr={styles.children}
                    data={item.children}
                    event={event}
                  />
                )}
              </div>
            ) : (
              <div className={styles.sub}>
                {item?.children?.length > 0 && (
                  <Tree
                    key={item.children.code}
                    classNameWrapperr={styles.children}
                    data={item.children}
                    event={event}
                  />
                )}
              </div>
>>>>>>> 33be219fed7b368257607c6e7cc8964914daf64d
            )}
            <label className={styles.label} htmlFor={item.data.code}>
              <input id={item.data.code} name={radio ? 'one' : item.data.name} type={radio ? 'radio' : 'checkbox'} value={item.data.name} onClick={(e) => isDataDK(e.target.value)} />
              {' '}{item.data.code} - {item.data.name}
            </label>
          </div>
<<<<<<< HEAD
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
=======
        );
      })}
>>>>>>> 33be219fed7b368257607c6e7cc8964914daf64d
    </>
  );
};

Tree.propTypes = {
  data: PropTypes.array,
<<<<<<< HEAD
  // classNameWrapperr: PropTypes.string,
  // isDataDK: PropTypes.func,
  // radio: PropTypes.bool,
=======
  event: PropTypes.func,
  radio: PropTypes.bool,
>>>>>>> 33be219fed7b368257607c6e7cc8964914daf64d
};

export default Tree;

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import IconPlus from '../../../static/img/expand_plus.gif';
import IconMinus from '../../../static/img/expand_minus.gif';
import styles from './Tree.scss';

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
            )}
          </div>
        );
      })}
    </>
  );
};

Tree.propTypes = {
  classNameWrapperr: PropTypes.string,
  data: PropTypes.array,
  event: PropTypes.func,
  radio: PropTypes.bool,
};

export default Tree;

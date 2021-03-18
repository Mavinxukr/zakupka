import React, { useState } from 'react';
import IconPlus from '../../../../static/img/expand_plus.gif';
import IconMinus from '../../../../static/img/expand_minus.gif';
import styles from './TreeItem.scss';

const TreeItem = ({
  code, name, data,
}) => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const handleButton = () => {
    setToggleIcon((prevState) => !prevState);
    setToggleAccordion((prevState) => !prevState);
  };

  return (
    <div>
      {
        data.length > 0 ? (
          <button type="button" onClick={handleButton}>
            <img src={toggleIcon ? IconPlus : IconMinus} alt={toggleIcon ? 'показати' : 'приховати'} />
          </button>
        ) : null
      }
      <label className={data.length > 0 ? null : styles.itemMarginLeft} htmlFor="name">
        <input type="checkbox" name="name" />
        {`${code} ${name}`}
      </label>
      {toggleAccordion ? (
        <div className={styles.accordion}>
          {
            data && data.map((item) => {
              const { data: { name: nameChild, code: codeChild }, children } = item;
              return (
                <TreeItem key={codeChild} name={nameChild} code={codeChild} data={children} />
              );
            })
          }
        </div>
      ) : null}
    </div>
  );
};

export default TreeItem;

import React, { useEffect, useState } from 'react';
import {
  AiOutlineMinusSquareIcon,
  AiOutlinePlusSquareIcon,
  TreeItemButton,
  TreeItemContainer
} from './TreeItem.styled';
import Checkbox from '../../../checkbox/Checkbox.component';

const TreeItem = ({
  code, name, data, checked = false, disabled = false
}) => {
  const [toggleIcon, setToggleIcon] = useState(true);
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked, disabled])

  const handleButton = () => {
    setToggleIcon((prevState) => !prevState);
    setToggleAccordion((prevState) => !prevState);
  };

  return (
    <TreeItemContainer>
      {
        data.length > 0 ? (
          <TreeItemButton type="button" onClick={handleButton}>
            {toggleIcon ?
              <AiOutlinePlusSquareIcon fontSize="20px" />
              : <AiOutlineMinusSquareIcon fontSize="20px" />}
          </TreeItemButton>
        ) : null
      }
      <Checkbox
        name={name}
        label={`${code} ${name}`}
        checked={isChecked}
        disabled={disabled}
        ml="5px"
        mb="3px"
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {toggleAccordion ? (
        <div>
          {
            data && data.map((item) => {
              const { data: { name: nameChild, code: codeChild }, children } = item;
              console.log(isChecked);
              return (
                <TreeItem
                  key={codeChild}
                  name={nameChild}
                  code={codeChild}
                  data={children}
                  checked={isChecked}
                  disabled={isChecked} />
              );
            })
          }
        </div>
      ) : null}
    </TreeItemContainer>
  );
};

export default TreeItem;

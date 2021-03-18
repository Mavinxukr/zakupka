import React from 'react';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem/TreeItem';

const Tree = ({ data }) => {
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
    </>
  );
};

Tree.propTypes = {
  data: PropTypes.array,
};

export default Tree;

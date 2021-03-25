import React from 'react';
import TreeItem from './TreeItem/TreeItem';

const Tree = ({ data}) => {
  return (
    <div>
      {
        data.map((item) => {
          const { data: { name, code }, children } = item;
          return (
            <TreeItem key={code} name={name} code={code} data={children} />
          );
        })
      }
    </div>
  );
};

export default Tree;

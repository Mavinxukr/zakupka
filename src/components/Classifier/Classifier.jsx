import React from 'react';
import Tree from './Tree/Tree';
import { data } from './data';

const ClassifierDK = () => {
  const datastringify = JSON.stringify(data)
  console.log();
  return <Tree data={JSON.parse(datastringify).rootNodes}/>
};

export default ClassifierDK;

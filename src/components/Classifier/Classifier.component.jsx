import React from 'react';
import Tree from './tree/Tree.component';
import { data } from './data';

const ClassifierDK = () => {
  const datastringify = JSON.stringify(data)
  return <Tree data={JSON.parse(datastringify).rootNodes}/>
};

export default ClassifierDK;

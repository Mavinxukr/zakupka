import React, { forwardRef } from 'react';
import Tree from './Tree/Tree.component';
import { ClassifierContainer } from './Classifier.styled'
import { data } from './data';
import Modal from '../modal/Modal.component';

const Classifier = forwardRef((props, ref) => {
  const datastringify = JSON.stringify(data)
  return (
    <Modal ref={ref}>
      <ClassifierContainer {...props}>
        <Tree data={JSON.parse(datastringify).rootNodes} />
      </ClassifierContainer>
    </Modal>
  )
})

export default Classifier;

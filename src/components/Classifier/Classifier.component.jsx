import React, { forwardRef } from 'react';
import Tree from './Tree/Tree.component';
import { ClassifierContainer } from './Classifier.styled'
import { data } from './data';
import Modal from '../modal/Modal.component';
import Layer from '../layer/Layer.component';

const Classifier = forwardRef((props, ref) => {
  const datastringify = JSON.stringify(data)
  return (
    <Modal ref={ref}>
      <ClassifierContainer {...props}>
        <Layer>
          <Tree data={JSON.parse(datastringify).rootNodes} />
        </Layer>
      </ClassifierContainer>
    </Modal>
  )
})

export default Classifier;

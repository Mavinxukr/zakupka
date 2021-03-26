import React from 'react';
import {
  LayerContainer
} from './Layer.styled';

const Layer = ({ children }) => {
  return (
    <LayerContainer>
      {children}
    </LayerContainer>
  )
}

export default Layer;
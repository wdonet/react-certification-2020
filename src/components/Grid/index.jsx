import React from 'react';
import { GridContainer, List } from './styled';

const Grid = ({ gridItems }) => {
  return (
    <GridContainer>
      <List> {gridItems}</List>
    </GridContainer>
  );
};

export default Grid;

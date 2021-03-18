import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../../providers/AppContext';

const StyledDiv = styled.div`
  overflow: hidden;
  height: 345px;
  width: 345px;
  margin: 8px;
  box-shadow: 2px 2px 2px 2px ${({ theme }) => theme.color.surfaceShadow};
  border-radius: 5px;
  background: ${({ theme }) => theme.color.surface};

  &:hover {
    background: lightgray;
    cursor: pointer;
  }
`;

const Card = (props) => {
  const { onClick } = props;
  const { theme } = useContext(AppContext);
  return (
    <StyledDiv onClick={onClick} role={props.role || ''} theme={theme}>
      {props.children}
    </StyledDiv>
  );
};

export default Card;

import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../../providers/AppContext';

const StyledCardDescription = styled.p`
  font-weight: lighter;
  color: ${ ({theme}) => theme.color.fontSecondary };
`;

const CardDescription = (props) => {
  const { theme } = useContext(AppContext);
  return (
    <StyledCardDescription theme={theme} role={props.role || ''}>
      {props.children}
    </StyledCardDescription>
  );
};

export default CardDescription;

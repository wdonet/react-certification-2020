import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../../providers/AppContext';

const StyledCardTitle = styled.h2`
  font-weight: normal;
  font-size: 1.25rem;
  color: ${ ({theme}) => theme.color.fontPrimary }
`;

const CardTitle = (props) => {
  const { theme } = useContext(AppContext);
  const { children, title } = props;
  return <StyledCardTitle title={title} theme={theme}>{children}</StyledCardTitle>;
};

export default CardTitle;

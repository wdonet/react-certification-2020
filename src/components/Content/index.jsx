import React from 'react';
import styled from 'styled-components';
import Detail from '../Detail';

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;

const TopTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4em;
  margin: 10px;
`;

const Content = ({ children , title}) => {

  let content =  <StyledContent >
      <TopTitle>{title}</TopTitle>
        {children}
      </StyledContent>;
  
  return (
    <>
      { content }
    </>
  );
};

export default Content;

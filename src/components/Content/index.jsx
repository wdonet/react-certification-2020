import React from 'react';
import styled from 'styled-components';
import Detail from '../Detail';

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`;

const TopTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 4em;
  margin: 10px;
`;

const Content = ({ children , inDetail, gotodetail, detailVideoId ,detailTitle , detailDescription}) => {

  let content = inDetail ? (
    <Detail gotodetail={gotodetail} detailVideoId={detailVideoId} detailTitle={detailTitle} detailDescription={ detailDescription}/>
  ) : <StyledContent >
      <TopTitle>Welcome to the Challenge!</TopTitle>
        {children}
      </StyledContent>;
  
  return (
    <>
      { content }
    </>
  );
};

export default Content;

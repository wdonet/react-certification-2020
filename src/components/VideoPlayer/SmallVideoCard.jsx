import React from 'react';
import styled from 'styled-components';

const StyledSmallVideoCard = styled.div`
  display: flex;
  padding: 4px;
  margin: 4px;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
`;

const StyledSmallVideoCardDescription = styled.div`
  height: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding: 5px;
  box-sizing: border-box;
`;

const SmallVideoCard = ({ video, onClick }) => {
  const { thumbnails, title, description } = video.snippet;
  return (
    <StyledSmallVideoCard onClick={() => onClick && onClick()}>
      <img src={thumbnails.default.url} alt={title} />
      <StyledSmallVideoCardDescription>{description}</StyledSmallVideoCardDescription>
    </StyledSmallVideoCard>
  );
};

export default SmallVideoCard;

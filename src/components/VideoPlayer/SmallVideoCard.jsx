import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../providers/AppContext';

const StyledSmallVideoCard = styled.div`
  display: flex;
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
  border-bottom: 1px solid ${({theme}) => theme.color.secondary };
  color: ${({theme}) => theme.color.fontSecondary };
  background: ${({theme}) => theme.color.surface };
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
  const { theme } = useContext(AppContext);
  const { thumbnails, title, description } = video.snippet;
  return (
    <StyledSmallVideoCard theme={theme} onClick={() => onClick && onClick()}>
      <img src={thumbnails.default.url} alt={title} />
      <StyledSmallVideoCardDescription>{description}</StyledSmallVideoCardDescription>
    </StyledSmallVideoCard>
  );
};

export default SmallVideoCard;

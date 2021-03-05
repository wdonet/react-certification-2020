import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { lightTheme } from '../../../providers/theme/themes';

const StyledDiv = styled.div`
  overflow: hidden;
  height: 345px;
  width: 345px;
  margin: 8px;
  box-shadow: 2px 2px 2px 2px #ccc;
  border-radius: 5px;
  background: ${ ({ theme }) => theme.color.surface };

  &:hover {
    background: lightgray;
  }
`;

const StyledCardContent = styled.div`
  text-align: justify;
  padding: 4px;
  margin: 4px;
`;

const StyledCardImage = styled.img`
  height: 140px;
  width: 100%;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`;

const StyledCardTitle = styled.h2`
  font-weight: normal;
  font-size: 1.25rem;
`;

const StyledCardDescription = styled.p`
  font-weight: lighter;
  color: gray;
`;

const Card = ({ title, image, description }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <StyledDiv theme={theme}>
      <StyledCardImage src={image} alt={title} />
      <StyledCardContent>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardDescription>{description}</StyledCardDescription>
      </StyledCardContent>
    </StyledDiv>
  );
};

export default Card;

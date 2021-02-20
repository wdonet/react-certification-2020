import React from 'react';
import { StyledSection, Title } from './Home.styles';
import videos from '../../mocks/youtube-videos-mock.json';

const HomePage = () => {
  const { items = [] } = videos;

  console.log({ items });
  return (
    <StyledSection>
      <Title>MyToube</Title>
    </StyledSection>
  );
};

export default HomePage;

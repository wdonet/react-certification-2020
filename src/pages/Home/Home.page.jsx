import React from 'react';

import mockedData from './videos-mock.json';
import VideoList from '../../components/VideoList';
import { Container, Title } from './Home.styles';

const { items } = mockedData;

const HomePage = () => {
  return (
    <Container>
      <Title data-testid="home-message">Welcome to the Challenge!</Title>
      <VideoList videos={items} />
    </Container>
  );
};

export default HomePage;

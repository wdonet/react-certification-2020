import React from 'react';

import useAPI from '../../hooks/useAPI';
import VideoList from '../../components/VideoList';
import { Container, Title, Loader } from './Home.styles';
import { useGlobalState } from '../../providers/GlobalState/Provider';

const HomePage = () => {
  const [videos, loading] = useAPI();
  const { state } = useGlobalState();
  const { isThemeLight } = state;

  return !loading ? (
    <Container>
      <Title isThemeLight={isThemeLight} data-testid="home-message">
        Welcome to the Challenge!
      </Title>
      <VideoList videos={videos} />
    </Container>
  ) : (
    <Loader />
  );
};

export default HomePage;

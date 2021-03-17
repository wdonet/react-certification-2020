import React from 'react';

import useAPI from '../../hooks/useAPI';
import VideoList from '../../components/VideoList';
import { Container, Title } from './Home.styles';

const HomePage = () => {
  const [videos, loading] = useAPI();

  return (
    <Container>
      <Title data-testid="home-message">Welcome to the Challenge!</Title>
      {!loading && <VideoList videos={videos} />}
    </Container>
  );
};

export default HomePage;

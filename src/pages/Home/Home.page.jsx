import React from 'react';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { Container } from './Home.styled';

import mock from '../../mocks/videos.json';

function HomePage() {
  return (
    <>
      <Header />
      <Container>
        {mock.items.map((v) => {
          return (
            <Card
              title={v.snippet.title}
              description={v.snippet.description}
              imgUrl={v.snippet.thumbnails.medium.url}
              channelTitle={v.snippet.channelTitle}
            />
          );
        })}
      </Container>
    </>
  );
}

export default HomePage;

import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Card from '../../components/Card';

import { Homepage, Main, ContentWrapper } from './styled';
import videos from '../../providers/mock/youtube-videos-mock.json';

function HomePage() {
  const { items = [] } = videos;

  return (
    <Homepage className="homepage" data-testid="home-page">
      <Sidebar />
      <Main>
        <Header />
        <ContentWrapper>
          {items.map((video) => {
            const {
              id: { videoId = '' } = {},
              snippet: {
                title = '',
                thumbnails: { medium: { url = '' } = {} } = {},
                description = '',
                publishedAt = ''
              } = {},
            } = video;
            return (
              <Card
                key={videoId}
                title={title}
                imageURL={url}
                description={description}
                publishedDate={new Date(publishedAt).toDateString()}
              />
            );
          })}
        </ContentWrapper>
      </Main>
    </Homepage>
  );
}

export default HomePage;

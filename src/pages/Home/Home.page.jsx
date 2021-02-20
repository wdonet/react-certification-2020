import React from 'react';

import {
  Title,
  VideosContainer,
  VideoCard,
  VideoPreview,
  VideoDescription,
  VideoTitle,
} from './Home.styled';
import mockData from './youtube-videos-mock.json';

function HomePage() {
  return (
    <>
      <Title>Title</Title>
      <VideosContainer>
        {mockData.items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((item) => (
            <VideoCard key={item.id.videoId}>
              <VideoPreview src={item.snippet.thumbnails.medium.url} />
              <VideoTitle>{item.snippet.title}</VideoTitle>

              <VideoDescription>{item.snippet.description}</VideoDescription>
            </VideoCard>
          ))}
      </VideosContainer>
    </>
  );
}

export default HomePage;

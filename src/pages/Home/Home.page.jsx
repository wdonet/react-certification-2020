import React from 'react';

import {
  Title,
  VideosContainer,
  VideoCard,
  VideoPreview,
  VideoDescription,
  VideoTitle,
  VideoContent,
} from './Home.styled';
import mockData from './youtube-videos-mock.json';

function HomePage() {
  return (
    <>
      <Title>Mini-Challenge 1</Title>
      <VideosContainer>
        {mockData.items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((item) => (
            <VideoCard key={item.id.videoId}>
              <VideoPreview src={item.snippet.thumbnails.medium.url} />
              <VideoContent>
                <VideoTitle>{item.snippet.title}</VideoTitle>
                <VideoDescription>{item.snippet.description}</VideoDescription>
              </VideoContent>
            </VideoCard>
          ))}
      </VideosContainer>
    </>
  );
}

export default HomePage;

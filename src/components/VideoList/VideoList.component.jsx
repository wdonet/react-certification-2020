import React from 'react';
import { Container, Title, List } from './VideoList.styles';
import Header from '../Header';
import VideoCard from '../VideoCard';
import { getVisibleVideos } from '../../utils/videos';

const VideoList = ({ title, items, filter }) => {
  const visibleItems = getVisibleVideos(items, filter);

  return (
    <Container>
      <Header />
      <Title>{title}</Title>
      <List>
        {visibleItems
          .filter((item) => item.id.kind !== 'youtube#channel')
          .map(({ id, snippet }) => (
            <VideoCard
              thumbnail={snippet.thumbnails.medium.url}
              key={id.videoId}
              title={snippet.title}
              body={snippet.description}
            />
          ))}
      </List>
    </Container>
  );
};

export default VideoList;

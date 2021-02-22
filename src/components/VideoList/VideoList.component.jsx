import React from 'react';
import Styled from './VideoList.styles';
import Header from '../Header';
import VideoCard from '../VideoCard';
import { getVisibleVideos } from '../../utils/videos';

const VideoList = ({ title, items, filter }) => {
  const visibleItems = getVisibleVideos(items, filter);

  return (
    <Styled.Container>
      <Header />
      <Styled.Title>{title}</Styled.Title>
      <Styled.List>
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
      </Styled.List>
    </Styled.Container>
  );
};

export default VideoList;

import React from 'react';
import { ItemContainer, VideoImage, InfoContainer } from './VideoItem.styles';

function VideoItem({ item }) {
  return (
    <ItemContainer>
      <VideoImage src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
      <InfoContainer>
        <h3>{item.snippet.title}</h3>
        <p>{item.snippet.description}</p>
      </InfoContainer>
    </ItemContainer>
  );
}

export default VideoItem;

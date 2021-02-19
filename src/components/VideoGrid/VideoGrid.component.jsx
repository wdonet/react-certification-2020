import React from 'react';
import VideoGridStyled from './VideoGrid.styled';
import VideoCard from '../VideoCard';

const VideoGrid = ({ videosData }) => {
  console.log(videosData);
  return (
    <VideoGridStyled>
      {videosData.map((video) => {
        return (
          <VideoCard
            key={video.etag}
            image={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            description={video.snippet.description}
          />
        );
      })}
    </VideoGridStyled>
  );
};

export default VideoGrid;

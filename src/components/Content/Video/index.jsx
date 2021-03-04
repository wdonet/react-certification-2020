import React from 'react';
import Styled from './styled';

const Video = (props) => {
  const video = props.info;

  return (
    <Styled.VideoCard>
      <Styled.Thumbnail>
        <Styled.Image
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </Styled.Thumbnail>
      <Styled.VideoInfo>
        <Styled.VideoTitle>{video.snippet.title}</Styled.VideoTitle>
        <Styled.VideoDescription>{video.snippet.description}</Styled.VideoDescription>
        <Styled.VideoDuration>
          Published:
          <br />
          {video.snippet.publishedAt}
        </Styled.VideoDuration>
      </Styled.VideoInfo>
    </Styled.VideoCard>
  );
};

export default Video;

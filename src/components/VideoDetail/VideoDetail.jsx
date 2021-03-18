import React from 'react';
import styled from 'styled-components';

const VideoStyled = styled.div`
  .video {
    margin-top: 50px;
    width: 100%;
    height: 300px;
  }
`;
const Title = styled.h4`
  color: ${(props) => props.theme.textcolor};
`;

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <Title>Select a video</Title>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <VideoStyled>
      <iframe className="video" src={videoSrc} title="Video" />

      <div>
        <Title>{video.snippet.title}</Title>
        <Title>{video.snippet.description}</Title>
      </div>
    </VideoStyled>
  );
};

export default VideoDetail;

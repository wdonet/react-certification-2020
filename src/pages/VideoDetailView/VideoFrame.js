import React from 'react';
import Styled from './styledVideoList';

const styleIframe = {
  width: '70%',
  display: 'flex',
  height: '450px',
  marginTop: '10px',
};

const VideoFrame = ({ videoId, title }) => (
  <Styled.DisplayVideoLeftFrame>
    <iframe
      style={styleIframe}
      src={videoId}
      allow="accelerometer; autoplay;"
      title="YouTubeAPI"
    />
    {title}
  </Styled.DisplayVideoLeftFrame>
);

export default VideoFrame;

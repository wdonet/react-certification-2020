import styled from 'styled-components';
import React from 'react';

const VideoPlayer = ({ className, video }) => {
  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: video.player.embedHtml }} />
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
    </div>
  );
};

const StyledVideoPlayer = styled(VideoPlayer)`
  iframe {
    width: 100%;
    height: 60vh;
  }

  p {
    color: rgba(169, 169, 169, 1);
  }
`;

export default StyledVideoPlayer;

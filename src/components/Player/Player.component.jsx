import React from 'react';
import { ResponsiveIframeContainer } from './Player.styled';

function Player({ videoId }) {
  return (
    <ResponsiveIframeContainer>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} title={videoId} />;
    </ResponsiveIframeContainer>
  );
}

export default Player;

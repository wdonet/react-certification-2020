import React from 'react';
import Styled from './styledHome';

const VideoContainer = ({ title, description, url }) => (
  <Styled.WrapperVideo>
    <Styled.VideoDisplay>
      <Styled.Url>
        <img src={url} alt="" />
      </Styled.Url>
      <Styled.Info>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
      </Styled.Info>
    </Styled.VideoDisplay>
  </Styled.WrapperVideo>
);

export default VideoContainer;

import React from 'react';
import Styled from './styledVideoList';

const VideoCard = ({ title, url }) => (
  <Styled.VideoCardtList>
    <Styled.ImgRightList src={url} alt="" />
    <Styled.Title>{title}</Styled.Title>
  </Styled.VideoCardtList>
);

export default VideoCard;

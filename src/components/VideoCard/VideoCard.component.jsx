import React from 'react';
import { parseHtmlToString } from '../../utils/parseHtmlToString';
import VideoCardStyled from './VideoCard.styled';

const VideoCard = ({ image, title, description }) => {
  return (
    <VideoCardStyled.Container>
      <VideoCardStyled.Image src={image} />
      <VideoCardStyled.Title>{parseHtmlToString(title)}</VideoCardStyled.Title>
      <VideoCardStyled.Description>{description}</VideoCardStyled.Description>
    </VideoCardStyled.Container>
  );
};

export default VideoCard;

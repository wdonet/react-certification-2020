import React from 'react';

import {
  CardContainer,
  VideoDetails,
  Title,
  Description,
  VideoImg,
  TitleContainer,
  ChannelLogo,
} from './styled';

function getMonthsTillToday(date) {
  let months;
  const today = new Date();
  months = (today.getFullYear() - date.getFullYear()) * 12;
  months -= today.getMonth();
  months += date.getMonth();
  return months <= 0 ? 0 : months;
}

const VideoCard = ({ title, channelTitle, publishedAt, image }) => {
  const months = getMonthsTillToday(new Date(publishedAt));

  return (
    <CardContainer>
      <VideoImg src={image} />
      <VideoDetails>
        <TitleContainer>
          <ChannelLogo />
          <Title>{title}</Title>
        </TitleContainer>
        <Description>
          {channelTitle}
          <br /> {months} months ago
        </Description>
      </VideoDetails>
    </CardContainer>
  );
};

export default VideoCard;

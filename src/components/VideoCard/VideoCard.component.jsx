import React from 'react';
import { IoWifi } from 'react-icons/io5';
import { Card, Header, Content, Tag, Title, Subtitle, Text } from './VideoCard.styles';

const VideoCard = ({ title, channel, date, thumbnail, liveBroadcastContent }) => {
  return (
    <Card>
      <Header>
        <img src={thumbnail} alt={title} />
      </Header>
      <Content>
        {liveBroadcastContent !== 'none' ? (
          <Tag>
            <IoWifi />
            {liveBroadcastContent}
          </Tag>
        ) : (
          ''
        )}
        <Title>{title}</Title>
        <Subtitle>{channel}</Subtitle>
        <Text>{date}</Text>
      </Content>
    </Card>
  );
};

export default VideoCard;

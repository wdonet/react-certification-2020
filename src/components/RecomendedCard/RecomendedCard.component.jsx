import React from 'react';
import { IoWifi } from 'react-icons/io5';
import { Card, Header, Content, Tag, Title, Subtitle } from './RecomendedCard.styles';

const RecomendedCard = ({ id, title, channel, thumbnail, liveBroadcastContent }) => {
  return (
    <Card to={`/video/${id}`}>
      <Header>
        <img src={thumbnail} alt={title} />
        {liveBroadcastContent !== 'none' ? (
          <Tag>
            <IoWifi />
            {liveBroadcastContent}
          </Tag>
        ) : (
          ''
        )}
      </Header>
      <Content>
        <Title title={title}>{title}</Title>
        <Subtitle>{channel}</Subtitle>
      </Content>
    </Card>
  );
};

export default RecomendedCard;

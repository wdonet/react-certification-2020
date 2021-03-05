import React from 'react';
import { IoWifi } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Card, Header, Content, Tag, Title, Subtitle, Text } from './VideoCard.styles';

const VideoCard = ({ id, title, channel, date, thumbnail, liveBroadcastContent }) => {
  return (
    <Card>
      <Header>
        <Link to={`/video/${id}`}>
          <img src={thumbnail} alt={title} />
        </Link>
      </Header>
      <Content>
        <Link to={`/video/${id}`}>
          <Title title={title}>{title}</Title>
        </Link>
        <Link to={`/video/${id}`}>
          <Subtitle>{channel}</Subtitle>
        </Link>
        <Text>{date}</Text>
        {liveBroadcastContent !== 'none' ? (
          <footer>
            <hr />
            <Tag>
              <IoWifi />
              {liveBroadcastContent}
            </Tag>
          </footer>
        ) : (
          ''
        )}
      </Content>
    </Card>
  );
};

export default VideoCard;

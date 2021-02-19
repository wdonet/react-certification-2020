import React from 'react';

import { Card, Content, Image, GridItem, Title, Description } from './VideoItem.styles';

const VideoList = ({ video }) => {
  return (
    <GridItem>
      <Card>
        <Image src={video.thumbnails.medium.url} alt={video.title} />
        <Content>
          <Title>{video.title}</Title>
          <Description>{video.description}</Description>
        </Content>
      </Card>
    </GridItem>
  );
};

export default VideoList;

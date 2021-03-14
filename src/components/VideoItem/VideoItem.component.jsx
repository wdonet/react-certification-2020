import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Content, Image, GridItem, Title, Description } from './VideoItem.styles';

const VideoItem = ({ video, videos }) => {
  const history = useHistory();
  const {
    snippet: { title, description, thumbnails },
  } = video;

  const onClickHandler = () => {
    history.push({
      pathname: 'watch',
      search: `?id=${video.id.videoId}`,
      state: { title, description, videos },
    });
  };

  return (
    <GridItem data-testid="video-item" onClick={onClickHandler}>
      <Card>
        <Image src={thumbnails.medium.url} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </Card>
    </GridItem>
  );
};

export default VideoItem;

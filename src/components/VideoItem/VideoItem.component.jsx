import React from 'react';
import { useHistory } from 'react-router-dom';

import { Card, Content, Image, GridItem, Title, Description } from './VideoItem.styles';

const VideoItem = ({ video, videos }) => {
  const history = useHistory();
  const { snippet } = video;

  const onClickHandler = () => {
    history.push({
      pathname: 'watch',
      search: `?id=${video.id.videoId}`,
      state: { title: snippet.title, description: snippet.description, videos },
    });
  };

  return (
    <GridItem data-testid="video-item" onClick={onClickHandler}>
      <Card>
        <Image src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <Content>
          <Title>{snippet.title}</Title>
          <Description>{snippet.description}</Description>
        </Content>
      </Card>
    </GridItem>
  );
};

export default VideoItem;

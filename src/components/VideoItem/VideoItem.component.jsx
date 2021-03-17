import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../providers/GlobalState/Provider';

import { Card, Content, Image, GridItem, Title, Description } from './VideoItem.styles';

const VideoItem = ({ video, videos }) => {
  const history = useHistory();
  const { state } = useGlobalState();
  const { isThemeLight } = state;
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
    <GridItem
      isThemeLight={isThemeLight}
      data-testid="video-item"
      onClick={onClickHandler}
    >
      <Card isThemeLight={isThemeLight}>
        <Image src={thumbnails.medium.url} alt={title} />
        <Content>
          <Title isThemeLight={isThemeLight}>{title}</Title>
          <Description isThemeLight={isThemeLight}>{description}</Description>
        </Content>
      </Card>
    </GridItem>
  );
};

export default VideoItem;

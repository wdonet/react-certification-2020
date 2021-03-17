import React from 'react';
import { useHistory } from 'react-router-dom';

import { Image, GridItem, Title } from './RelatedVideoItem.styles';

const RelatedVideoItem = ({ video, videos }) => {
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
    <GridItem data-testid="related-video-item" onClick={onClickHandler}>
      <Image src={thumbnails.default.url} alt={title} />
      <Title>{title}</Title>
    </GridItem>
  );
};

export default RelatedVideoItem;

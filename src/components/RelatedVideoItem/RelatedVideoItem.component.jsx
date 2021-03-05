import React from 'react';
import { useHistory } from 'react-router-dom';

import { Image, GridItem, Title } from './RelatedVideoItem.styles';

const RelatedVideoItem = ({ video, videos }) => {
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
    <GridItem data-testid="related-video-item" onClick={onClickHandler}>
      <Image src={snippet.thumbnails.default.url} alt={snippet.title} />
      <Title>{snippet.title}</Title>
    </GridItem>
  );
};

export default RelatedVideoItem;

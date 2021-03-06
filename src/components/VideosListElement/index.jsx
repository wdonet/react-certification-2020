import React from 'react';
import { ListElement, Image, Detail, Description } from './styled';

const VideosListElement = ({ snippet }) => {
  return (
    <ListElement>
      <Image img={snippet.thumbnails.medium.url} />
      <Detail>
        <Description>{snippet.title}</Description>
      </Detail>
    </ListElement>
  );
};

export default VideosListElement;

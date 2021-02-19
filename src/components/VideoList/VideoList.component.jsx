import React from 'react';
import Styled from './Video.styles';
import Card from '../Card';

const VideoList = ({ items }) => {
  return (
    <Styled.Container>
      <Styled.TitleBar>
        <Styled.Title>Wizeline's Youtube Videos</Styled.Title>
      </Styled.TitleBar>
      <Styled.List>
        {items.map(({ snippet }) => (
          <Card
            title={snippet.title}
            thumbnail={snippet.thumbnails.default.url}
            description={snippet.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat nulla lectus. Maecenas at sapien eu nisi hendrerit eleifend. Duis quis condimentum ligula..."}
          />
        ))}
      </Styled.List>
    </Styled.Container>
  );
};

export default VideoList;

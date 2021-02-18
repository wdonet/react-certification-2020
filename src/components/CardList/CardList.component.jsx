import React from 'react';
import Card from '../Card/Card.component';
import Styled from './styled';

function CardList({ items }) {
  return (
    <>
      <Styled.CardRow>
        {items.map(({ etag, snippet }) => (
          <Card
            key={etag}
            imgSrc={snippet.thumbnails.high.url}
            title={snippet.title}
            description={snippet.description}
          />
        ))}
      </Styled.CardRow>
    </>
  );
}

export default CardList;

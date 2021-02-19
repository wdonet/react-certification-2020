import React from 'react';
import { Image, CardWrapper } from './styled';

const Card = ({title, imageURL, description, publishedDate}) => {
  return (
    <CardWrapper className="ui card">
      <a className="image" href="/">
        <Image style={{backgroundImage: `url(${imageURL})`}} />
      </a>
      <div className="content">
        <a className="header" href="/">{title}</a>
        <div className="meta">
          <a href="/">{publishedDate}</a>
        </div>
        <div className="description">{description}</div>
      </div>
    </CardWrapper>
  );
}

export default Card;
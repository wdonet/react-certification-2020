import React from 'react';
import { decode } from 'html-entities';
import { Link } from 'react-router-dom';
import { VideoCardContainer, Details, ImageContainer } from './VideoCard.styled';

function VideoCard({ image, title, description, videoId, noDescription = false }) {
  return (
    <VideoCardContainer noDescription={noDescription}>
      <Link to={`/video/${videoId}`}>
        <ImageContainer
          role="img"
          aria-label="thumbnail"
          img={image}
          noDescription={noDescription}
        />
        <Details noDescription={noDescription}>
          <h2>{decode(title)}</h2>
          {noDescription || <p>{decode(description)}</p>}
        </Details>
      </Link>
    </VideoCardContainer>
  );
}

export default VideoCard;

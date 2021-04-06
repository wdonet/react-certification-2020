import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobal } from '../../providers/Global';
import Grid from '../../components/Grid';
import VideoCard from '../../components/VideoCard';

import { StyledSection, Title } from './styled';

const FavoritesPage = () => {
  const { favorites, setSelectedVideo } = useGlobal();

  const videosParsed =
    Object.keys(favorites).length > 0
      ? Object.keys(favorites).map((videoId) => {
          console.log({ videoId, video: favorites[videoId] });
          const {
            snippet: {
              title = '',
              thumbnails: { medium: { url } = {} } = {},
              publishedAt,
              channelTitle,
            } = {},
          } = favorites[videoId];

          return (
            <Link
              style={{
                'text-decoration': 'none',
              }}
              key={videoId}
              to={`/video/${videoId}`}
              onClick={() => setSelectedVideo(favorites[videoId])}
            >
              <VideoCard
                title={title}
                channelTitle={channelTitle}
                publishedAt={publishedAt}
                image={url}
              />
            </Link>
          );
        })
      : [];
  return (
    <StyledSection>
      <Title>Favorites</Title>
      {videosParsed.length > 0 ? (
        <Grid gridItems={videosParsed} />
      ) : (
        'No favorites added yet'
      )}
    </StyledSection>
  );
};

export default FavoritesPage;

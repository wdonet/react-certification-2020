import React from 'react';
import Grid from '../../components/Grid';
import VideoCard from '../../components/VideoCard';

import { useYoutubeData } from '../../providers/YoutubeData';

import { StyledSection, Title } from './styled';

const HomePage = () => {
  const { videos } = useYoutubeData();

  const videosParsed = videos
    ? videos.map((video) => {
        const {
          etag,
          snippet: {
            title,
            thumbnails: {
              medium: { url },
            },
            publishedAt,
            channelTitle,
          },
        } = video;
        return (
          <VideoCard
            key={etag}
            title={title}
            channelTitle={channelTitle}
            publishedAt={publishedAt}
            image={url}
          />
        );
      })
    : [];

  return (
    <StyledSection>
      <Title>Home</Title>
      <Grid gridItems={videosParsed} />
    </StyledSection>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../../components/Grid';
import VideoCard from '../../components/VideoCard';

import { useYoutubeData } from '../../providers/YoutubeData';

import { StyledSection, Title } from './styled';

const HomePage = () => {
  const { videos, setSelectedVideo } = useYoutubeData();

  const videosParsed = videos
    ? videos.map((video) => {
        const {
          snippet: {
            title,
            thumbnails: {
              medium: { url },
            },
            publishedAt,
            channelTitle,
          },
          id: { videoId },
        } = video;
        return (
          <Link key={videoId} to={`/${videoId}`} onClick={() => setSelectedVideo(video)}>
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
      <Title>Home</Title>
      <Grid gridItems={videosParsed} />
    </StyledSection>
  );
};

export default HomePage;

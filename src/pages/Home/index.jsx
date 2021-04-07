import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../../components/Grid';
import VideoCard from '../../components/VideoCard';

import { useYoutubeData } from '../../providers/YoutubeData';
import { useGlobal } from '../../providers/Global';

import { StyledSection, Title } from './styled';

const HomePage = () => {
  const { videos } = useYoutubeData();
  const { setSelectedVideo } = useGlobal();

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
          <Link
            style={{
              textDecoration: 'none',
            }}
            key={videoId}
            to={`/video/${videoId}`}
            onClick={() => setSelectedVideo(video)}
          >
            <VideoCard
              title={title.length > 77 ? `${title.substr(0, 74)}...` : title}
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

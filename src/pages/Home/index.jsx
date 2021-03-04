import React, { useState, useEffect } from 'react';
import Grid from '../../components/Grid';
import VideoCard from '../../components/VideoCard';

import { useYoutubeData } from '../../providers/YoutubeData';

import { StyledSection, Title } from './styled';

const HomePage = () => {
  const { getVideosByQuery } = useYoutubeData();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await getVideosByQuery();
      if (response) setVideos(response);
    };
    fetchVideos();
  }, []);

  const videosParsed = videos
    ? videos.map((video) => {
        const {
          etag,
          snippet: { title, description },
        } = video;
        return <VideoCard key={etag} title={title} description={description} />;
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

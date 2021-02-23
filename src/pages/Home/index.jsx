import React from 'react';
import Grid from '../../components/Grid';
import VideoCard from '../../components/VideoCard';
import { StyledSection, Title } from './styled';
import videos from '../../mocks/youtube-videos-mock.json';

const HomePage = () => {
  const { items = [] } = videos;

  console.log({ items });

  const videosParsed = items.map((video) => {
    const {
      etag,
      snippet: { title, description },
    } = video;
    return <VideoCard key={etag} title={title} description={description} />;
  });

  return (
    <StyledSection>
      <Title>Home</Title>
      <Grid gridItems={videosParsed} />
    </StyledSection>
  );
};

export default HomePage;

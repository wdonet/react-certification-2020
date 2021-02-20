import Grid from '@material-ui/core/Grid';
import React from 'react';
import styled from 'styled-components';
import Videos from '../../mocks/youtube-videos-mock.json';
import VideoCard from '../VideoCard';

const VideoList = () => {
  return (
    <div>
      <h1>Youtube Video List</h1>
      <Grid container spacing={3} id="video-list">
        {Videos.items.map((video) => (
          <VideoCard video={video} />
        ))}
      </Grid>
    </div>
  );
};

const StyledVideoList = styled(VideoList)`
  text-align: center;

  @media (min-width: 1024px) {
    padding: 20px 50px;
  }

  @media (min-width: 1440px) {
    padding: 20px 200px;
  }

  p {
    text-align: left;
    color: rgba(169, 169, 169, 1);
  }
`;

export default StyledVideoList;

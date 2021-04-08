import Grid from '@material-ui/core/Grid';
import React, { useContext } from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';
import useVideoList from '../../hooks/useVideoList';
import GlobalContext from '../../state/GlobalContext';

const VideoList = ({ className, selectVideo }) => {
  const { search, theme } = useContext(GlobalContext);

  const videos = useVideoList(search);

  return (
    <div id="videoList" className={`${className} ${theme}`}>
      <h1>Youtube Video List</h1>
      <Grid container spacing={3} id="video-list">
        {videos.map((video) => (
          <VideoCard
            key={video.etag}
            video={video}
            selectVideo={(videoId) => selectVideo(videoId)}
          />
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
  &.light {
    background-color: white;
  }
  &.dark {
    background-color: black;
    h1 {
      color: white;
    }
  }
`;

export default StyledVideoList;

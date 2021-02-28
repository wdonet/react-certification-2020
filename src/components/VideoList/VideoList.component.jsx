import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const fetchVideoList = async () => {
  const videosRequest = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&channelId=UCPGzT4wecuWM0BH9mPiulXg&order=date&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const { items: videos } = await videosRequest.json();
  return videos;
};

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoList().then((videoList) => {
      setVideos(videoList);
    });
  }, []);

  return (
    <div>
      <h1>Youtube Video List</h1>
      <Grid container spacing={3} id="video-list">
        {videos.map((video) => (
          <VideoCard key={video.etag} video={video} />
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

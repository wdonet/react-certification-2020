import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import VideoCard from '../VideoCard';

const fetchVideoList = async ({ search }) => {
  const params = {
    maxResults: 25,
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    order: 'date',
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
  };
  const videosRequest = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${params.maxResults}&channelId=${params.channelId}&order=${params.order}&key=${params.apiKey}&q=${search}`
  );
  const { items: videos, error: { message } = {} } = await videosRequest.json();

  if (message) {
    console.error(message);
    alert(message);
    return [];
  }

  return videos || [];
};

const VideoList = ({ search }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideoList({ search }).then((videoList) => {
      setVideos(videoList);
    });
  }, [search]);

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

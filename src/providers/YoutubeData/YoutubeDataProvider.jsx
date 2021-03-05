import React, { useState, useEffect } from 'react';
import { getVideoDetails, getVideosByQuery } from './api';

const YoutubeDataContext = React.createContext(null);

const params = {
  baseUrl: 'https://www.googleapis.com/youtube/v3/',
  apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
  channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  order: 'date',
  type: 'video',
  maxResults: 25,
};

const YoutubeDataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (query) => {
    try {
      const newVideos = await getVideosByQuery(params, query);
      setVideos(newVideos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideoData = async (videoId) => {
    try {
      const videoDetails = await getVideoDetails(params, videoId);
      return videoDetails;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <YoutubeDataContext.Provider value={{ videos, fetchVideos, fetchVideoData }}>
      {children}
    </YoutubeDataContext.Provider>
  );
};

YoutubeDataProvider.propTypes = {};

export { YoutubeDataContext };
export default YoutubeDataProvider;

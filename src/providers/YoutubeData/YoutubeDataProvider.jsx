import React, { useState, useEffect } from 'react';
import { getVideosByQuery, getRelatedToVideo } from './api';

const YoutubeDataContext = React.createContext(null);

const YoutubeDataProvider = ({ iframeAPIReady, children }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});

  const fetchVideos = async (query) => {
    try {
      const newVideos = await getVideosByQuery(query);
      setVideos(newVideos);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRelatedTo = async (videoId) => {
    try {
      const relatedVideos = await getRelatedToVideo(videoId);
      return relatedVideos;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <YoutubeDataContext.Provider
      value={{
        videos,
        fetchVideos,
        selectedVideo,
        setSelectedVideo,
        iframeAPIReady,
        fetchRelatedTo,
      }}
    >
      {children}
    </YoutubeDataContext.Provider>
  );
};

YoutubeDataProvider.propTypes = {};

export { YoutubeDataContext };
export default YoutubeDataProvider;

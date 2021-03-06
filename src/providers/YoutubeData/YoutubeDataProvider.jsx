import React, { useState, useEffect } from 'react';
import { getVideosByQuery, getRelatedToVideo } from './api';

const YoutubeDataContext = React.createContext(null);

const YoutubeDataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [iframeApiReady, setIframeApiReady] = useState(false);

  const fetchVideos = async (query) => {
    console.log('FETCHING VIDEOS');
    try {
      const newVideos = await getVideosByQuery(query);
      setVideos(newVideos);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchRelatedTo = async (videoId) => {
    console.log('FETCHING RELATED TO');
    try {
      const relatedVideos = await getRelatedToVideo(videoId);
      return relatedVideos;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
    window.onYouTubeIframeAPIReady = () => setIframeApiReady(true);
  }, []);

  return (
    <YoutubeDataContext.Provider
      value={{
        videos,
        fetchVideos,
        selectedVideo,
        setSelectedVideo,
        iframeApiReady,
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

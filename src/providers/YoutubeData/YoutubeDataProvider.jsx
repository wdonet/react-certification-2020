import React, { useEffect, useReducer } from 'react';
import { getVideosByQuery, getRelatedToVideo } from './api';
import reducer from './reducer';
import { setSearchTerm, setSelectedVideo, setVideos } from './actions';

const YoutubeDataContext = React.createContext(null);

const YoutubeDataProvider = ({ iframeAPIReady, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    videos: [],
    selectedVideo: '',
    searchTerm: '',
  });

  const { videos, selectedVideo, searchTerm } = state;

  const fetchVideos = async (query) => {
    try {
      const newVideos = await getVideosByQuery(query);
      setVideos(dispatch, newVideos);
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
        setSelectedVideo: (videoId) => setSelectedVideo(dispatch, videoId),
        iframeAPIReady,
        fetchRelatedTo,
        searchTerm,
        setSearchTerm: (search) => setSearchTerm(dispatch, search),
      }}
    >
      {children}
    </YoutubeDataContext.Provider>
  );
};

YoutubeDataProvider.propTypes = {};

export { YoutubeDataContext };
export default YoutubeDataProvider;

const setSearchTerm = (dispatch, searchTerm) => {
  dispatch({
    type: 'SET_SEARCH_TERM',
    payload: {
      searchTerm,
    },
  });
};

const setSelectedVideo = (dispatch, selectedVideo) => {
  dispatch({
    type: 'SET_SELECTED_VIDEO',
    payload: {
      selectedVideo,
    },
  });
};

const setVideos = (dispatch, videos) => {
  dispatch({
    type: 'SET_VIDEOS',
    payload: {
      videos,
    },
  });
};

export { setSearchTerm, setSelectedVideo, setVideos };

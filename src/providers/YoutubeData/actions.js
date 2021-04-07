const setSearchTerm = (dispatch, searchTerm) => {
  dispatch({
    type: 'SET_SEARCH_TERM',
    payload: {
      searchTerm,
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

export { setSearchTerm, setVideos };

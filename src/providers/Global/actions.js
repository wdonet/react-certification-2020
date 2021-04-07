const saveFavorite = (dispatch, newFavorite, videoDetails) => {
  dispatch({
    type: 'SAVE_FAVORITE',
    payload: {
      newFavorite,
      videoDetails,
    },
  });
};

const deleteFavorite = (dispatch, favoriteKey) => {
  dispatch({
    type: 'DELETE_FAVORITE',
    payload: {
      favoriteKey,
    },
  });
};

const setTheme = (dispatch, theme) => {
  dispatch({
    type: 'SET_THEME',
    payload: {
      theme,
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

export { saveFavorite, deleteFavorite, setTheme, setSelectedVideo };

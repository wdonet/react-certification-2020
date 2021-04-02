const saveFavorite = (dispatch, newFavorite, videoDetails) => {
  console.log({ newFavorite });
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

export { saveFavorite, deleteFavorite, setTheme };

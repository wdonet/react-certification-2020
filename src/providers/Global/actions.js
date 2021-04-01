const saveFavorite = (dispatch, newFavorite) => {
  dispatch({
    type: 'SET_FAVORITES',
    payload: {
      newFavorite,
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

export { saveFavorite, setTheme };

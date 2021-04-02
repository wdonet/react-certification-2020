const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SAVE_FAVORITE': {
      const { newFavorite, videoDetails } = payload;
      if (state.favorites[newFavorite]) {
        break;
      }
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [newFavorite]: { ...videoDetails },
        },
      };
    }
    case 'DELETE_FAVORITE': {
      const { favoriteKey } = payload;
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [favoriteKey]: null,
        },
      };
    }
    case 'SET_THEME':
      return {
        ...state,
        theme: payload.theme,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SAVE_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, payload.favorite],
      };

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

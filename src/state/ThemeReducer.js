const ThemeReducer = (stateTheme, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...stateTheme, theme: action.payload };
    default:
      return stateTheme;
  }
};

export default ThemeReducer;

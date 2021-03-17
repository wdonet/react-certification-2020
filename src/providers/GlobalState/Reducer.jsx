export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        isThemeLight: action.payload,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}

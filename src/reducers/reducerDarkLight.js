import { theme } from '../components/Header/theme';

export const initialState = {
  currentTheme: theme.light,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const updatedTheme = state.currentTheme.id === 'light' ? 'dark' : 'light';
      return {
        ...state,
        currentTheme: theme[updatedTheme],
      };
    }
    default:
      throw new Error();
  }
}

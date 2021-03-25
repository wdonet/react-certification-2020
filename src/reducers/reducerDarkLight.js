import { theme } from '../components/Header/theme';
import loginApi from '../components/ModalLogin/login.api';

export const initialState = {
  currentTheme: theme.light,
  currentSession: null,
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'TOGGLE_THEME': {
      const updatedTheme = state.currentTheme.id === 'light' ? 'dark' : 'light';
      return {
        ...state,
        currentTheme: theme[updatedTheme],
      };
    }
    case 'LOGIN': {
      return {
        ...state,
        currentSession: loginApi(payload.username, payload.password),
      };
    }
    default:
      throw new Error();
  }
}

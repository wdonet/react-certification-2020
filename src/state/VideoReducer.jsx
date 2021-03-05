export default function reducer(state, action) {
  switch (action.type) {
    case 'EDIT': {
      return {
        ...state,
        search: action.payload,
      };
    }

    case 'SUBMIT': {
      return {
        ...state,
        history: [`search: ${state.search}`, ...state.history],
        list: action.payload,
      };
    }

    default:
      throw new Error('Unknown action!');
  }
}

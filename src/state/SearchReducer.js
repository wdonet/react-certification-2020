const SearchReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_VIDEOS':
      return { ...state, search: action.payload.search };
    default:
      return state;
  }
};

export default SearchReducer;

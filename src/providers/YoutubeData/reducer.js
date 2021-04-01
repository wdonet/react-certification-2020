const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: payload.searchTerm,
      };

    case 'SET_SELECTED_VIDEO':
      return {
        ...state,
        selectedVideo: payload.selectedVideo,
      };
    case 'SET_VIDEOS':
      return {
        ...state,
        videos: payload.videos,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

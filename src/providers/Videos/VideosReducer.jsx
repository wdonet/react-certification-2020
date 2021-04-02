import { createReducer } from '@reduxjs/toolkit';
import actions from './VideosActions';

export const initialState = {
  videos: [],
};

const loadVideos = (state, payload) => {
  return { ...state, videos: payload };
};

const filterVideos = (state, payload) => {
  return { ...state, videos: payload };
};

const VideosReducer = createReducer(initialState, {
  [actions.loadAction.type]: (state, { payload }) => loadVideos(state, payload),
  [actions.filterAction.type]: (state, { payload }) => filterVideos(state, payload),
});

export default VideosReducer;

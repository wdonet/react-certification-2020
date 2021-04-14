import { createAction } from '@reduxjs/toolkit';
import YoutubeService from '../../services/youtube/youtube.service';

const loadAction = createAction('videos/load');
const filterAction = createAction('videos/filter');

const load = () => async (dispatch) => {
  if (dispatch) {
    try {
      const data = await YoutubeService.popular();
      dispatch(loadAction(data));
    } catch (error) {
      console.warn({ error });
      dispatch(loadAction([]));
    }
  }
};

const filter = (payload) => async (dispatch) => {
  try {
    const newVideos = await YoutubeService.search(payload);
    dispatch(filterAction(newVideos));
  } catch (error) {
    console.warn({ error });
    dispatch(filterAction([]));
  }
};

const actions = {
  load,
  loadAction,
  filter,
  filterAction,
};

export default actions;

import { useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';

import * as types from '../constants';

const initialState = { loading: false, result: null };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FETCH_YOUTUBE: {
      return { ...state, loading: true };
    }

    case types.FETCH_YOUTUBE_DONE: {
      return { ...state, loading: false, result: payload };
    }

    default: {
      return state;
    }
  }
};

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    key: process.env.REACT_APP_YOUTUBE_DATA_API_V3_KEY,
  },
});

const defaultParams = {
  q: '',
  maxResults: 24,
  part: ['id', 'snippet'].join(','),
  type: ['channel', 'video', 'playlist'].join(','),
};

const useYoutubeSearch = (params = defaultParams, initialQuery = '') => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = useCallback(
    async (q = '') => {
      let payload = null;
      dispatch({ type: types.FETCH_YOUTUBE });

      try {
        const res = await instance.get('/', {
          params: { ...defaultParams, ...params, q },
        });

        payload = res.data;
      } catch (error) {
        console.error(error);
      }

      dispatch({ type: types.FETCH_YOUTUBE_DONE, payload });
    },
    [params]
  );

  useEffect(() => {
    if (initialQuery) search(initialQuery);
  }, [initialQuery, search]);

  return { ...state, search };
};

export { useYoutubeSearch };

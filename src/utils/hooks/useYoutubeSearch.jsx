import { useEffect, useReducer, useCallback } from 'react';

import * as types from '../constants';
import { ytInstance as instance } from '../axiosConfig';

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
      return payload;
    },
    [params]
  );

  useEffect(() => {
    if (initialQuery) search(initialQuery);
  }, [initialQuery, search]);

  return { ...state, search };
};

export { useYoutubeSearch };

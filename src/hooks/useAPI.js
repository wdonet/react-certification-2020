import { useEffect, useState } from 'react';

import youtube from '../apis/youtube';
import { DEFAULT_SEARCH } from '../utils/constants';

const useAPI = (search = DEFAULT_SEARCH) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onSearch = async (searchedText) => {
      try {
        setLoading(true);
        const response = await youtube.get('/search', {
          params: {
            q: searchedText,
          },
        });
        setVideos(response.data.items);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    onSearch(search);
  }, [search]);

  return [videos, loading];
};

export default useAPI;

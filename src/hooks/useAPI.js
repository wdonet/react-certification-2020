import { useEffect, useState } from 'react';

import youtube from '../apis/youtube';
import { DEFAULT_SEARCH } from '../utils/constants';

const useAPI = (search = DEFAULT_SEARCH) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    onSearch(search);
  }, [search]);

  return [videos, loading, error];
};

export default useAPI;

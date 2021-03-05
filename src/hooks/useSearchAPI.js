import { useEffect, useState } from 'react';

const useSearchAPI = () => {
  const [videos, setVideos] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const search = async (query) => {
    try {
      /* global gapi */
      /* eslint no-undef: "error" */
      const { result } = await gapi.client.request({
        path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&maxResults=12&regionCode=MX`,
      });
      setVideos(result.items);
    } catch (reason) {
      console.log(`Error:${reason}`);
      setVideos([]);
    }
  };

  useEffect(() => {
    if (!hasLoaded) {
      setHasLoaded(true);
      search('');
    }
  }, [hasLoaded]);

  return { search, videos };
};

export default useSearchAPI;

import { useState } from 'react';

const useSearchAPI = () => {
  const [videos, setVideos] = useState([]);

  const search = async (query = '') => {
    try {
      /* global gapi */
      /* eslint no-undef: "error" */
      const { result } = await gapi.client.request({
        path: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&maxResults=12&regionCode=MX&key=${process.env.REACT_APP_YOUTUBE_KEY}`,
      });
      setVideos(result.items);
    } catch (reason) {
      setVideos([]);
    }
  };

  return { search, videos };
};

export default useSearchAPI;

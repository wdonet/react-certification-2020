import { useEffect, useState } from 'react';

import mockData from './List/youtube-videos-mock.json';

function useVideos({ search }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        const url = ['https://www.googleapis.com/youtube/v3/search?'];
        url.push(`key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        url.push(`&part=snippet&maxResults=10&type=video`);
        if (search) url.push(`&q=${search}`);

        const response = await fetch(url.join(''));
        const json = await response.json();
        if (json.error && json.error.code === 403) {
          setVideos(mockData.items);
          setError('Error from YouTube API, displaying mock data..');
          console.error(json);
        } else {
          setVideos(json.items);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [search]);

  return { videos, isLoading, error };
}

export default useVideos;

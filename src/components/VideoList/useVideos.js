import { useEffect, useState } from 'react';

function useVideos() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        console.log('env', process.env);
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=10`
        );
        const json = await response.json();
        console.log('json', json);
        setVideos(json.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  return { videos, isLoading, error };
}

export default useVideos;

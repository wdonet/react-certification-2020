import { useEffect, useState } from 'react';

function useVideos({ search }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        let searchQueryParam = '';
        if (search) searchQueryParam = `&q=${search}`;
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=10${searchQueryParam}`
        );
        const json = await response.json();
        setVideos(json.items);
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

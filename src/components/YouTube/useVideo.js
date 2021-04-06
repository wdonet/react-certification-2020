import { useEffect, useState } from 'react';

import mockData from './List/youtube-videos-mock.json';

function useVideo(id) {
  const [video, setVideo] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    async function fetchVideo() {
      try {
        setLoading(true);
        const url = ['https://www.googleapis.com/youtube/v3/videos?'];
        url.push(`key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        url.push(`&part=snippet&type=video`);
        url.push(`&id=${id}`);

        const response = await fetch(url.join(''));
        const json = await response.json();
        if (json.error && json.error.code === 403) {
          setVideo(mockData.items.find((item) => item.id.videoId === id));
          setError('Error from YouTube API, displaying mock data..');
          console.error(json);
        } else {
          setVideo(json.items);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideo();
  }, [id]);

  return { video, isLoading, error };
}

export default useVideo;

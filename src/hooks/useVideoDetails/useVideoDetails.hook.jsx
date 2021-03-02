import { useEffect, useState } from 'react';

const fetchVideoDetails = async ({ id }) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const videosRequest = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=player,snippet&key=${apiKey}&id=${id}`
  );
  const {
    items: [video],
    error: { message } = {},
  } = await videosRequest.json();

  if (message) {
    console.error(message);
    alert(message);
    return [];
  }

  return video || {};
};

const useVideoDetails = (videoId) => {
  const [video, setVideo] = useState({
    id: { videoId: '' },
    player: { embedHtml: '' },
    snippet: { title: '', description: '' },
  });

  useEffect(() => {
    fetchVideoDetails({ id: videoId }).then((videoDetails) => {
      setVideo(videoDetails);
    });
  }, [videoId]);

  return video;
};

export default useVideoDetails;

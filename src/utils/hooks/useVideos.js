import { useState, useEffect } from 'react';

const useVideos = (request, initialState = []) => {
  const [videos, setVideos] = useState(initialState);

  useEffect(() => {
    const executeRequest = async () => {
      const res = await request();
      setVideos(res.result.items);
    };
    if (videos.length === 0) {
      executeRequest();
    }
  }, [videos, request]);

  return [videos, setVideos];
};

const useVideoDetail = (request, videoId, initialState = undefined) => {
  const [videoDetail, setVideoDetail] = useState(initialState);

  useEffect(() => {
    const executeRequest = async () => {
      const res = await request(videoId);
      setVideoDetail(res.result.items[0]);
    };

    executeRequest();
  }, [videoId, request]);

  return [videoDetail, setVideoDetail];
};

export { useVideos, useVideoDetail };

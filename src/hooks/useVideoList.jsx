import { useEffect, useState } from 'react';
// import videoList from '../../mocks/youtube-videos.mock.json';

const fetchVideoList = async ({ search, relatedToVideoId }) => {
  const params = {
    maxResults: 25,
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    order: 'date',
    type: 'video',
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
  };

  const videosRequest = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${
      params.maxResults
    }&channelId=${params.channelId}&order=${params.order}&key=${
      params.apiKey
    }&q=${search}&type=${params.type}${
      relatedToVideoId ? `&relatedToVideoId=${relatedToVideoId}` : ''
    }`,
  );
  const { items: videos, error: { message } = {} } = await videosRequest.json();

  if (message) {
    console.error(message);
    alert(message);
    return [];
  }

  return videos || [];
};

const useVideoList = (search = '', relatedToVideoId = '') => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideoList({ search, relatedToVideoId }).then((videoList) => {
      setVideos(videoList);
    });
    // setVideos(videoList.items);
  }, [search, relatedToVideoId]);
  return videos;
};

export default useVideoList;

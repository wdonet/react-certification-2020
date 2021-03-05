export const getVideos = async () => {
  return window.gapi.client.request({
    path: 'https://www.googleapis.com/youtube/v3/videos',
    params: { chart: 'mostPopular', part: 'snippet,statistics', maxResults: 25 },
  });
};

export const searchVideos = async (text) => {
  return window.gapi.client.request({
    path: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      q: text,
      chart: 'mostPopular',
      part: 'snippet',
      maxResults: 25,
      type: 'video',
    },
  });
};

export const getRelatedVideos = async (videoId) => {
  return window.gapi.client.request({
    path: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 25,
      relatedToVideoId: videoId,
    },
  });
};

export const getVideoStatistics = async (videoId) => {
  return window.gapi.client.request({
    path: 'https://www.googleapis.com/youtube/v3/videos',
    params: {
      part: 'snippet,statistics',
      id: videoId,
    },
  });
};

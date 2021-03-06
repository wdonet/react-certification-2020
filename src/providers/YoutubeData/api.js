const params = {
  baseUrl: 'https://www.googleapis.com/youtube/v3/',
  apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
  channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
  order: 'date',
  type: 'video',
  maxResults: 25,
};

const getVideosByQuery = async (query) => {
  const response = await fetch(
    `${params.baseUrl}search?part=snippet&maxResults=${params.maxResults}&order=${
      params.order
    }&key=${params.apiKey}${query ? `&q=${query}` : `&channelId=${params.channelId}`}`
  );

  const { items } = await response.json();
  return items;
};

const getChannelDetails = async () => {
  const response = await fetch(
    `${params.baseUrl}channels?id=${params.channelId}&part=contentDetails&key=${params.apiKey}`
  );

  const { contentDetails } = await response.json();
  return contentDetails;
};

const getRelatedToVideo = async (videoId) => {
  const response = await fetch(
    `${params.baseUrl}search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${params.apiKey}`
  );

  const items = await response.json();
  return items;
};

export { getVideosByQuery, getChannelDetails, getRelatedToVideo };

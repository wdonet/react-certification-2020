const getVideosByQuery = async (params, query) => {
  const response = await fetch(
    `${params.baseUrl}search?part=snippet&maxResults=${params.maxResults}&order=${
      params.order
    }&key=${params.apiKey}${query ? `&q=${query}` : `&channelId=${params.channelId}`}`
  );

  const { items } = await response.json();
  return items;
};

const getVideoDetails = async (params, videoId) => {
  const response = await fetch(
    `${params.baseUrl}search?part=snippet&maxResults=${params.maxResults}&order=${params.order}&key=${params.apiKey}&id=${videoId}`
  );

  const video = await response.json();
  return video;
};

const getChannelDetails = async (params) => {
  const response = await fetch(
    `${params.baseUrl}channels?id=${params.channelId}&part=contentDetails&key=${params.apiKey}`
  );

  const { contentDetails } = await response.json();
  return contentDetails;
};

export { getVideoDetails, getVideosByQuery, getChannelDetails };

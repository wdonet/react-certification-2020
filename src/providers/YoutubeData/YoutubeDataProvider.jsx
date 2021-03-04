import React from 'react';

const YoutubeDataContext = React.createContext(null);

const YoutubeDataProvider = ({ children }) => {
  const params = {
    baseUrl: 'https://www.googleapis.com/youtube/v3/search',
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY,
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    order: 'date',
    type: 'video',
    maxResults: 25,
  };

  const getVideosByQuery = async (query) => {
    const response = await fetch(
      `${params.baseUrl}?channelId=${params.channelId}&part=snippet&maxResults=${
        params.maxResults
      }&order=${params.order}&key=${params.apiKey}${query ? `&q=${query}` : ''}`
    );

    const { items } = await response.json();
    console.log({ items });
    return items;
  };

  const getVideoDetails = async (videoId) => {
    const response = await fetch(
      `${params.baseUrl}?part=snippet&maxResults=${params.maxResults}&order=${params.order}&key=${params.apiKey}&id=${videoId}`
    );

    const video = await response.json();
    console.log({ video });
  };

  return (
    <YoutubeDataContext.Provider value={{ getVideosByQuery, getVideoDetails }}>
      {children}
    </YoutubeDataContext.Provider>
  );
};

YoutubeDataProvider.propTypes = {};

export { YoutubeDataContext };
export default YoutubeDataProvider;

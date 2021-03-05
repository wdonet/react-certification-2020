import axios from 'axios';

export const ytInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    key: process.env.REACT_APP_YOUTUBE_DATA_API_V3_KEY,
  },
});

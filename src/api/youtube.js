import axios from 'axios';
import { API_URL } from '../utils/constants';

const { REACT_APP_API_KEY } = process.env;

const apiSource = axios.CancelToken.source();

const YoutubeApi = {
  search: async (query) => {
    const params = new URLSearchParams();
    params.append('q', query);
    params.append('maxResults', 30);
    params.append('part', 'snippet');
    params.append('type', 'video');
    params.append('key', REACT_APP_API_KEY);

    const result = await axios.get(`${API_URL}/search/`, { params });
    return result.data;
  },
  related: async (videoId) => {
    const params = new URLSearchParams();
    params.append('relatedToVideoId', videoId);
    params.append('part', 'snippet');
    params.append('type', 'video');
    params.append('key', REACT_APP_API_KEY);

    const result = await axios.get(`${API_URL}/search/`, { params });
    return result.data;
  },
  detail: async (videoId) => {
    const params = new URLSearchParams();
    params.append('id', videoId);
    params.append('part', 'statistics');
    params.append('part', 'snippet');
    params.append('key', REACT_APP_API_KEY);

    const result = await axios.get(`${API_URL}/videos/`, { params });
    return result.data;
  },
  channel: async (channelId) => {
    const params = new URLSearchParams();
    params.append('id', channelId);
    params.append('part', 'snippet');
    params.append('part', 'statistics');
    params.append('key', REACT_APP_API_KEY);
    const result = await axios.get(`${API_URL}/channels/`, { params });
    return result.data;
  },
};

export { YoutubeApi, apiSource };

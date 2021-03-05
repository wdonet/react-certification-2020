import axios from 'axios';

const KEY = 'AIzaSyADASQBgOcaLNrLkjNF4LoYNjxqZW0u0HE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 20,
    type: 'video',
    key: KEY,
  },
});

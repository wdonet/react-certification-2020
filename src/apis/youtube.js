import axios from 'axios';

const KEY = 'AIzaSyAKlMA9FgSpXSkjxhs69n6zsBOPhcHtiKA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

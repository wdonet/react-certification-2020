import axios from 'axios';
import { YoutubeApi } from './youtube';
import searchResult from '../mock/youtube-videos-mock.json';
import realatedVideos from '../mock/youtube-related-videos-mock.json';
import detailVideo from '../mock/youtube-detail-mock.json';
import channel from '../mock/youtube-channel-mock.json';

jest.mock('axios');

describe('Youtube Api', () => {
  it('should fetch search results', () => {
    const response = { data: searchResult };
    axios.get.mockResolvedValue(response);

    YoutubeApi.search('foo').then((data) => expect(data).toEqual(searchResult));
  });
  it('should fetch related videos', () => {
    const response = { data: realatedVideos };
    axios.get.mockResolvedValue(response);

    YoutubeApi.related('video#123').then((data) => expect(data).toEqual(realatedVideos));
  });
  it('should fetch detail video', () => {
    const response = { data: detailVideo };
    axios.get.mockResolvedValue(response);

    YoutubeApi.detail('video#123').then((data) => expect(data).toEqual(detailVideo));
  });
  it('should fetch channel info', () => {
    const response = { data: channel };
    axios.get.mockResolvedValue(response);

    YoutubeApi.channel('channel#123').then((data) => expect(data).toEqual(channel));
  });
});

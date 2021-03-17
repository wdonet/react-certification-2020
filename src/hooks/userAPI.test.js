import { renderHook } from '@testing-library/react-hooks';

import youtube from '../apis/youtube';
import useAPI from './useAPI';

const mockedVideos = {
  data: {
    items: [
      {
        id: { kind: 'youtube#video', videoId: 'nmXMgqjQzls' },
        snippet: {
          title: 'Video Tour | Welcome to Wizeline Guadalajara',
          description:
            'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
          thumbnails: {
            medium: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/medium.jpg',
              width: 120,
              height: 90,
            },
          },
        },
      },
      {
        id: { kind: 'youtube#video', videoId: 'nmXMgqjQlhj' },
        snippet: {
          title: 'Title',
          description: 'Description',
          thumbnails: {
            medium: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/medium.jpg',
              width: 120,
              height: 90,
            },
          },
        },
      },
    ],
  },
};

jest.mock('../apis/youtube', () => ({
  get: jest.fn(),
}));

describe('useAPI', () => {
  it('should return videos with default search term', async () => {
    youtube.get.mockImplementation(() => Promise.resolve(mockedVideos));
    const { result, waitForNextUpdate } = renderHook(() => useAPI());
    expect(result.current[1]).toStrictEqual(true);

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual(mockedVideos.data.items);
    expect(result.current[1]).toStrictEqual(false);
  });

  it('should return videos with then sent search term', async () => {
    youtube.get.mockImplementation(() => Promise.resolve(mockedVideos));
    const { result, waitForNextUpdate } = renderHook(() => useAPI('Happy dogs'));
    expect(result.current[1]).toStrictEqual(true);

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual(mockedVideos.data.items);
    expect(result.current[1]).toStrictEqual(false);
  });

  it('should returns an empty array if API fails', async () => {
    youtube.get.mockImplementation(() => Promise.resolve({}));
    const { result, waitForNextUpdate } = renderHook(() => useAPI());
    expect(result.current[1]).toStrictEqual(true);

    await waitForNextUpdate();

    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1]).toStrictEqual(false);
  });
});

import { fetchVideos } from './youTubeApi';
import responseMock from '../mockData/mockData.json';

describe('youTubeApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns expected list of videos', async () => {
    fetch.mockResponse(JSON.stringify(responseMock));

    const result = await fetchVideos('wizeline');

    expect(result).toEqual(
      expect.objectContaining({
        items: expect.any(Array),
      })
    );
  });

  it('returns a list of videos for empty search', async () => {
    fetch.mockResponse(JSON.stringify(responseMock));

    const result = await fetchVideos();

    expect(result).toEqual(
      expect.objectContaining({
        items: expect.any(Array),
      })
    );
  });
});

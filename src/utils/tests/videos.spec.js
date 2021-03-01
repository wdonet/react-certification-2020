import { getVisibleVideos } from '../videos';
import mockedData from '../mocked-youtube.json';

const { items } = mockedData;

describe('Video Utilities', () => {
  it('validates undefined filter', () => {
    const result = getVisibleVideos(items);
    expect(result.length).toBe(25);
  });

  it('validates no filter', () => {
    const result = getVisibleVideos(items, 'none');
    expect(result.length).toBe(25);
  });

  it('validates videos filter', () => {
    const result = getVisibleVideos(items, 'videos');
    expect(result.length).toBe(24);
  });

  it('validates channels filter', () => {
    const result = getVisibleVideos(items, 'channels');
    expect(result.length).toBe(1);
  });

  it('validates unknown filter', () => {
    const result = getVisibleVideos(items, 'unknown');
    expect(result.length).toBe(0);
  });

  it('validates exception on invalid data', () => {
    expect(() => getVisibleVideos(undefined, 'unknown')).toThrowError();
  });
});

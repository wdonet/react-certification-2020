import { VIDEOS } from 'mockData/youtube-videos-mock';

const DEFAULT_VIDEO_DETAIL = {
  snippet: { title: '' },
  statistics: { viewCount: 0, likeCount: 0, dislikeCount: 0 },
};
const useVideos = jest.fn(() => [VIDEOS.items, jest.fn()]);
const useVideoDetail = jest.fn(() => [DEFAULT_VIDEO_DETAIL, jest.fn()]);

export { useVideos, useVideoDetail };

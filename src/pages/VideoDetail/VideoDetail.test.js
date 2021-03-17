import 'mockData/matchMedia.mock';
import { VIDEOS } from 'mockData/youtube-videos-mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import VideoDetail from 'pages/VideoDetail';
import { useVideos, useVideoDetail } from 'utils/hooks/useVideos';

const MOCK_VIDEO = VIDEOS.items[0];
const MOCK_LOCATION = { state: { video: MOCK_VIDEO } };
const DEFAULT_VIDEO_DETAIL = {
  snippet: { title: '' },
  statistics: { viewCount: 0, likeCount: 0, dislikeCount: 0 },
};

jest.mock('utils/hooks/useVideos');

describe('VideoDetail', () => {
  it('renders a video player', () => {
    useVideos.mockImplementation(() => [VIDEOS.items, jest.fn()]);
    useVideoDetail.mockImplementation(() => [DEFAULT_VIDEO_DETAIL, jest.fn()]);

    const { getByRole } = render(
      <Router>
        <VideoDetail location={MOCK_LOCATION} />
      </Router>
    );
    expect(getByRole('application')).not.toBeUndefined();
  });

  it('renders the title, views, likes, dislikes, and description', () => {
    useVideos.mockImplementation(() => [VIDEOS.items, jest.fn()]);
    useVideoDetail.mockImplementation(() => [DEFAULT_VIDEO_DETAIL, jest.fn()]);

    const { getByLabelText } = render(
      <Router>
        <VideoDetail location={MOCK_LOCATION} />
      </Router>
    );

    expect(getByLabelText('detail-title')).not.toBeUndefined();
    expect(getByLabelText('detail-views')).not.toBeUndefined();
    expect(getByLabelText('detail-likes')).not.toBeUndefined();
    expect(getByLabelText('detail-dislikes')).not.toBeUndefined();
    expect(getByLabelText('detail-description')).not.toBeUndefined();
  });

  it('renders a list of related videos', () => {
    useVideos.mockImplementation(() => [VIDEOS.items, jest.fn()]);
    useVideoDetail.mockImplementation(() => [DEFAULT_VIDEO_DETAIL, jest.fn()]);

    const { getAllByRole } = render(
      <Router>
        <VideoDetail location={MOCK_LOCATION} />
      </Router>
    );

    expect(getAllByRole('listitem')).not.toBeUndefined();
    expect(getAllByRole('listitem').length).toBe(24);
  });
});

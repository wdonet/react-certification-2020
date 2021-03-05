import 'mockData/matchMedia.mock';
import { VIDEOS } from 'mockData/youtube-videos-mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import VideoDetail from 'pages/VideoDetail';

const MOCK_VIDEO = VIDEOS.items[0];
const MOCK_LOCATION = { state: { video: MOCK_VIDEO } };
jest.mock('utils/hooks/useVideos');

describe('VideoDetail', () => {
  it('renders a video player', () => {
    const { getByRole } = render(
      <Router>
        <VideoDetail location={MOCK_LOCATION} />
      </Router>
    );
    expect(getByRole('application')).not.toBeUndefined();
  });

  it('renders the title, views, likes, dislikes, and description', () => {
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
    const { getAllByRole } = render(
      <Router>
        <VideoDetail location={MOCK_LOCATION} />
      </Router>
    );

    expect(getAllByRole('listitem')).not.toBeUndefined();
    expect(getAllByRole('listitem').length).toBe(24);
  });
});

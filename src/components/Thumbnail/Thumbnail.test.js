import 'mockData/matchMedia.mock';
import { VIDEOS } from 'mockData/youtube-videos-mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Thumbnail from 'components/Thumbnail';

const MOCK_VIDEO = VIDEOS.items[0];

describe('Thumbnail', () => {
  it('renders an image', () => {
    const { getAllByRole } = render(
      <Router>
        <Thumbnail data={MOCK_VIDEO} />
      </Router>
    );
    expect(getAllByRole('img')).not.toBeUndefined();
  });

  it('renders a title', () => {
    const { getAllByRole } = render(
      <Router>
        <Thumbnail data={MOCK_VIDEO} />
      </Router>
    );
    expect(getAllByRole('heading')[0].tagName).toBe('H2');
  });

  it('renders a subtitle', () => {
    const { getAllByRole } = render(
      <Router>
        <Thumbnail data={MOCK_VIDEO} />
      </Router>
    );
    expect(getAllByRole('heading')[1].tagName).toBe('H3');
  });
});

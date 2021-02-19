import 'mockData/matchMedia.mock';
import { VIDEOS } from 'mockData/youtube-videos-mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from 'pages/Home';

describe('Home', () => {
  it('renders a list of videos', () => {
    const { getAllByRole } = render(
      <Router>
        <Home videos={VIDEOS} />
      </Router>
    );

    expect(getAllByRole('listitem').length).toBe(VIDEOS.items.length);
  });
});

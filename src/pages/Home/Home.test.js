import 'mockData/matchMedia.mock';
import { VIDEOS } from 'mockData/youtube-videos-mock';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from 'pages/Home';

describe('Home', () => {
  it('does not render any thumbnails if videos is empty', () => {
    const { queryByRole } = render(
      <Router>
        <Home videos={[]} />
      </Router>
    );

    expect(queryByRole('listitem')).not.toBeInTheDocument();
  });
  it('renders a list of thumbnails if videos is not empty', () => {
    const { getAllByRole } = render(
      <Router>
        <Home videos={VIDEOS.items} />
      </Router>
    );

    expect(getAllByRole('listitem').length).toBe(VIDEOS.items.length);
  });
});

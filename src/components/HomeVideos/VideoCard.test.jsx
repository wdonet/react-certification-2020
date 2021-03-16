import React from 'react';
import 'jest-styled-components';
import { getByRole, getByTitle } from '@testing-library/react';
import { youtubeMockedData, renderWithTheme } from '../../utils';

import VideoCard from './VideoCard';

const build = (Component = <VideoCard />) => {
  const { container } = renderWithTheme(Component);
  return { container };
};

describe('VideoCard', () => {
  it('shows content complying with ARIA attributes', () => {
    const video = youtubeMockedData.items[0];
    const { container } = build(<VideoCard video={video} />);

    const img = getByRole(container, 'img');
    const figcaption = container.querySelector('figcaption');

    expect(img).toHaveAttribute('alt', video.snippet.title);
    expect(img).toHaveAttribute('src', video.snippet.thumbnails.high.url);
    expect(figcaption).toHaveTextContent(video.snippet.description);

    expect(getByTitle(container, 'video-title')).toHaveTextContent(video.snippet.title);
    expect(container).toHaveTextContent(video.snippet.description);
  });
});

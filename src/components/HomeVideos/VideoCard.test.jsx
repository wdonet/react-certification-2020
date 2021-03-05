import React from 'react';
import 'jest-styled-components';
import { getByRole, getByTitle } from '@testing-library/react';
import { data, renderWithTheme } from '../../utils/testing';

import VideoCard from './VideoCard';

const build = (Component = <VideoCard />) => {
  const { container } = renderWithTheme(Component);
  return { container };
};

describe('VideoCard', () => {
  it('shows content complying with ARIA attributes', () => {
    const video = data.items[0];
    const { container } = build(<VideoCard video={video} />);

    const img = getByRole(container, 'img');
    const figcaption = container.querySelector('figcaption');

    expect(img).toHaveAttribute('src', video.snippet.thumbnails.high.url);
    expect(figcaption).toHaveTextContent(video.snippet.description);

    expect(getByRole(container, 'img')).toHaveAttribute('alt', video.snippet.title);
    expect(getByTitle(container, 'video-title')).toHaveTextContent(video.snippet.title);
    expect(container).toHaveTextContent(video.snippet.description);
  });
});

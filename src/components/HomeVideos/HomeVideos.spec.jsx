import React from 'react';
import 'jest-styled-components';
import { getAllByTestId } from '@testing-library/react';
import { data } from './mockData';
import { lightTheme } from '../../providers/theme/themes';
import { renderWithTheme } from '../../utils/testing';
import HomeVideos from './HomeVideos';

const build = (Component = <HomeVideos />, theme = lightTheme) => {
  const { container } = renderWithTheme(Component, theme);
  return { container };
};

describe('HomeVideos shows home videos', () => {
  it('displays card videos', () => {
    const { container } = build();
    const videos = getAllByTestId(container, (id) => id.includes('video-card-'));
    expect(videos).toHaveLength(data.items.length);
  });
});

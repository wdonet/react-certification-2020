import React from 'react';
import 'jest-styled-components';
import { getAllByTestId } from '@testing-library/react';
import { data, renderWithTheme, contextWrapper } from '../../utils/testing';
import { lightTheme } from '../../providers/themes';

import SearchContext from '../../providers/SearchContext';
import HomeVideos from './HomeVideos';

const build = (Component = <HomeVideos />, theme = lightTheme) => {
  const contextValue = { search: jest.fn(), videos: data.items };
  const Wrap = contextWrapper(SearchContext, contextValue, Component);
  const { container } = renderWithTheme(Wrap, theme);
  return { container };
};

describe('shows home videos', () => {
  it('displays card videos', () => {
    const { container } = build();
    const videos = getAllByTestId(container, (id) => id.includes('video-card-'));
    expect(videos).toHaveLength(data.items.length);
  });
});

import React from 'react';
import 'jest-styled-components';
import { getAllByTestId, render } from '@testing-library/react';
import { youtubeMockedData, contextWrapper } from '../../utils';
import { lightTheme } from '../../providers/themes';

import SearchContext from '../../providers/SearchContext';
import HomeVideos from './HomeVideos';
import AppContext from '../../providers/AppContext';

const build = (Component = <HomeVideos />) => {
  const contextValue = { search: jest.fn(), videos: youtubeMockedData.items };
  let Wrap = contextWrapper(SearchContext, contextValue, Component);
  Wrap = contextWrapper(AppContext, { theme: lightTheme }, Wrap);
  const { container } = render(Wrap);
  return { container };
};

describe('shows home videos', () => {
  it('displays card videos', () => {
    const { container } = build();
    const videos = getAllByTestId(container, (id) => id.includes('video-card-'));
    expect(videos).toHaveLength(youtubeMockedData.items.length);
  });
});

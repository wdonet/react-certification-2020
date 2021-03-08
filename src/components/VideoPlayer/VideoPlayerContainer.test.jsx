import React from 'react';
import 'jest-styled-components';
import { 
  contextWrapper, 
  renderWithTheme, 
  youtubeMockedData, 
  YTMockedObject } from '../../utils';
import SearchContext from '../../providers/SearchContext';
import VideoPlayerContainer from './VideoPlayerContainer';

global.YT = YTMockedObject;

const build = (Component = <VideoPlayerContainer />) => {
  const Wrap = contextWrapper(SearchContext,{ search: jest.fn , videos: youtubeMockedData.items }, Component);
  const { container } = renderWithTheme(Wrap);
  return { container };
};

describe('VideoPlayerContainer', () => {
  it('shows div for iframe load', () => {
    const { firstChild } = build().container;
    expect(firstChild).toMatchSnapshot();
  });
});

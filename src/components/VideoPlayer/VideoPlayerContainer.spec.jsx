import React from 'react';
import 'jest-styled-components';
import { getAllByTestId, render } from '@testing-library/react';
import { YTMockedObject, contextWrapper, youtubeMockedData } from '../../utils';
import SearchContext from '../../providers/SearchContext';
import VideoPlayerContainer from './VideoPlayerContainer';

global.YT = YTMockedObject;

const build = (Component = <VideoPlayerContainer />) => {
  const Wrap = contextWrapper(
    SearchContext,
    { search: jest.fn, videos: youtubeMockedData.items },
    Component
  );
  const { container } = render(Wrap);
  return { container };
};

describe('VideoPlayerContainer', () => {
  it('shows video list', () => {
    const { container } = build();
    const videoList = getAllByTestId(container, (id) => id.includes('small-caption-'));
    expect(videoList).toHaveLength(youtubeMockedData.items.length);
  });
});

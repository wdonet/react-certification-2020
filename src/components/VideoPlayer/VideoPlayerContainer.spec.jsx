import React from 'react';
import 'jest-styled-components';
import { getAllByTestId, render } from '@testing-library/react';
import { YTMockedObject, contextWrapper, youtubeMockedData } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';
import AppContext from '../../providers/AppContext';

global.YT = YTMockedObject;
const EXPECTED_LENGHT = 3

const build = (Component = <VideoPlayerContainer />) => {
  const Wrap = contextWrapper(
    AppContext,
    { search: jest.fn, videos: youtubeMockedData.items.slice(0, EXPECTED_LENGHT) },
    Component
  );
  const { container } = render(Wrap);
  return { container };
};

describe('VideoPlayerContainer', () => {
  
  it('shows video list', () => {
    const { container } = build();
    const videoList = getAllByTestId(container, (id) => id.includes('small-caption-'));
    expect(videoList).toHaveLength(EXPECTED_LENGHT);
  });

  it('shows video list', () => {
    const { container } = build();
    const videoList = getAllByTestId(container, (id) => id.includes('small-caption-'));
    expect(videoList).toHaveLength(EXPECTED_LENGHT);
  });
  
});

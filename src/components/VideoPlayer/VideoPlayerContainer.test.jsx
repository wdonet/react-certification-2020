import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { contextWrapper, youtubeMockedData, YTMockedObject } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';
import AppContext from '../../providers/AppContext';

global.YT = YTMockedObject;

const build = (Component = <VideoPlayerContainer />) => {
  const Wrap = contextWrapper(
    AppContext,
    { search: jest.fn, videosList: youtubeMockedData.items.slice(0, 1) },
    Component
  );
  const { container } = render(Wrap);
  return { container };
};

describe('VideoPlayerContainer', () => {
  it('shows div for iframe load', () => {
    const { firstChild } = build().container;
    expect(firstChild).toMatchSnapshot();
  });
});

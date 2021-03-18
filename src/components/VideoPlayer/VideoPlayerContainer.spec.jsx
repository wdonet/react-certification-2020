import React from 'react';
import 'jest-styled-components';
import { lightTheme } from '../../providers/themes';
import { getAllByTestId, render } from '@testing-library/react';
import { YTMockedObject, contextWrapper, youtubeMockedData } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';
import { fireEvent } from '@testing-library/dom';
import AppContext from '../../providers/AppContext';

global.YT = YTMockedObject;
const EXPECTED_LENGHT = 3

const build = (Component = <VideoPlayerContainer />) => {
  const Wrap = contextWrapper(
    AppContext,
    { search: jest.fn, videosList: youtubeMockedData.items.slice(0, EXPECTED_LENGHT), theme: lightTheme },
    Component
  );
  const { container } = render(Wrap);
  return { 
    container,
    videoCaptionsList: () => getAllByTestId(container, (id) => id.includes('small-caption-')) 
  };
};

describe('VideoPlayerContainer', () => {

  it('shows video list', () => {
    const { videoCaptionsList } = build();
    expect(videoCaptionsList()).toHaveLength(EXPECTED_LENGHT);
  });

  it('hangs YTPlayer instance on window object', () => {
    build();
    expect(window.YTPlayer).toBeTruthy();
  })

  it('plays video from the begining calling player instance', () => {
    const { videoCaptionsList } = build();
    const videoId = youtubeMockedData.items[0].id.videoId;
    fireEvent.click(videoCaptionsList()[0].firstChild);
    expect(window.YTPlayer.loadVideoById).toHaveBeenCalledTimes(1);
    expect(window.YTPlayer.loadVideoById).toHaveBeenCalledWith(videoId, 0);
  })
  
});
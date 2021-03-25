import React from 'react';
import 'jest-styled-components';
import { lightTheme } from '../../providers/themes';
import { act, getAllByTestId, render } from '@testing-library/react';
import { YTMockedObject, contextWrapper, youtubeMockedData, routerWrapper } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';
import { fireEvent, getByTestId } from '@testing-library/dom';
import AppContext from '../../providers/AppContext';

global.YT = YTMockedObject;
const EXPECTED_LENGHT = 3
const contextValueVideosList = youtubeMockedData.items.slice(0, EXPECTED_LENGHT);

const build = async (
  Component = <VideoPlayerContainer />, 
  videosList = contextValueVideosList, 
  currentVideoId = contextValueVideosList[0].id.videoId
  ) => {
  const contextValue = { search: jest.fn, videosList, currentVideoId, theme: lightTheme };
  let container;
  let routeWrap; 
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });

  return { 
    container,
    history: () => routeWrap.history,
    searchParams: () => new URLSearchParams(routeWrap.history.location.search),
    videoCaptionsList: () => getAllByTestId(container, (id) => id.includes('small-caption-')),
  };
};

describe('VideoPlayerContainer', () => {

  it('shows video list', async () => {
    const built = (await build());
    const { videoCaptionsList } = built;
    expect(videoCaptionsList()).toHaveLength(EXPECTED_LENGHT);
  });

  it('plays video from the begining redirecting to /player passing videoId', async () => {
    window.YTPlayer = {
      loadVideoById: jest.fn()
    };
    const built = (await build());
    const { videoCaptionsList, searchParams, history } = built;
    const videoId = youtubeMockedData.items[0].id.videoId;
    fireEvent.click(videoCaptionsList()[0].firstChild);
    expect(history().location.pathname).toBe("/player");
    expect(searchParams().has("id")).toBe(true);
    expect(searchParams().get("id")).toBe(videoId);
  });
});
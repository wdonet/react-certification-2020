import React from 'react';
import 'jest-styled-components';
import { fireEvent, getAllByTestId } from '@testing-library/dom';
import { act, render } from '@testing-library/react';
import { lightTheme } from '../../providers/themes';
import { contextWrapper, routerWrapper, youtubeMockedData, YTMockedObject } from '../../utils';
import RelatedVideosList from './RelatedVideosList';
import AppContext from '../../providers/AppContext';

global.YT = YTMockedObject;

const build = async (Component = <RelatedVideosList />) => {
  const contextValue = { videosList: youtubeMockedData.items.slice(0, 1), theme: lightTheme };
  let routeWrap;
  let container;
  await act(async () => {
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(wrappedContext);
    container = render(routeWrap.wrap).container;
  });
  return { 
    container,
    history: () => routeWrap.history,
    searchParams: () => new URLSearchParams(routeWrap.history.location.search),
    videoCaptionsList: () => getAllByTestId(container, (testID) => testID.includes('small-caption-')) 
  };
};

describe('RelatedVideosList', () => {
  it('triggers video playback by ID', async () => {
    const built = await build(<RelatedVideosList />);
    const { videoCaptionsList, searchParams, history } = built;
    fireEvent.click(videoCaptionsList()[0].firstChild);

    const video = youtubeMockedData.items[0];
    const { videoId } = video.id;
    
    expect(history().location.pathname).toBe("/player");
    expect(history().location.state).toBe(video);
    expect(searchParams().has("id")).toBe(true);
    expect(searchParams().get("id")).toBe(videoId);

  });
});

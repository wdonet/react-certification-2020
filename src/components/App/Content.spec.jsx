import React from 'react';
import { contextWrapper, googleMockedAPIObject, routerWrapper, youtubeMockedData, YTMockedObject } from '../../utils';
import { getAllByTestId, getByTestId } from '@testing-library/dom';
import { fireEvent, act, render } from '@testing-library/react';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import Content from './Content';

global.gapi = googleMockedAPIObject();
global.YT = YTMockedObject;

const build = async (Component = <Content />) => {
  let container;
  let routeWrap;
  const mockedVideos = youtubeMockedData.items.slice(0,1);
  const contextValue = { videosList: mockedVideos, theme: lightTheme, playVideoById: jest.fn() };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  return {
    mockedVideos,
    history: () => routeWrap.history,
    searchParams: () => new URLSearchParams(routeWrap.history.location.search),
    
    container,
    videosList: () => getAllByTestId(container, (testID) => testID.includes('video-card-') ),
    unableToLoadVideos: () => getByTestId(container, 'unable-to-load-videos' ),
  };
};

describe('Content behavior', () => {

  it('redirects from / route to /home route', async () => {
    const built = (await build());
    const { history } = built;
    
    await act(async () => { history().push("/") });

    expect(history().location.pathname).toBe("/home");
  });

  it('switches from home videos view to VideoPlayer view', async () => {
    const built = (await build());
    const { searchParams, videosList, history,  mockedVideos } = built;
    
    expect(searchParams().has("id")).toBe(false);
    expect(history().location.pathname).toBe("/home");
    
    await act(async () => { fireEvent.click(videosList()[0].firstChild); });
    
    expect(history().location.pathname).toBe("/player");
    expect(searchParams().has("id")).toBe(true);
    expect(searchParams().get("id")).toEqual(mockedVideos[0].id.videoId);
  });

});
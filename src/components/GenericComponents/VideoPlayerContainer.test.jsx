import React from 'react';
import 'jest-styled-components';
import { lightTheme } from '../../providers/themes';
import { act, getAllByTestId, render } from '@testing-library/react';
import { YTMockedObject, contextWrapper, youtubeMockedData, routerWrapper } from '../../utils';
import VideoPlayerContainer from './VideoPlayerContainer';
import AppContext from '../../providers/AppContext';
import RelatedVideosContext from '../../providers/RelatedVideosContext';
import PlayerContext from '../../providers/PlayerContext';

global.YT = YTMockedObject;
const EXPECTED_LENGHT = 3
const contextValueVideosList = youtubeMockedData.items.slice(0, EXPECTED_LENGHT);
const build = async (
  Component = <VideoPlayerContainer videosList={contextValueVideosList}/>, 
  currentVideoId = contextValueVideosList[0].id.videoId
  ) => {
  const appContextValue = { search: jest.fn, currentVideoId, theme: lightTheme };
  const playerContextValue = { hideFavoritesButtons: false };
  const relatedVideosContextValue = { favoritesList: [], addRemoveFavorite: jest.fn() };
  let container;
  let routeWrap; 
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, appContextValue, Component);
    contextWrap = contextWrapper(PlayerContext, playerContextValue, contextWrap);
    contextWrap = contextWrapper(RelatedVideosContext, relatedVideosContextValue, contextWrap);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });

  return { 
    container,
    history: () => routeWrap.history,
    videoCaptionsList: () => getAllByTestId(container, (id) => id.includes('small-caption-')) 
  };
};

describe('VideoPlayerContainer', () => {
  it('shows div for iframe load', async () => {
    const built = await build();
    const { firstChild } = built.container;
    expect(firstChild).toMatchSnapshot();
  });
});

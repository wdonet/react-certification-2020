import React from 'react';
import 'jest-styled-components';
import { act, render } from '@testing-library/react';
import { lightTheme } from '../../providers/themes';
import { contextWrapper, routerWrapper, youtubeMockedData, YTMockedObject } from '../../utils/'
import AppContext from '../../providers/AppContext';
import RelatedVideosList from './RelatedVideosList';
import RelatedVideosContext from '../../providers/RelatedVideosContext';
import PlayerContext from '../../providers/PlayerContext';

global.YT = YTMockedObject;

const build = async (Component = <RelatedVideosList />) => {
  const appContextValue = { theme: lightTheme };
  const playerContextValue = { hideFavoriteButtons: false };
  const relatedVideosContextValue = { favoritesList: [], addRemoveFavorite: jest.fn() };
  let container;
  await act(async () => {
    let wrappedContext = contextWrapper(AppContext, appContextValue, Component);
    wrappedContext = contextWrapper(PlayerContext, playerContextValue, wrappedContext);
    wrappedContext = contextWrapper(RelatedVideosContext, relatedVideosContextValue, wrappedContext);
    const routeWrap = await routerWrapper(wrappedContext);
    container = render(routeWrap.wrap).container;
  })
  return { container };
};

describe('RelatedVideosList', () => {
  it('applies default styles', async() => {
    const built = await build(<RelatedVideosList videosList={youtubeMockedData.items}/>);
    const { firstChild } = built.container;
    expect(firstChild).toHaveStyle('height: calc(100vh - 64px)');
    expect(firstChild).toHaveStyle('width: 40%');
    expect(firstChild).toHaveStyle('overflow: scroll');
  });
});

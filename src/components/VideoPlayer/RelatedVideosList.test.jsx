import React from 'react';
import 'jest-styled-components';
import { act, render } from '@testing-library/react';
import { lightTheme } from '../../providers/themes';
import { contextWrapper, routerWrapper, youtubeMockedData, YTMockedObject } from '../../utils/'
import AppContext from '../../providers/AppContext';
import RelatedVideosList from './RelatedVideosList';

global.YT = YTMockedObject;

const build = async (Component = <RelatedVideosList />) => {
  const contextValue = { videosList: youtubeMockedData.items.slice(0, 1), theme: lightTheme };
  let container;
  await act(async () => {
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const routeWrap = await routerWrapper(wrappedContext);
    container = render(routeWrap.wrap).container;
  })
  return { container };
};

describe('RelatedVideosList', () => {
  it('applies default styles', async() => {
    const built = await build(<RelatedVideosList />);
    const { firstChild } = built.container;
    expect(firstChild).toHaveStyle('height: calc(100vh - 64px)');
    expect(firstChild).toHaveStyle('width: 40%');
    expect(firstChild).toHaveStyle('overflow: scroll');
  });
});

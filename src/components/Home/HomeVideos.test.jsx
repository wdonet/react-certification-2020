import React from 'react';
import 'jest-styled-components';
import { render, act } from '@testing-library/react';
import { contextWrapper, routerWrapper, youtubeMockedData } from '../../utils/index';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import HomeVideos from './HomeVideos';

const build = async (Component = <HomeVideos />) => {
  let container;
  let routeWrap;
  const contextValue = { videosList: youtubeMockedData.items.slice(2), theme: lightTheme };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  return {
    history: () => routeWrap.history,
    searchParams: () => new URLSearchParams(routeWrap.history.location.search),
    container,
  }
};

describe('HomeVideos', () => {
  it('renders', async () => {
    const built = await build(<HomeVideos />);
    expect(built.container).toMatchSnapshot();
  });
});

describe('HomeVideos styles and props', () => {
  it('applies default styling', async () => {
    const built = await build(<HomeVideos />);
    const { firstChild } = built.container;
    expect(firstChild).toHaveStyle('justify-content: center');
    expect(firstChild).toHaveStyle('height: 100%');
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('flex-flow: row wrap');
  });
});

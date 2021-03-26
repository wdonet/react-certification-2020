import React from 'react';
import 'jest-styled-components';
import { getByRole, render, act } from '@testing-library/react';
import { contextWrapper, googleMockedAPIObject, routerWrapper } from '../../utils';
import { darkTheme, lightTheme } from '../../providers/themes';
import LayoutWrapper from './LayoutWrapper';
import AppContext from '../../providers/AppContext';

global.gapi = googleMockedAPIObject();
const loginPortal = document.createElement('div');
loginPortal.id = "login-portal";
document.body.appendChild(loginPortal);

const build = async (Component = <LayoutWrapper />, theme = lightTheme) => {
  let container;
  let routeWrap;
  const contextValue = { theme, playVideoById: jest.fn() };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  return {
    container,
    Header: () => getByRole(container, 'toolbar'),
    HomeView: () => getByRole(container, 'main'),
  };
};

describe('LayoutWrapper', () => {
  it('renders', async () => {
    const wrapper = await build();
    expect(wrapper).toMatchSnapshot();
  });

  it('displays Header and HomeView', async () => {
    const built = await build();
    const { Header, HomeView } = built;

    expect(Header()).toBeInTheDocument();
    expect(HomeView()).toBeInTheDocument();
  });
});

describe('LayoutWrapper styles', () => {
  it('applies default styling', async () => {
    const { firstChild } = (await build()).container;
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('height: 100%');
  });

  it('applies background for light theme', async () => {
    const { firstChild } = (await build()).container;
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.background}`);
  });

  it('applies background for dark theme', async () => {
    const { firstChild } = (await build(<LayoutWrapper/>, darkTheme)).container;
    expect(firstChild).toHaveStyle(`background: ${darkTheme.color.background}`);
  });
});

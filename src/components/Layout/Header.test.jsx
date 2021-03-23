import React from 'react';
import 'jest-styled-components';
import { getByRole, render, act } from '@testing-library/react';
import AppContext from '../../providers/AppContext';
import { contextWrapper, routerWrapper, youtubeMockedData } from '../../utils';
import { darkTheme, lightTheme } from '../../providers/themes';
import Header from './Header';

const build = async (Component = <Header />, theme = lightTheme) => {
  let container;
  let routeWrap;
  const contextValue = {  playVideoById: jest.fn(), search: jest.fn(), theme };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  return {
    container,
    HamburguerIcon: () => getByRole(container, 'button', { name: 'hamburguer' }),
    SearchInput: () => getByRole(container, 'search'),
    ThemeModeSwitch: () => getByRole(container, 'switch'),
    UserAvatar: () => getByRole(container, 'button', { name: 'profile' }),
  };
};

describe('Header', () => {
  it('renders', async () => {
    const { container } = await build();
    expect(container).toMatchSnapshot();
  });

  it('displays its default content', async () => {
    const built = await build();
    const { HamburguerIcon, SearchInput, ThemeModeSwitch, UserAvatar } = built;
    expect(HamburguerIcon()).toBeInTheDocument();
    expect(SearchInput()).toBeInTheDocument();
    expect(ThemeModeSwitch()).toBeInTheDocument();
    expect(UserAvatar()).toBeInTheDocument();
  });
});

describe('Header styles', () => {
  it('applies default styling', async () => {
    const built = await build();
    const { firstChild } = built.container;
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('align-items: center');
    expect(firstChild).toHaveStyle('justify-content: space-between');
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('height: 64px');
    expect(firstChild).toHaveStyle('overflow: hidden');
    expect(firstChild).toHaveStyle('position: fixed');
    expect(firstChild).toHaveStyle('top: 0');
  });

  it('applies background color for light theme', async () => {
    const built = await build();
    const { firstChild } = built.container;
    expect(firstChild).toHaveStyle(`background-color: ${lightTheme.color.primary}`);
  })

  it('applies background color for dark theme', async () => {
    const built = await build(<Header />, darkTheme);
    const { firstChild } = built.container;
    expect(firstChild).toHaveStyle(`background-color: ${darkTheme.color.primary}`);
  })

});

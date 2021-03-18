import React from 'react';
import 'jest-styled-components';
import { getByRole, render, act } from '@testing-library/react';
import { contextWrapper, googleMockedAPIObject } from '../../utils';
import { darkTheme, lightTheme } from '../../providers/themes';
import LayoutWrapper from './LayoutWrapper';
import AppContext from '../../providers/AppContext';

global.gapi = googleMockedAPIObject();

const build = async (Component = <LayoutWrapper />, theme = lightTheme) => {
  let container;
  const contextValue = { theme };
  const WrapInAppContext = contextWrapper(AppContext, contextValue, Component);
  await act(async () => {
    container = render(WrapInAppContext).container;
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
    const { Header, HomeView } = await build();

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

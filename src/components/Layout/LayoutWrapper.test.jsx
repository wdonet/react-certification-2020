import React from 'react';
import 'jest-styled-components';
import { getByRole, render, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { contextWrapper, googleMockedAPIObject } from '../../utils';
import { lightTheme } from '../../providers/themes';
import LayoutWrapper from './LayoutWrapper';
import AppContext from '../../providers/AppContext';

global.gapi = googleMockedAPIObject();

const build = async (Component = <LayoutWrapper />) => {
  let container;
  const WrapInAppContext = contextWrapper(AppContext, {setHomeVideosView:jest.fn()}, Component);
  await act(async () => {
    container = render(
      <ThemeProvider theme={{ theme: lightTheme }}>{WrapInAppContext}</ThemeProvider>
    ).container;
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
});

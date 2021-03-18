import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { contextWrapper, youtubeMockedData } from '../../utils/index';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import HomeVideos from './HomeVideos';

const build = (Component = <HomeVideos />) => {
  const contextValue = { videosList: youtubeMockedData.items.slice(2), theme: lightTheme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('HomeVideos', () => {
  it('renders', () => {
    const { container } = build(<HomeVideos />);
    expect(container).toMatchSnapshot();
  });
});

describe('HomeVideos styles and props', () => {
  it('applies default styling', () => {
    const { firstChild } = build(<HomeVideos />).container;
    expect(firstChild).toHaveStyle('justify-content: center');
    expect(firstChild).toHaveStyle('height: 100%');
    expect(firstChild).toHaveStyle('width: 100%');
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('flex-flow: row wrap');
  });
});

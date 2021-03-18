import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import { contextWrapper, youtubeMockedData, YTMockedObject } from '../../utils/'
import AppContext from '../../providers/AppContext';
import RelatedVideosList from './RelatedVideoList';
import { lightTheme } from '../../providers/themes';

global.YT = YTMockedObject;

const build = (Component = <RelatedVideosList />) => {
  const contextValue = { videosList: youtubeMockedData.items.slice(0, 1), theme: lightTheme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('RelatedVideosList', () => {
  it('applies default styles', () => {
    const { firstChild } = build(<RelatedVideosList videos={[]} />).container;
    expect(firstChild).toHaveStyle('height: calc(100vh - 64px)');
    expect(firstChild).toHaveStyle('width: 40%');
    expect(firstChild).toHaveStyle('overflow: scroll');
  });
});

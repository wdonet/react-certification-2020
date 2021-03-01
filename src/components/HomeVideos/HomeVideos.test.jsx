import React from 'react';
import 'jest-styled-components';
import { getAllByTestId, render } from '@testing-library/react';
import HomeVideos from './HomeVideos';
import { data } from './mockData';

const build = (Component = <HomeVideos />) => {
  const { container } = render(Component);
  return { container };
}

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

describe('HomeVideos shows home videos', () => {
  it('displays all videos', () => {
    const { container } = build();
    const videos = getAllByTestId(container, (id) => id.includes('video-card-'));
    expect( videos ).toHaveLength(data.items.length);
  });
});

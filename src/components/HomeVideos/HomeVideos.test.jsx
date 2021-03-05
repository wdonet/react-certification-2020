import React from 'react';
import 'jest-styled-components';
import { getAllByTestId } from '@testing-library/react';
import { data } from './mockData';
import { lightTheme } from '../../providers/theme/themes';
import { renderWithTheme } from '../../utils/testing';
import HomeVideos from './HomeVideos';

const build = (Component = <HomeVideos />, theme = lightTheme) => {
  const { container } = renderWithTheme(Component, theme);
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

describe('HomeVideos shows home videos', () => {
  it('displays all videos', () => {
    const { container } = build();
    const videos = getAllByTestId(container, (id) => id.includes('video-card-'));
    expect(videos).toHaveLength(data.items.length);
  });
});

import React from 'react';
import 'jest-styled-components';
import { getByRole } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { youtubeMockedData } from '../../utils';
import { lightTheme, darkTheme } from '../../providers/themes'
import { contextWrapper } from '../../utils' 
import AppContext from '../../providers/AppContext'
import SmallVideoCard from './SmallVideoCard';

const build = (Component = <SmallVideoCard />, theme = lightTheme) => {
  const contextValue = { theme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { container };
};

describe('SmallVideoCard', () => {
  it('shows video info', () => {
    const mockVideo = youtubeMockedData.items[0];
    const { firstChild } = build(<SmallVideoCard video={mockVideo} />).container;
    expect(firstChild).toMatchSnapshot();
  });

  it('applies default styling', () => {
    const mockVideo = youtubeMockedData.items[0];
    const { firstChild } = build(<SmallVideoCard video={mockVideo} />).container;
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('padding: 4px');
    expect(firstChild).toHaveStyle('margin: 4px');
    expect(firstChild).toHaveStyle('cursor: pointer');
  });

  it('applies colors for light theme', () => {
    const mockVideo = youtubeMockedData.items[0];
    const { firstChild } = build(<SmallVideoCard video={mockVideo} />).container;
    expect(firstChild).toHaveStyle(`border-bottom: 1px solid ${lightTheme.color.secondary}`);
    expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
    expect(firstChild).toHaveStyle(`color: ${lightTheme.color.fontSecondary}`);
  });

  it('applies colors for dark theme', () => {
    const mockVideo = youtubeMockedData.items[0];
    const { firstChild } = build(<SmallVideoCard video={mockVideo} />, darkTheme).container;
    expect(firstChild).toHaveStyle(`border-bottom: 1px solid ${darkTheme.color.secondary}`);
    expect(firstChild).toHaveStyle(`background: ${darkTheme.color.surface}`);
    expect(firstChild).toHaveStyle(`color: ${darkTheme.color.fontSecondary}`);
    expect(firstChild).toHaveStyle(`border-radius: 4px`);
  });

  it('shows video info', () => {
    const video = youtubeMockedData.items[0];
    const { snippet } = video;
    const { container } = build(<SmallVideoCard video={video} />);
    const image = getByRole(container, 'img');

    expect(image).toHaveAttribute('alt', snippet.title);
    expect(image).toHaveAttribute('src', snippet.thumbnails.default.url);
    expect(container).toHaveTextContent(snippet.description);
  });
});

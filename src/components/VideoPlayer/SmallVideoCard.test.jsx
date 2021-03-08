import React from 'react';
import 'jest-styled-components';
import { getByRole } from '@testing-library/dom';
import { renderWithTheme, youtubeMockedData } from '../../utils';
import SmallVideoCard from './SmallVideoCard';

const build = (Component = <SmallVideoCard />) => {
  const { container } = renderWithTheme(Component);
  return { container };
};

describe('SmallVideoCard', () => {
  it('shows video info', () => {
    const mockVideo = youtubeMockedData.items[0];
    const { firstChild } = build(<SmallVideoCard video={mockVideo} />).container;
    expect(firstChild).toMatchSnapshot();
  });

  it('applies default theme', () => {
    const mockVideo = youtubeMockedData.items[0];
    const { firstChild } = build(<SmallVideoCard video={mockVideo} />).container;
    expect(firstChild).toHaveStyle('display: flex');
    expect(firstChild).toHaveStyle('padding: 4px');
    expect(firstChild).toHaveStyle('margin: 4px');
    expect(firstChild).toHaveStyle('cursor: pointer');
    expect(firstChild).toHaveStyle('border-bottom: 1px solid #eaeaea');
  });

  it('shows video info', () => {
    const { snippet } = youtubeMockedData.items[0];
    const { container } = build(<SmallVideoCard video={{ snippet }} />);
    const image = getByRole(container, 'img');

    expect(image).toHaveAttribute('alt', snippet.title);
    expect(image).toHaveAttribute('src', snippet.thumbnails.default.url);
    expect(container).toHaveTextContent(snippet.description);
  });
});

import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/dom';
import { renderWithTheme, youtubeMockedData } from '../../utils';
import VideoCard from './VideoCard';

const build = (Component = <VideoCard />) => {
  const { container } = renderWithTheme(Component);
  return { container };
};

describe('VideoCard', () => {
  it('triggers "onClick" function', () => {
    const mockedFunction = jest.fn();
    const video = youtubeMockedData.items[0];
    const { firstChild } = build(
      <VideoCard video={video} onClick={mockedFunction} />
    ).container;

    fireEvent.click(firstChild);

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});

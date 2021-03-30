import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { contextWrapper, youtubeMockedData } from '../../utils';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import VideoCard from './VideoCard';

const build = (Component = <VideoCard />) => {
  const wrapped = contextWrapper(AppContext, { theme: lightTheme }, Component);
  const { container } = render(wrapped);
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

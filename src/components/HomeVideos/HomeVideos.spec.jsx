import React from 'react';
import 'jest-styled-components';
import { getAllByTestId, render } from '@testing-library/react';
import { youtubeMockedData, contextWrapper } from '../../utils';
import { lightTheme } from '../../providers/themes';
import HomeVideos from './HomeVideos';
import AppContext from '../../providers/AppContext';
import { fireEvent } from '@testing-library/dom';

const EXPECTED_LENGTH = 1;

const build = (Component = <HomeVideos />) => {
  const contextValue = { videosList: youtubeMockedData.items.slice(0, EXPECTED_LENGTH), theme: lightTheme, playVideoById: jest.fn() };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { 
    videoCards: () => getAllByTestId(container, (testID) => testID.includes('video-card-') ),
    contextValue 
  };
};

describe('shows home videos', () => {
  it('displays card videos', () => {
    const { videoCards } = build();
    expect(videoCards()).toHaveLength(EXPECTED_LENGTH);
  });

  it('triggers video playback by videoId', () => {
    const { videoCards, contextValue } = build();
    const { videoId } = youtubeMockedData.items[0].id;
    fireEvent.click(videoCards()[0].firstChild);
    expect(contextValue.playVideoById).toHaveBeenCalledTimes(1);
    expect(contextValue.playVideoById).toHaveBeenCalledWith(videoId);
  })
});

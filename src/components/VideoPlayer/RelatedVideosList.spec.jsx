import React from 'react';
import 'jest-styled-components';
import { fireEvent, getAllByTestId } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { contextWrapper, youtubeMockedData, YTMockedObject } from '../../utils';
import RelatedVideosList from './RelatedVideoList';
import AppContext from '../../providers/AppContext';
import { lightTheme } from '../../providers/themes';

global.YT = YTMockedObject;

const build = (Component = <RelatedVideosList />) => {
  const contextValue = { videosList: youtubeMockedData.items.slice(0, 1), theme: lightTheme };
  const wrapped = contextWrapper(AppContext, contextValue, Component);
  const { container } = render(wrapped);
  return { 
    container, 
    contextValue,
    videoCaptionsList: () => getAllByTestId(container, (testID) => testID.includes('small-caption-')) 
  };
};

describe('RelatedVideosList', () => {
  it('triggers video playback by ID', () => {
    const mockedPlayVideoById = jest.fn();
    const { videoCaptionsList } = build(<RelatedVideosList  playVideoById={mockedPlayVideoById}/>);
    fireEvent.click(videoCaptionsList()[0].firstChild);
    expect(mockedPlayVideoById).toHaveBeenCalledTimes(1);
  });
});

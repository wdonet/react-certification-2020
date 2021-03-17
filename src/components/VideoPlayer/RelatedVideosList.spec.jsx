import React from 'react';
import 'jest-styled-components';
import { fireEvent, getAllByTestId } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { contextWrapper, youtubeMockedData } from '../../utils';
import RelatedVideosList from './RelatedVideoList';
import AppContext from '../../providers/AppContext';

const build = (Component = <RelatedVideosList />) => {
  const mockedPlayVideoByID = jest.fn();
  const contextValue = { videosList: youtubeMockedData.items.slice(0, 1), playVideoByID: mockedPlayVideoByID };
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
    const { contextValue, videoCaptionsList } = build();
    fireEvent.click(videoCaptionsList()[0].firstChild);

    expect(contextValue.playVideoByID).toHaveBeenCalledTimes(1);
  });
});

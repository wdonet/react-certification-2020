import React from 'react';
import 'jest-styled-components';
import { act, fireEvent, render } from '@testing-library/react';
import { lightTheme } from '../../providers/themes';
import { contextWrapper, youtubeMockedData, YTMockedObject } from '../../utils/'
import AppContext from '../../providers/AppContext';
import RelatedVideosList from './RelatedVideosList';
import { getAllByTestId } from '@testing-library/dom';

global.YT = YTMockedObject;

const build = async (Component = <RelatedVideosList />) => {
  const contextValue = { theme: lightTheme };
  let container;
  
  const wrappedContext = contextWrapper(AppContext, contextValue, Component);
  container = render(wrappedContext).container;
  
  return { 
    container,
    videoCaptionsList: () => getAllByTestId(container, (testID) => testID.includes('small-caption-')) 
  };
};

describe('RelatedVideosList', () => {
  it('triggers onCaptionClick function ', async () => {
    const mockedFunction = jest.fn();
    const video = youtubeMockedData.items[0];
    const built = await build(<RelatedVideosList videosList={youtubeMockedData.items} onCaptionClick={mockedFunction}/>);

    const { videoCaptionsList } = built;

    fireEvent.click(videoCaptionsList()[0].firstChild);

    expect(mockedFunction).toHaveBeenCalledTimes(1);
    expect(mockedFunction).toHaveBeenCalledWith(video);  
  });
});

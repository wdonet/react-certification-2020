import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { youtubeMockedData } from '../../utils';
import { lightTheme } from '../../providers/themes'
import { contextWrapper } from '../../utils' 
import AppContext from '../../providers/AppContext'
import SmallVideoCard from './SmallVideoCard';
import RelatedVideosContext from '../../providers/RelatedVideosContext';

const build = (Component = <SmallVideoCard />, theme = lightTheme) => {
  const appContextValue = { theme };
  const relatedVideosContextValue = { favoritesList: [], addRemoveFavorite: jest.fn() }
  let wrappedContext = contextWrapper(AppContext, appContextValue, Component);
  wrappedContext = contextWrapper(RelatedVideosContext, relatedVideosContextValue, wrappedContext);
  const { container } = render(wrappedContext);
  return { container };
};

describe('SmallVideoCard', () => {
  it('triggers on click', () => {
    const mockedFunction = jest.fn();
    const { snippet } = youtubeMockedData.items[0];
    const { firstChild } = build(
      <SmallVideoCard video={youtubeMockedData.items[0]} onClick={mockedFunction} />
    ).container;

    fireEvent.click(firstChild);

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});

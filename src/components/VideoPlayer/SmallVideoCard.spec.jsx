import React from 'react';
import 'jest-styled-components';
import { fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { youtubeMockedData } from '../../utils';
import { lightTheme } from '../../providers/themes'
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
  it('triggers on click', () => {
    const mockedFunction = jest.fn();
    const { snippet } = youtubeMockedData.items[0];
    const { firstChild } = build(
      <SmallVideoCard video={{ snippet }} onClick={mockedFunction} />
    ).container;

    fireEvent.click(firstChild);

    expect(mockedFunction).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByRole } from '@testing-library/dom';
import { act, render } from '@testing-library/react';
import { contextWrapper, routerWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';
import { lightTheme } from '../../providers/themes'
import Header from './Header';;

const build = async (Component = <Header />, theme = lightTheme) => {
  let container;
  let routeWrap;
  const contextValue = { playVideoById: jest.fn(), search: jest.fn(), theme };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });
  return {
    container,
    history: () => routeWrap.history,
    searchInput: () => getByRole(container, 'search'),
    contextValue,
  };
};

describe('Header', () => {
  it('renders', async () => {
    const built = await build();
    const { container } = built;
    expect(container).toMatchSnapshot();
  });

  it('fires user search until presses enter', async () => {
    const EXPECTED_TEXT = 'Hello, ';
    const TRIGGER_TYPING = 'there';
    const built = await build();
    const { searchInput, history, contextValue } = built;
    fireEvent.change(searchInput(), { target: { value: TRIGGER_TYPING } });
    fireEvent.change(searchInput(), { target: { value: EXPECTED_TEXT } });
    expect(searchInput().value).toBe(EXPECTED_TEXT);
    expect(contextValue.search).not.toHaveBeenCalled();
    fireEvent.keyPress(searchInput(), { key: 'Enter', code: 13, charCode: 13 });
    expect(history().location.pathname).toBe("/home");
    expect(contextValue.search).toHaveBeenCalled();
  });
});

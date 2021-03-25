import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByRole, getByTestId } from '@testing-library/dom';
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
    userAvatar: () => getByTestId(container, 'user-avatar'),
    loginButton: () => getByTestId(container, 'menu-login-button'),
    loginForm: () => getByTestId(container, 'login-form'),
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

  it('opens up Login form when "Iniciar sesión" button is clicked', async () => {
    const built = await build();
    const { loginButton, loginForm, userAvatar } = built;
    fireEvent.click(userAvatar());
    act(() => {
      fireEvent.click(loginButton());
    });
    expect(loginForm()).toBeVisible();
  });

  it('closes Login form when "Cancelar" button in form is clicked', async () => {
    const built = await build();
    const { loginButton, loginForm, userAvatar } = built;
    
    fireEvent.click(userAvatar());
    
    act(() => { fireEvent.click(loginButton()) } );

    expect(loginForm()).toBeVisible();
    
    const cancelButton = getByTestId(loginForm(), 'cancel-button');
    
    act(() => { fireEvent.click(cancelButton) } );

    expect(loginForm()).not.toBeVisible();
  });
  
});

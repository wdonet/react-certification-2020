import React from 'react';
import 'jest-styled-components';
import { fireEvent, getAllByRole, getByAltText, getByRole, getByTestId } from '@testing-library/dom';
import { act, cleanup, render } from '@testing-library/react';
import { contextWrapper, routerWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';
import { lightTheme } from '../../providers/themes'
import Header from './Header';

const build = async (Component = <Header />, theme = lightTheme) => {
  let container;
  let routeWrap;
  const contextValue = { playVideoById: jest.fn(), search: jest.fn(), theme };
  await act(async () => {
    let contextWrap = contextWrapper(AppContext, contextValue, Component);
    routeWrap = await routerWrapper(contextWrap);
    container = render(routeWrap.wrap).container;
  });

  const sidebar = () => getByTestId(container, 'sidebar');
  routeWrap.history.push("/");
  
  return {
    container,
    history: () => routeWrap.history,
    searchInput: () => getByRole(container, 'search'),
    userAvatar: () => getByTestId(container, 'user-avatar'),
    sidebar,
    loginButton: () => getByTestId(container, 'menu-login-button'),
    loginForm: () => getByTestId(container, 'login-form'),
    hamburgerIcon: () => getByAltText(container, 'hamburguer'),
    sidebarButtons: () => getAllByRole(sidebar(), 'button'),
    contextValue,
  };
};

describe('Header', () => {

  beforeEach(() => cleanup());

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

  it('opens Sidebar when "hamburguer" icon is clicked', async () => {
    const built = await build();
    const { hamburgerIcon, sidebar } = built;
    
    act(() => { fireEvent.click(hamburgerIcon()) } );

    expect(sidebar()).toBeVisible();
  });

  it('closes Sidebar when "X" button in sidebar is clicked', async () => {
    const built = await build();
    const { hamburgerIcon, sidebar, sidebarButtons } = built;
    
    act(() => { fireEvent.click(hamburgerIcon()) } );

    expect(sidebar()).toBeVisible();

    act(() => { fireEvent.click(sidebarButtons()[0]) } );

    expect(sidebar()).not.toBeVisible();
  });

  it('closes Sidebar when "X" button in sidebar is clicked', async () => {
    const built = await build();
    const { hamburgerIcon, sidebar, sidebarButtons, history } = built;
    
    act(() => { fireEvent.click(hamburgerIcon()) } );

    expect(sidebar()).toBeVisible();

    act(() => { fireEvent.click(sidebarButtons()[1]) } );
    
    expect(history().location.pathname).toBe("/home");
  });
  
});

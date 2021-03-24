import React from 'react';
import { act, render } from '@testing-library/react';
import Login from './Login'
import { darkTheme, lightTheme } from '../../providers/themes';
import { contextWrapper, routerWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';
import { fireEvent, getByTestId } from '@testing-library/dom';

const build = async (Component = <Login/>, theme = lightTheme) => {
    const contextValue = { theme, setUserSession: jest.fn() };
    let routeWrap;
    let container;
    await act(async () => {
        const wrappedContext = contextWrapper(AppContext, contextValue, Component);
        routeWrap = await routerWrapper(wrappedContext);
        container = render(routeWrap.wrap).container;
    });
    return { 
        container,
        history: () => routeWrap.history,
        usernameInput: () => getByTestId(container, 'username-input'),
        passwordInput: () => getByTestId(container, 'password-input'),
        loginButton: () => getByTestId(container, 'login-button'),
    };
};

describe('Login screen', () => {
    it('renders with lightTheme props', async () => {
        const built = await build();
        const { firstChild } = built.container;
        expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
        expect(firstChild).toHaveStyle(`color: ${lightTheme.color.fontPrimary}`);
    });

    it('renders with lightTheme props', async () => {
        const built = await build(<Login/>, darkTheme);
        const { firstChild } = built.container;
        expect(firstChild).toHaveStyle(`background: ${darkTheme.color.surface}`);
        expect(firstChild).toHaveStyle(`color: ${darkTheme.color.fontPrimary}`);
    });

    it('contains "username" and "password" inputs', async () => {
        const built = await build();
        const { usernameInput, passwordInput, loginButton } = built;
        expect(usernameInput()).toBeDefined();
        expect(passwordInput()).toBeDefined();
        expect(loginButton()).toBeDefined();
    });

    it('redirects to home on successful login', async () => {
        const REAL_USERNAME = "wizeline";
        const REAL_PASSWORD = "Rocks!";
        const built = await build();
        const { 
            usernameInput, 
            passwordInput, 
            loginButton, 
            history 
        } = built;

        fireEvent.change(usernameInput(), { target: { value: REAL_USERNAME } });
        fireEvent.change(passwordInput(), { target: { value: REAL_PASSWORD } });
        await act(async () => {
            fireEvent.click(loginButton());
        })
        expect(history().location.pathname).toBe("/home");

    });
})
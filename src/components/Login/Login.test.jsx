import React from 'react';
import { act, render } from '@testing-library/react';
import Login from './Login'
import { contextWrapper, routerWrapper } from '../../utils';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';

const build = async (Component = <Login/>) => {
    const contextValue = { theme: lightTheme, setUserSession: jest.fn() };
    let container;
    await act(async () => {
        const wrappedContext = contextWrapper(AppContext, contextValue, Component);
        const routeWrap = await routerWrapper(wrappedContext);
        container = render(routeWrap.wrap).container;
    });
    return { 
        container,
    };
};

describe('Login screen', () => {
    it('renders with default properties', async () => {
        const built = await build();
        const { firstChild } = built.container;
        expect(firstChild).toMatchSnapshot();
        expect(firstChild).toHaveStyle('border-radius: 8px');
        expect(firstChild).toHaveStyle('width: 400px');
        expect(firstChild).toHaveStyle('height: min-content');
        expect(firstChild).toHaveStyle('margin: 4px');
        expect(firstChild).toHaveStyle('padding: 4px');
    })
})
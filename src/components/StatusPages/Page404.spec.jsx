import React from 'react';
import { fireEvent, getByText } from '@testing-library/dom';
import { render, act } from '@testing-library/react';
import AppContext from '../../providers/AppContext';
import { lightTheme } from '../../providers/themes';
import { routerWrapper, contextWrapper } from '../../utils'; 
import Page404 from './Page404';

const build = async (Component = <Page404/>, theme = lightTheme) => {
    let container;
    let routeWrapped;
    const contextValue = { theme };
    await act(async () => {
        const wrappedContext = contextWrapper(AppContext, contextValue, Component);
        routeWrapped = await routerWrapper(wrappedContext);
        container = render(routeWrapped.wrap).container;
    });

    return { 
        container,
        history: () => routeWrapped.history,
        redirectHomeButton: () => getByText(container, "Regresar a home"),
    };
}

describe('Page404', () => {

    it('contains defualt styles and text', async () => {
        const built = await build();
        const { firstChild } = built.container;
        expect(firstChild.textContent.includes("Can‘t find the page you‘re looking for")).toBe(true);
        expect(firstChild).toHaveStyle('align-content: center');
        expect(firstChild).toHaveStyle('justify-content: center');
        expect(firstChild).toHaveStyle('display: grid');
        expect(firstChild).toHaveStyle('width: 100vh');
        expect(firstChild).toHaveStyle('height: 100vh');
    })

    it('redirects home', async () => {
        const built = await build();
        const { redirectHomeButton, history } = built;
        expect(redirectHomeButton()).toBeDefined();
        fireEvent.click(redirectHomeButton());
        expect(history().location.pathname).toBe("/home")
    })
})
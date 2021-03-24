import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login'
import { lightTheme } from '../../providers/themes';
import { contextWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';

const build = (Component = <Login/>, theme = lightTheme) => {
    const contextValue = { theme };
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(wrappedContext);
    return { container };
};

describe('Login screen', () => {
    it('renders with default properties', () => {
        const { firstChild } = build().container;
        expect(firstChild).toMatchSnapshot();
        expect(firstChild).toHaveStyle('width: 400px');
        expect(firstChild).toHaveStyle('height: 400px');
        expect(firstChild).toHaveStyle('margin: 4px');
        expect(firstChild).toHaveStyle('padding: 4px');
    })
})
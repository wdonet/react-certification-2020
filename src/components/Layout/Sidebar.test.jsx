import React from 'react';
import Sidebar from './Sidebar';
import { render } from '@testing-library/react';
import { contextWrapper } from '../../utils';
import { lightTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';

const build = (Component = <Sidebar/>, theme = lightTheme) => {
    const contextValue = { theme };
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(wrappedContext);
    return { container };
}

describe('Sidebar', () => {
    it('has default properties', () => {
        const { firstChild } = build().container;
        expect(firstChild).toHaveStyle("height: 100%");
        expect(firstChild).toHaveStyle("width: 250px");
        expect(firstChild).toHaveStyle("position: fixed");
        expect(firstChild).toHaveStyle("z-index: 1");
        expect(firstChild).toHaveStyle("top: 0");
        expect(firstChild).toHaveStyle("left: 0");
        expect(firstChild).toHaveStyle("overflow-x: hidden");
    });
});
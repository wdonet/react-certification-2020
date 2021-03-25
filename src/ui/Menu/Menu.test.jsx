import { getByTestId } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import AppContext from '../../providers/AppContext';
import { contextWrapper } from '../../utils';
import { lightTheme } from '../../providers/themes';
import Menu from './Menu';

const build = (Component = <Menu />, theme = lightTheme) => {
    const contextValue = { theme }
    const contextWrapped = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(contextWrapped);
    return { 
        container,
        dropdownContent: () => getByTestId(container, 'dropdown-content'), 
    };
}

describe('Menu', () => {
    it('contains default styles', () => {
        const { container, dropdownContent} = build();
        const { firstChild } = container;
        
        expect(firstChild).toHaveStyle("position: relative");
        expect(firstChild).toHaveStyle("display: inline-block");

        expect(dropdownContent()).toHaveStyle('display: none;');
        expect(dropdownContent()).toHaveStyle('position: absolute;');
        expect(dropdownContent()).toHaveStyle('min-width: auto;');
        expect(dropdownContent()).toHaveStyle('padding: 4px;');
        expect(dropdownContent()).toHaveStyle('border-radius: 4px;');
        expect(dropdownContent()).toHaveStyle('z-index: 1;');
    });
});
import React from 'react';
import { render } from '@testing-library/react';
import { contextWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';
import { lightTheme } from '../../providers/themes';
import Button from './Button';

const build = (Component = <Button/>, theme = lightTheme) => {
    const contextValue = { theme };
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(wrappedContext);
    return { container };
};


describe('Button', () => {
    it('renders', () => {
        const { container } = build();
        expect(container).toMatchSnapshot();
    })

    it('renders with default props',() => {
        const { firstChild } = build().container;
        expect(firstChild).toHaveStyle('border-radius: 8px');
    });
})
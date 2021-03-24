import React from 'react';
import { render } from '@testing-library/react';
import { contextWrapper } from '../../utils';
import AppContext from '../../providers/AppContext';
import { darkTheme, lightTheme } from '../../providers/themes';
import Button from './Button'
import { fireEvent } from '@testing-library/dom';

const build = (Component = <Button/>, theme = lightTheme) => {
    const contextValue = { theme };
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(wrappedContext);
    return { container };
};

describe('Button', () => {
    
    it('Shows specified text', () => {
        const EXPECTED_TEXT = 'Test text'
        const { firstChild } = build(<Button>{EXPECTED_TEXT}</Button>).container;
        expect(firstChild).toHaveTextContent(EXPECTED_TEXT);
    })
    
    it('Has passed id', () => {
        const EXPECTED_ID = 'button-id';
        const { firstChild } = build(<Button id={EXPECTED_ID}/>).container;
        expect(firstChild).toHaveProperty('id', EXPECTED_ID);
    })

    it('renders with light theme', () => {
        const { firstChild } = build().container;
        expect(firstChild).toHaveStyle(`background: ${lightTheme.color.secondary}`);
        expect(firstChild).toHaveStyle(`color: ${lightTheme.color.fontPrimary}`);
    });

    it('renders with dark theme', () => {
        const { firstChild } = build(<Button/>, darkTheme).container;
        expect(firstChild).toHaveStyle(`background: ${darkTheme.color.secondary}`);
        expect(firstChild).toHaveStyle(`color: ${darkTheme.color.fontPrimary}`);
    });

    it('triggers onClick', () => {
        const mockedFunction = jest.fn();
        const { firstChild } = build(<Button onClick={mockedFunction}/>).container;
        fireEvent.click(firstChild);
        expect(mockedFunction).toHaveBeenCalledTimes(1);
    });
    
})
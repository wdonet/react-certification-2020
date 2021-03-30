import React from 'react';
import Sidebar from './Sidebar';
import { render } from '@testing-library/react';
import { contextWrapper } from '../../utils';
import { lightTheme, darkTheme } from '../../providers/themes';
import AppContext from '../../providers/AppContext';
import { fireEvent, getByRole } from '@testing-library/dom';

const build = (Component = <Sidebar/>, theme = lightTheme) => {
    const contextValue = { theme };
    const wrappedContext = contextWrapper(AppContext, contextValue, Component);
    const { container } = render(wrappedContext);
    return { container };
}

describe('Sidebar', () => {
    it('has colors for lightTheme', () => {
        const { firstChild } = build().container;
        expect(firstChild).toHaveStyle(`background: ${lightTheme.color.surface}`);
        expect(firstChild).toHaveStyle(`color: ${lightTheme.color.fontPrimary}`);
    });

    it('has colors for darkTheme', () => {
        const { firstChild } = build(<Sidebar/>, darkTheme).container;
        expect(firstChild).toHaveStyle(`background: ${darkTheme.color.surface}`);
        expect(firstChild).toHaveStyle(`color: ${darkTheme.color.fontPrimary}`);
    });

    it('displays children components', () => {
        const EXPECTED_CONTENT = "This is the content";
        const Component = (<Sidebar>{EXPECTED_CONTENT}</Sidebar>);
        const { firstChild } = build(Component).container;
        expect(firstChild).toHaveTextContent(EXPECTED_CONTENT);
    });

    it('displays title passed as prop', () => {
        const EXPECTED_TITLE = "This is the title";
        const Component = (<Sidebar title={EXPECTED_TITLE}/>);
        const { firstChild } = build(Component).container;
        expect(firstChild).toHaveTextContent(EXPECTED_TITLE);
    });

    it('triggers onClose function passed as prop', () => {
        const mockedOnCloseFunction = jest.fn();
        const Component = (<Sidebar onClose={mockedOnCloseFunction}/>);
        const { container } = build(Component);
        const closeButton = getByRole(container, "button");
        fireEvent.click(closeButton);
        expect(mockedOnCloseFunction).toHaveBeenCalledTimes(1);
    });
});
import { fireEvent, getAllByAltText, getAllByTestId, getByTestId } from '@testing-library/dom';
import { render } from '@testing-library/react';
import React from 'react';
import AppContext from '../../providers/AppContext';
import { contextWrapper } from '../../utils';
import { darkTheme, lightTheme } from '../../providers/themes';
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

    it('contains button for menu passed as prop', () => {
        const MenuButton = () => <button data-testid="passed-menu-button"/>
        const { container } = build(<Menu menuButton={<MenuButton/>}/>);
        const element = getByTestId(container, 'passed-menu-button');
        expect(element).toBeDefined();
    });

    it('contains menu items passed as children', () => {
        const MenuItem1 = () => <div data-testid="item-1"/>;
        const MenuItem2 = () => <div data-testid="item-2"/>;
        const { container } = build(<Menu>
                                        <MenuItem1/>
                                        <MenuItem2/>
                                    </Menu>);
        const elements = getAllByTestId(container, (id) => id.includes("item-") );
        expect(elements).toHaveLength(2);
    });

    it('displays menu items when show prop is true', () => {
        const { dropdownContent } = build(<Menu show={true}/>);
        expect(dropdownContent()).toHaveStyle('display: block');
    });

    it('hides menu items when show prop is false', () => {
        const { dropdownContent } = build(<Menu show={false}/>);
        expect(dropdownContent()).toHaveStyle('display: none');
    });

    it('hides menu items when show prop is not set', () => {
        const { dropdownContent } = build();
        expect(dropdownContent()).toHaveStyle('display: none');
    });

    it('contains auto value for right and left style props', () => {
        const { dropdownContent } = build();
    
        expect(dropdownContent()).toHaveStyle(`right: auto`);
        expect(dropdownContent()).toHaveStyle(`left: auto`);
    });

    it('contains set values for right and left style props', () => {
        const EXPECTED_VALUE = "4px";
        const { dropdownContent } = build(<Menu right={EXPECTED_VALUE} left={EXPECTED_VALUE}/>);
    
        expect(dropdownContent()).toHaveStyle(`right: ${EXPECTED_VALUE}`);
        expect(dropdownContent()).toHaveStyle(`left: ${EXPECTED_VALUE}`);
    });

    it('contains styles for lightTheme', () => {
        const { dropdownContent } = build();
    
        expect(dropdownContent()).toHaveStyle(`background-color: ${lightTheme.color.surface}`);
        expect(dropdownContent()).toHaveStyle(`box-shadow: ${lightTheme.color.surfaceShadow}`);
    });

    it('contains styles for darkTheme', () => {
        const { dropdownContent } = build(<Menu/>, darkTheme);
    
        expect(dropdownContent()).toHaveStyle(`background-color: ${darkTheme.color.surface}`);
        expect(dropdownContent()).toHaveStyle(`box-shadow: ${darkTheme.color.surfaceShadow}`);
    });

    it('triggers "onClose" function when menuButton is set and clicked outside menuButton', () => {
        const onCloseMockedFunction = jest.fn();
        build(<Menu onClose={onCloseMockedFunction} menuButton={<button/>}/>);
        fireEvent.click(window);
        expect(onCloseMockedFunction).toHaveBeenCalledTimes(1);
    });
});
import React from 'react';
import Overlay from './Overlay';
import { render } from '@testing-library/react';

const build = (Component = <Overlay/>) => {
    const { container } = render(Component);
    return { container };
}

describe('Overlay', () => {
    it('has all default styles', () => {
        const { firstChild } = build().container;
        expect(firstChild).toHaveStyle("position: fixed");
        expect(firstChild).toHaveStyle("display: none");
        expect(firstChild).toHaveStyle("width: 100%");
        expect(firstChild).toHaveStyle("height: 100%");
        expect(firstChild).toHaveStyle("top: 0");
        expect(firstChild).toHaveStyle("left: 0");
        expect(firstChild).toHaveStyle("right: 0");
        expect(firstChild).toHaveStyle("bottom: 0");
        expect(firstChild).toHaveStyle("align-items: center");
        expect(firstChild).toHaveStyle("justify-content: center");
        expect(firstChild).toHaveStyle("background-color: rgba(0,0,0,0.5)");
        expect(firstChild).toHaveStyle("z-index: 2");
    });

    it('has passed children', () => {
        const EXPECTED_CONTENT = "Hello there!";
        const { firstChild } = build(<Overlay>{ EXPECTED_CONTENT }</Overlay>).container;
        expect(firstChild).toHaveTextContent(EXPECTED_CONTENT);
    });
});
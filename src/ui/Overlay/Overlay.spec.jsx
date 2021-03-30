import React from 'react';
import Overlay from './Overlay';
import { render } from '@testing-library/react';

const build = (Component = <Overlay/>) => {
    const { container } = render(Component);
    return { container };
}

describe('Overlay', () => {
    it('shows', () => {
        const { firstChild } = build(<Overlay show={true}/>).container;
        expect(firstChild).toHaveStyle("display: flex");
    });
});
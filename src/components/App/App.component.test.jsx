import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import App from '.';

describe('App Component tests', () => {
    it('App Contains change theme defined', () => {
        render(<App />);
        expect(screen.getByText('Change Theme')).toBeDefined();
    });
    it('App Contains home section defined', () => {
        const getById = queryByAttribute.bind(null, 'id');
        const dom = render(<App />);
        expect(getById(dom.container, 'home-section')).toBeDefined();
    });
});

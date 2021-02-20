import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('Home Component tests', () => {
    it('Header Section Contains search button defined', () => {
        render(<HomePage />);
        expect(screen.getByText('🔍')).toBeDefined();
    });

    it('Header Section Contains search button defined', () => {
        render(<HomePage />);
        expect(screen.getByText('☰')).toBeDefined();
    });

    it('Header Section Contains search input defined', () => {
        render(<HomePage />);
        expect(screen.getByPlaceholderText('Search the site...')).toBeDefined();
    });

    it('Card Section Contain title', () => {
        render(<HomePage />);
        expect(
            screen.getByText('Video Tour | Welcome to Wizeline Guadalajara').tagName
        ).toBe('H2');
    });
    it('Card Section Contain Description', () => {
        render(<HomePage />);
        expect(
            screen.getByText(
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...'
            ).tagName
        ).toBe('P');
    });
    it('Card Section Contain image', () => {
        render(<HomePage />);
        expect(
            screen.getByAltText('Video Tour | Welcome to Wizeline Guadalajara').tagName
        ).toBe('IMG');
    });
    it('Card Section image size width', () => {
        render(<HomePage />);

        const image = screen.getByAltText('Video Tour | Welcome to Wizeline Guadalajara');

        expect(image.width).toEqual(120);
    });
    it('Card Section image size height', () => {
        render(<HomePage />);
        const image = screen.getByAltText('Video Tour | Welcome to Wizeline Guadalajara');
        expect(image.height).toEqual(90);
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderSection from '.';

describe('HeaderSection Component tests', () => {
    it('Header Section Contains search button defined', () => {
        render(<HeaderSection />);
        expect(screen.getByText('🔍')).toBeDefined();
    });

    it('Header Section Contains search button defined', () => {
        render(<HeaderSection />);
        expect(screen.getByText('☰')).toBeDefined();
    });

    it('Header Section Contains search input defined', () => {
        render(<HeaderSection />);
        expect(screen.getByPlaceholderText('Search the site...')).toBeDefined();
    });
});

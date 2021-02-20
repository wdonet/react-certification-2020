import React from 'react';
import { render, screen } from '@testing-library/react';
import Emoji from '.';

describe('Emoji Component tests', () => {
    it('Emoji span Contains the right emoji', () => {
        render(<Emoji symbol="👍" />);
        expect(screen.getByText('👍')).toBeDefined();
    });
    it('Emoji span shoul be span', () => {
        render(<Emoji symbol="👍" />);
        expect(screen.getByText('👍').tagName).toBe('SPAN');
    });
});

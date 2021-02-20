import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('Home Page', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('renders Videos grid', () => {
    expect(screen.getByTestId('grid')).toBeInTheDocument();
  });
});

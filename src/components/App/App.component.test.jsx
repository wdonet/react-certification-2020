import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';

describe('App', () => {
  it('renders app content', () => {
    render(<App />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });
});

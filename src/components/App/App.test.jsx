import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('Main App Component', () => {
  it('should render welcome message', () => {
    render(<App />);

    expect(screen.getByText('Hello stranger!')).toBeInTheDocument();
  });

  it('should render welcome message when matchMedia matches with dark mode', () => {
    window.matchMedia = () => ({
      matches: true,
    });
    const spy = jest.spyOn(window, 'matchMedia');
    render(<App />);

    expect(spy).toHaveBeenCalled();
    expect(screen.getByText('Hello stranger!')).toBeInTheDocument();
    expect(screen.getByText('Let me in')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Options')).toBeInTheDocument();
  });
});

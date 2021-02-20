import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('should render a header', () => {
    render(<Header />);
    expect(screen.getByTestId('header')).not.toBeEmptyDOMElement();
  });

  it('should render a search input', () => {
    render(<Header />);
    const [input] = screen.getByTestId('header').querySelectorAll('.search-input');
    expect(input).toHaveClass('search-input');
  });

  it('should render a toggle checkbox', () => {
    render(<Header />);
    const [toggle] = screen.getByTestId('header').querySelectorAll('.toggle');
    expect(toggle).toHaveClass('checkbox');
  });

  it('should render a toggle checkbox', () => {
    render(<Header />);
    const [toggle] = screen.getByTestId('header').querySelectorAll('.toggle');
    expect(toggle).toHaveClass('checkbox');
    expect(toggle).toHaveTextContent('Dark mode');
  });

  it('should render a sign in button', () => {
    render(<Header />);
    const button = screen.getByText('Sign In');
    expect(button).toBeDefined();
    expect(button).toHaveClass('button');
  });
});

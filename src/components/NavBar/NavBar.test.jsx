import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '.';

describe('NavBar', () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  it('renders NavBar and its elements', () => {
    const navBar = screen.getByTestId('navBar');
    expect(navBar.children.length).toEqual(1);
    const navContent = screen.getByTestId('navContent');
    expect(navContent.children.length).toEqual(4);
  });
});

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '.';
import AuthProvider from '../../providers/Auth';

describe('NavBar', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <NavBar />
        </AuthProvider>
      </BrowserRouter>
    );
  });

  it('renders NavBar and its elements', () => {
    const navBar = screen.getByTestId('navBar');
    expect(navBar.children.length).toEqual(1);
    const navContent = screen.getByTestId('navContent');
    expect(navContent.children.length).toEqual(4);
  });
});

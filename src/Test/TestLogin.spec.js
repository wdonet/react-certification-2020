import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../providers/Auth/Auth.provider';
import Login from '../pages/Login';

describe('Login Components', () => {
  it('User name input is present', () => {
    render(
      <AuthProvider>
        {' '}
        <Login />
      </AuthProvider>
    );
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });

  it('H1 tag is present', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(screen.getByText('Welcome back!')).toBeTruthy();
  });

  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <Login />
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });
});

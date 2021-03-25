import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../providers/Auth/Auth.provider';
import Secret from '../pages/Secret';

describe('Secret Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <BrowserRouter>
          <Secret />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <BrowserRouter>
            <Secret />
          </BrowserRouter>
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });

  it('App Links are present', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Secret />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getAllByRole('link')).toBeTruthy();
  });
});

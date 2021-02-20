import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../providers/Auth/Auth.provider';
import App from '../components/App';

describe('App Components', () => {
  it('User name input is present', () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });

  it('App Links are present', () => {
    render(
      <AuthProvider>
        <App />
      </AuthProvider>
    );
    expect(screen.getAllByRole('link')).toBeTruthy();
  });
});

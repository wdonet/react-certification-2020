import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import HomePage from './Home.page';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

describe('Home Page', () => {
  it('Should display login option if user is not authenticated', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <HomePage />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.queryByText('Let me in')).toBeInTheDocument();
  });

  it('Should display logout option if user authenticated', () => {
    storage.set(AUTH_STORAGE_KEY, true);

    render(
      <BrowserRouter>
        <AuthProvider>
          <HomePage />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.queryByText('Let me in')).not.toBeInTheDocument();
    expect(screen.queryByText('Logout')).toBeInTheDocument();
  });

  it('Should trigger logout event', () => {
    storage.set(AUTH_STORAGE_KEY, true);

    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <HomePage />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.queryByText('Logout')).toBeInTheDocument();

    const button = getByTestId(container, 'btn-logout');
    fireEvent.click(button);

    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });
});

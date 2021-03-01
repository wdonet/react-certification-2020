import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import UserImage from './UserImage.component';

describe('UserImage Component', () => {
  it('should display default user image', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <UserImage />
        </AuthProvider>
      </BrowserRouter>
    );
    const userImage = screen.getByTestId('user-default-icon');

    expect(userImage).toBeInTheDocument();
  });

  it('should display popup menu on click the image', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <UserImage />
        </AuthProvider>
      </BrowserRouter>
    );
    const userImage = screen.queryByTestId('user-default-icon');

    expect(screen.queryByTestId('popup')).toBeNull();
    fireEvent.click(userImage);
    expect(screen.queryByTestId('popup')).not.toBeNull();
  });

  it('should hide popup menu on click the close button', async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <UserImage />
        </AuthProvider>
      </BrowserRouter>
    );
    const userImage = screen.queryByTestId('user-default-icon');

    expect(screen.queryByTestId('popup')).toBeNull();
    fireEvent.click(userImage);

    const closeButton = screen.queryByTestId('button-close');
    fireEvent.click(closeButton);
    await waitFor(() => expect(screen.queryByTestId('popup')).toBeNull());
  });

  it('should hide popup menu on click the login option', async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <UserImage />
        </AuthProvider>
      </BrowserRouter>
    );
    const userImage = screen.queryByTestId('user-default-icon');

    expect(screen.queryByTestId('popup')).toBeNull();
    fireEvent.click(userImage);

    const linkLogin = screen.queryByTestId('link-login');
    fireEvent.click(linkLogin);
    await waitFor(() => expect(screen.queryByTestId('popup')).toBeNull());
  });

  it('should hide popup menu on click the logout option', async () => {
    storage.set(AUTH_STORAGE_KEY, true);

    render(
      <BrowserRouter>
        <AuthProvider>
          <UserImage />
        </AuthProvider>
      </BrowserRouter>
    );
    const userImage = screen.queryByTestId('user-default-icon');

    expect(screen.queryByTestId('popup')).toBeNull();
    fireEvent.click(userImage);

    const buttonLogout = screen.queryByTestId('button-logout');
    fireEvent.click(buttonLogout);
    await waitFor(() => expect(screen.queryByTestId('popup')).toBeNull());
  });
});

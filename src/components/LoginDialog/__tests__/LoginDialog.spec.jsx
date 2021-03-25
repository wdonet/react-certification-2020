import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginDialog from '..';
import AuthProvider, { AuthContext } from '../../../providers/Auth';

describe('<LoginDialog />', () => {
  it('renders login dialog', () => {
    render(
      <AuthProvider>
        <LoginDialog open />
      </AuthProvider>
    );

    expect(screen.getByTestId('login-dialog-testid')).toBeInTheDocument();
  });

  it('fires login callback', () => {
    const loginMock = jest.fn(async () => {});

    render(
      <AuthContext.Provider value={{ login: loginMock }}>
        <LoginDialog open onClose={(f) => f} />
      </AuthContext.Provider>
    );

    const element = screen.getByRole('button', { name: /login/i });
    fireEvent.click(element);

    expect(loginMock).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { loginModalClosed, loginModalOpened } from '../../__mocks__/loginMock';
import { useAuth } from '../../providers/Auth';
import Login from './Login.component';

const mockLogin = jest.fn();

jest.mock('../../providers/Auth');

describe('Login', () => {
  beforeEach(() => {
    useAuth.mockImplementation(() => ({ authenticated: false }));
  });

  it('should renders when modal is opened', () => {
    const { container, getByTestId } = render(<Login {...loginModalOpened} />);

    expect(getByTestId('login-modal')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should not renders when modal is closed', () => {
    const { queryByTestId } = render(<Login {...loginModalClosed} />);

    expect(queryByTestId('login-modal')).not.toBeInTheDocument();
  });

  it('should allows user to login', () => {
    useAuth.mockImplementation(() => ({ authenticated: true, login: mockLogin }));
    const { getByTestId } = render(<Login {...loginModalOpened} />);

    const usernameInput = getByTestId('login-username-input');
    const passwordInput = getByTestId('login-password-input');

    fireEvent.change(usernameInput, { target: { value: 'admin' } });
    fireEvent.change(passwordInput, { target: { value: 'admin' } });
    expect(usernameInput.value).toBe('admin');
    expect(passwordInput.value).toBe('admin');

    fireEvent.click(getByTestId('login-button'));
    expect(usernameInput.value).toBe('');
    expect(passwordInput.value).toBe('');

    expect(mockLogin).toHaveBeenCalledTimes(1);
  });
});

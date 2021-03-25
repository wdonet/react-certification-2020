import React from 'react';
import { render, screen, createEvent, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';

import Login from '..';
import AuthProvider, { AuthContext } from '../../../providers/Auth';

describe('<Login />', () => {
  it('renders login form', () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    expect(screen.getByLabelText('username')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
  });

  it('executes authentication on submit', () => {
    const loginMock = jest.fn();
    const historyMock = { push: jest.fn(), listen: jest.fn(), location: {} };

    render(
      <Router history={historyMock}>
        <AuthContext.Provider value={{ login: loginMock }}>
          <Login />
        </AuthContext.Provider>
      </Router>
    );

    const element = screen.getByText('login');
    const clickEvent = createEvent.click(element);
    fireEvent.click(element, clickEvent);

    expect(loginMock).toHaveBeenCalled();
    expect(historyMock.push).toHaveBeenCalled();
  });
});

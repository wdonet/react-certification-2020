import React from 'react';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import LoginPage from './Login.page';

describe('Login Page', () => {
  it('Check welcome message after render', () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    expect(screen.queryByText('Welcome back!')).toBeInTheDocument();
  });

  it('Should trigger login event', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </BrowserRouter>
    );

    const button = getByTestId(container, 'btn-login');
    const event = fireEvent.click(button);

    expect(event).toBeTruthy();
  });

  it('Validates Layout snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

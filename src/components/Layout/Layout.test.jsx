import {
  render,
  screen,
  fireEvent,
  getByTestId,
  queryByTestId,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import Layout from './Layout.component';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

describe('Layout component', () => {
  it('Should check all Menu Items in Layout', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    );
    const totalMenuItems = screen.getAllByRole('listitem').length;

    expect(totalMenuItems).toBe(4);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Should display logout option if user authenticated', () => {
    storage.set(AUTH_STORAGE_KEY, true);

    render(
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.queryByText('Login')).not.toBeInTheDocument();
    expect(screen.queryByText('Logout')).toBeInTheDocument();
  });

  it('Should trigger logout event', () => {
    storage.set(AUTH_STORAGE_KEY, true);

    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.queryByText('Logout')).toBeInTheDocument();

    const button = getByTestId(container, 'button-logout');
    fireEvent.click(button);

    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });

  it('Should expand menu size on menu button click', () => {
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    );

    const button = queryByTestId(container, 'button-menu');
    const initialClassName = button.className;
    fireEvent.click(button);
    expect(initialClassName).not.toBe(button.className);
  });

  it('Validates Layout snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});

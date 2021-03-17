import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../providers/GlobalState/Provider';
import useQueryParams from '../../hooks/useQueryParams';
import Layout from './Layout.component';

const mockHistoryPush = jest.fn();
const mockLogout = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../providers/Auth');

jest.mock('../../providers/GlobalState/Provider');

jest.mock('../../hooks/useQueryParams');

describe('Layout', () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useAuth.mockImplementation(() => ({ authenticated: false }));
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: true },
      dispatch: dispatchMock,
    }));
    useQueryParams.mockImplementation(() => ({}));
  });

  it('should renders', () => {
    const { container } = render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    expect(screen.getByText('Content')).toBeTruthy();
    expect(screen.getByTestId('layout-sidebar')).toBeTruthy();
    expect(screen.getByTestId('header-menu')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should renders with the sidebar closed', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    const sidebarOpened = document.body.getElementsByClassName(
      'ui vertical labeled icon ui overlay left thin visible sidebar menu'
    )[0];
    expect(sidebarOpened).toBeFalsy();
  });

  it('should opens the sidebar when clicking bar icon', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    const sidebarOpened = document.body.getElementsByClassName(
      'ui vertical labeled icon ui overlay left thin visible sidebar menu'
    )[0];
    expect(sidebarOpened).toBeTruthy();
  });

  it('should closes the sidebar when clicking outside', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    let sidebarOpened = document.body.getElementsByClassName(
      'ui vertical labeled icon ui overlay left thin visible sidebar menu'
    );
    expect(sidebarOpened[0]).toBeTruthy();

    fireEvent.click(screen.getByTestId('header-menu'));

    sidebarOpened = document.body.getElementsByClassName(
      'ui vertical labeled icon ui overlay left thin visible sidebar menu'
    );
    expect(sidebarOpened[0]).toBeFalsy();
  });

  it('should naviagte to the home page when user click on home link', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    fireEvent.click(screen.getByTestId('layout-go-home'));

    expect(mockHistoryPush).toHaveBeenLastCalledWith('/');
  });

  it('should navigate to the favorites page when user click on favorites link', () => {
    useAuth.mockImplementation(() => ({ authenticated: true }));
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    fireEvent.click(screen.getByTestId('layout-go-favorites'));

    expect(mockHistoryPush).toHaveBeenLastCalledWith('/favorites');
  });

  it('should opens login modal when user clicks on login link', () => {
    useAuth.mockImplementation(() => ({ authenticated: false }));
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    expect(screen.queryByTestId('login-modal')).toBeFalsy();

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    fireEvent.click(screen.getByTestId('layout-login'));

    expect(screen.getByTestId('login-modal')).toBeTruthy();
  });

  it('should logout when user clicks on logout link', () => {
    useAuth.mockImplementation(() => ({ authenticated: true, logout: mockLogout }));
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    fireEvent.click(screen.getByTestId('layout-logout'));

    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenLastCalledWith('/');
  });

  it('should changes the icon with dark mode', () => {
    render(
      <Layout>
        <div>Content</div>
      </Layout>
    );

    const userIcon = document.body.getElementsByClassName('user circle outline');
    expect(userIcon[0]).toBeTruthy();

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    fireEvent.click(screen.getByTestId('layout-dark-mode'));

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useAuth } from '../../providers/Auth';
import Layout from './Layout.component';

const mockHistoryPush = jest.fn();
const mockLogout = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => ({ authenticated: false })),
}));

describe('Layout', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should renders', () => {
    render(
      <Layout>
        <div id="content">Content</div>
      </Layout>
    );

    const container = document.querySelector('#content');
    expect(container).toBeTruthy();
    expect(screen.getByTestId('layout-sidebar')).toBeTruthy();
    expect(screen.getByTestId('header-menu')).toBeTruthy();
  });

  it('should renders with the sidebar closed', () => {
    render(
      <Layout>
        <div id="content">Content</div>
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
        <div id="content">Content</div>
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
        <div id="content">Content</div>
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
        <div id="content">Content</div>
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
        <div id="content">Content</div>
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
        <div id="content">Content</div>
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
        <div id="content">Content</div>
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
        <div id="content">Content</div>
      </Layout>
    );

    let userIcon = document.body.getElementsByClassName('user circle outline');
    expect(userIcon[0]).toBeTruthy();

    fireEvent.click(screen.getByTestId('header-bars-icon'));
    fireEvent.click(screen.getByTestId('layout-dark-mode'));

    userIcon = document.body.getElementsByClassName('user circle outline');
    expect(userIcon[0]).toBeFalsy();
  });
});

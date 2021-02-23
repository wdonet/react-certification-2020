import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useAuth } from '../../providers/Auth';
import Header from './Header.component';

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

describe('Header', () => {
  it('should renders', () => {
    render(<Header />);

    expect(screen.getByTestId('header-menu')).toBeTruthy();
  });

  it('should opens sidebar', () => {
    const onOpenSidebar = jest.fn();

    render(<Header onOpenSidebar={onOpenSidebar} />);

    fireEvent.click(screen.getByTestId('header-bars-icon'));

    expect(onOpenSidebar).toHaveBeenCalledTimes(1);
  });

  it('should changes the theme mode', () => {
    const onDarkMode = jest.fn();

    render(<Header onDarkMode={onDarkMode} />);

    fireEvent.click(screen.getByTestId('header-dark-mode'));

    expect(onDarkMode).toHaveBeenCalledTimes(1);
  });

  it('should changes the icon with dark mode', () => {
    render(<Header isDarkMode />);

    let userIcon = document.body.getElementsByClassName('user circle outline');
    expect(userIcon[0]).toBeFalsy();
    userIcon = document.body.getElementsByClassName('user circle');
    expect(userIcon[0]).toBeTruthy();
  });

  it('should changes the icon with light mode', () => {
    render(<Header />);

    const userIcon = document.body.getElementsByClassName('user circle outline');
    expect(userIcon[0]).toBeTruthy();
  });

  it('should opens login modal', () => {
    const onOpenModal = jest.fn();

    render(<Header onOpenModal={onOpenModal} />);

    fireEvent.click(screen.getByTestId('header-dropdown'));
    fireEvent.click(screen.getByTestId('header-dropdown-login'));

    expect(onOpenModal).toHaveBeenCalledTimes(1);
  });

  it('should allows user to logout', () => {
    useAuth.mockImplementation(() => ({ authenticated: true, logout: mockLogout }));
    render(<Header />);

    fireEvent.click(screen.getByTestId('header-dropdown'));
    fireEvent.click(screen.getByTestId('header-dropdown-logout'));
    expect(mockLogout).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenLastCalledWith('/');
  });
});

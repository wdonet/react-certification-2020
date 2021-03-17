import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useAuth } from '../../providers/Auth';
import { useGlobalState } from '../../providers/GlobalState/Provider';
import useQueryParams from '../../hooks/useQueryParams';
import Header from './Header.component';

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

describe('Header', () => {
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
    const { container } = render(<Header />);

    expect(screen.getByTestId('header-menu')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('should opens sidebar', () => {
    const onOpenSidebar = jest.fn();

    render(<Header onOpenSidebar={onOpenSidebar} />);

    fireEvent.click(screen.getByTestId('header-bars-icon'));

    expect(onOpenSidebar).toHaveBeenCalledTimes(1);
  });

  it('should changes the theme mode', () => {
    render(<Header />);

    fireEvent.click(screen.getByTestId('header-dark-mode'));

    expect(dispatchMock).toHaveBeenCalledTimes(1);
  });

  it('should changes the icon with dark mode', () => {
    useGlobalState.mockImplementation(() => ({
      state: { isThemeLight: false },
      dispatch: dispatchMock,
    }));
    render(<Header />);

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

  it('should redirect when user press enter on input search', () => {
    const expected = {
      pathname: '/results',
      search: '?searchedText=Wizeline',
    };
    render(<Header />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Wizeline' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockHistoryPush).toHaveBeenCalledTimes(1);
    expect(mockHistoryPush).toHaveBeenLastCalledWith(expected);
  });

  it('should not redirect when user press any other key on input search', () => {
    render(<Header />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Wizeline' } });
    fireEvent.keyDown(input, { key: 'Space', code: 'Space' });
    expect(mockHistoryPush).toHaveBeenCalledTimes(0);
  });
});

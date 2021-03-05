import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../providers/Auth/Auth.provider';
import Header from '../components/Header';

describe('Header Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <Header />
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });

  it('Expect the string Dark Mode', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(screen.getByText('Dark Mode')).toBeTruthy();
  });

  it('Menu and logo are present', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(screen.getAllByRole('img').length).toBe(2);
  });

  it('Input in header is present', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('Toggle element is present in Header', () => {
    render(
      <AuthProvider>
        <Header />
      </AuthProvider>
    );
    expect(screen.getByRole('checkbox')).toBeTruthy();
  });
});

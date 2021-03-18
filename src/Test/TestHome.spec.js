import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../providers/Auth/Auth.provider';
import WrapperVideo from '../pages/Home/videoContainer';

describe('Home Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <BrowserRouter>
          <WrapperVideo />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <BrowserRouter>
            <WrapperVideo />
          </BrowserRouter>
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });

  it('Display img', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <WrapperVideo />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getAllByRole('img')).toBeTruthy();
  });
});

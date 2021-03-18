import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../providers/Auth/Auth.provider';
import NotFound from '../pages/NotFound';

describe('NotFound Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <NotFound />
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });

  it('Not Found image is present', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getAllByRole('img').length).toBe(1);
  });

  it('Home Link is present', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getAllByRole('link').length).toBe(1);
  });
});

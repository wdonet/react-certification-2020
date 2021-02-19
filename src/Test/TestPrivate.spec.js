import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../providers/Auth/Auth.provider';
import Private from '../components/Private';

describe('Private Components', () => {
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <AuthProvider>
        <BrowserRouter>
          <Private />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(
      asFragment(
        <AuthProvider>
          <BrowserRouter>
            <Private />
          </BrowserRouter>
        </AuthProvider>
      )
    ).toMatchSnapshot();
  });
});

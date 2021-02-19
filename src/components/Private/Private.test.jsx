import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import Private from './Private.component';
import { storage } from '../../utils/storage';
import { AUTH_STORAGE_KEY } from '../../utils/constants';

const Component = () => {
  return <h1>Private component</h1>;
};

describe('Private Component', () => {
  it('Should not Render component if user is not logged', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Private>
            <Component />
          </Private>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.queryByText('Private component')).not.toBeInTheDocument();
  });

  it('Should Render component if user is logged', () => {
    storage.set(AUTH_STORAGE_KEY, true);

    render(
      <BrowserRouter>
        <AuthProvider>
          <Private>
            <Component />
          </Private>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.queryByText('Private component')).toBeInTheDocument();
  });

  it('Should throw an error if context is not valid in Private component', () => {
    const spyContext = jest.spyOn(React, 'useContext').mockImplementation(() => null);

    expect(() =>
      render(
        <BrowserRouter>
          <AuthProvider>
            <Private>
              <Component />
            </Private>
          </AuthProvider>
        </BrowserRouter>
      )
    ).toThrow(`Can't use "useAuth" without an AuthProvider!`);
    expect(spyContext).toHaveBeenCalled();
  });
});

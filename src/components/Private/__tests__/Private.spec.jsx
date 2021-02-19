import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';

import Private from '..';
import AuthProvider from '../../../providers/Auth';

describe('<Private />', () => {
  it('redirects to not found page', () => {
    const path = '/secret';
    const SecretPage = () => <div>Testing</div>;
    const NotFoundPage = () => <div>Not found</div>;

    render(
      <AuthProvider>
        <MemoryRouter initialEntries={[path]}>
          <Private exact path={path}>
            <SecretPage />
          </Private>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </MemoryRouter>
      </AuthProvider>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});

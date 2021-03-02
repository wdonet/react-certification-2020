import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch, Route, MemoryRouter } from 'react-router-dom';

import Private from '..';
import AuthProvider, { AuthContext } from '../../../providers/Auth';

describe('<Private />', () => {
  const Routes = () => {
    const path = '/secret';

    const SecretPage = () => <div>Very secret page</div>;
    const NotFoundPage = () => <div>Not found</div>;

    return (
      <MemoryRouter initialEntries={[path]}>
        <Switch>
          <Private exact path={path}>
            <SecretPage />
          </Private>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </MemoryRouter>
    );
  };

  it('redirects to not found page', () => {
    render(
      <AuthProvider>
        <Routes />
      </AuthProvider>
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it('renders expected private page', () => {
    render(
      <AuthContext.Provider value={{ authenticated: true }}>
        <Routes />
      </AuthContext.Provider>
    );

    expect(screen.queryByText(/not found/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/secret/i)).toBeInTheDocument();
  });
});

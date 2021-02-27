import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes.component';
import Theme from '../App/App.styled';

describe('App Component Tests', () => {
  it('Should redirect to home', async () => {
    const home = '/';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Router history={history}>
        <Theme>
          <Routes />
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('Home')).toBeInTheDocument();
  });

  it('Should show not found', async () => {
    const home = '*';
    const history = createMemoryHistory();
    history.push(home);
    render(
      <Router history={history}>
        <Theme>
          <Routes />
        </Theme>
      </Router>
    );
    expect(screen.getByTestId('NotFound')).toBeInTheDocument();
  });
});

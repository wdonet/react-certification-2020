import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import App from '../App.component';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByTestId('home-page')).toBeInTheDocument();
});

test('landing on a login page', () => {
  renderWithRouter(<App />, { route: '/login' });

  expect(screen.getByTestId('login')).toBeInTheDocument();
});

test('landing on a not found page', () => {
  renderWithRouter(<App />, { route: '/something-weird' });

  expect(screen.getByTestId('not-found')).toBeInTheDocument();
});

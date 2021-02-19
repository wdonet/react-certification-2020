import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from '..';

describe('<App />', () => {
  it('rendering and navigating to not found page', () => {
    window.history.pushState({}, 'Test page', '/not-found');

    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByAltText(/page not found/i)).toBeInTheDocument();
  });
});

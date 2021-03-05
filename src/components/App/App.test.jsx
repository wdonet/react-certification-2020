import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App.component';

describe('App', () => {
  it('renders App component', () => {
    const { container } = render(<App />);

    expect(screen.getByTestId('layout-sidebar')).toBeTruthy();
    expect(screen.getByTestId('header-menu')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });
});

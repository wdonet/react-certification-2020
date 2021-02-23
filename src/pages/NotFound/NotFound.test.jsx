import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NotFound from './NotFound.page';

describe('NotFound', () => {
  it('should renders', () => {
    render(
      <MemoryRouter initialEntries={['/notfound']}>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('Page Not Found')).toBeTruthy();
    expect(screen.getByTestId('go-home').getAttribute('href')).toBe('/');
    expect(screen.getByTestId('gif').getAttribute('alt')).toBe('Page Not Found');
  });
});

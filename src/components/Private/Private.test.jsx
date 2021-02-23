import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Private from './Private.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

describe('Private', () => {
  it('should renders with an active sesion', () => {
    useAuth.mockImplementation(() => ({ authenticated: true }));
    render(
      <MemoryRouter initialEntries={['/Private']}>
        <Private>
          <div id="private">Private</div>
        </Private>
      </MemoryRouter>
    );

    const container = document.querySelector('#private');
    expect(container).toBeTruthy();
  });

  it('should not renders witout an active sesion', () => {
    useAuth.mockImplementation(() => ({ authenticated: false }));
    render(
      <MemoryRouter initialEntries={['/Private']}>
        <Private>
          <div id="private">Private</div>
        </Private>
      </MemoryRouter>
    );

    const container = document.querySelector('#private');
    expect(container).toBeFalsy();
  });
});

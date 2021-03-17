import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Private from './Private.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth');

describe('Private', () => {
  it('should renders with an active sesion', () => {
    useAuth.mockImplementation(() => ({ authenticated: true }));
    const { container } = render(
      <MemoryRouter initialEntries={['/Private']}>
        <Private>
          <div>Private</div>
        </Private>
      </MemoryRouter>
    );

    expect(screen.getByText('Private')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it('should not renders witout an active sesion', () => {
    useAuth.mockImplementation(() => ({ authenticated: false }));
    render(
      <MemoryRouter initialEntries={['/Private']}>
        <Private>
          <div>Private</div>
        </Private>
      </MemoryRouter>
    );

    expect(screen.queryByText('Private')).toBeFalsy();
  });
});

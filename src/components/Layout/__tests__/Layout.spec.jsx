import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from '..';

describe('<Layout />', () => {
  it('renders layout', () => {
    render(<Layout>testing</Layout>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});

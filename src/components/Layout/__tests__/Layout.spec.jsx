import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from '..';
import AuthProvider from '../../../providers/Auth';
import CustomProvider from '../../../providers/Custom';

const WrappedLayout = ({ children }) => (
  <AuthProvider>
    <CustomProvider>
      <Layout>{children}</Layout>
    </CustomProvider>
  </AuthProvider>
);

describe('<Layout />', () => {
  it('renders layout', () => {
    render(<WrappedLayout>testing</WrappedLayout>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});

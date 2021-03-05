import React from 'react';
import { render, screen } from '@testing-library/react';

import Layout from '..';
import CustomProvider from '../../../providers/Custom';

const WrappedLayout = ({ children }) => (
  <CustomProvider>
    <Layout>{children}</Layout>
  </CustomProvider>
);

describe('<Layout />', () => {
  it('renders layout', () => {
    render(<WrappedLayout>testing</WrappedLayout>);

    expect(screen.getByText('testing')).toBeInTheDocument();
  });
});

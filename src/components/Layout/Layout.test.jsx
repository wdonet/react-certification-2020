import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';
import SearchProvider from '../../providers/Search.provider';

describe('<Layout />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <Layout />
      </SearchProvider>
    );
    const label = getByTestId('Layout');
    expect(label).not.toBe(null);
  });
});

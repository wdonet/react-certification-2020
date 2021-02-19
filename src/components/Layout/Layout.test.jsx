import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

describe('<Layout />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<Layout />);
    const label = getByTestId('Layout');
    expect(label).not.toBe(null);
  });
});

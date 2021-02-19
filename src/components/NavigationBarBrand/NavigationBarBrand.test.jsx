import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarBrand from './NavigationBarBrand.component';

describe('<NavigationBarBrand />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBarBrand />);
    expect(getByTestId('NavigationBarBrand')).not.toBe(null);
  });
});

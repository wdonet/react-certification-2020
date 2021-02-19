import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarToggler from './NavigationBarToggler.component';

describe('<NavigationBarToggler />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBarToggler />);
    const label = getByTestId('NavigationBarToggler');
    expect(label).not.toBe(null);
  });
});

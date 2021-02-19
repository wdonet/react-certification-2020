import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarThemeSwitch from './NavigationBarThemeSwitch.component';

describe('<NavigationBarThemeSwitch />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBarThemeSwitch />);
    const label = getByTestId('NavigationBarThemeSwitch');
    expect(label).not.toBe(null);
  });
});

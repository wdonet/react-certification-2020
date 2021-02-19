import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarMenu from './NavigationBarMenu.component';

describe('<NavigationBarMenu />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBarMenu />);
    expect(getByTestId('NavigationBarMenu')).not.toBe(null);
  });
});

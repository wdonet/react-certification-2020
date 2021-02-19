import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarUser from './NavigationBarUser.component';

describe('<NavigationBarUser />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBarUser />);
    const container = getByTestId('navigationBarUser');
    expect(container).not.toBe(null);
  });
});

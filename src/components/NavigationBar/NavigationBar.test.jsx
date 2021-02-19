import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar.component';

describe('<NavigationBar />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBar />);
    const label = getByTestId('navigationBar');
    expect(label).not.toBe(null);
  });
});

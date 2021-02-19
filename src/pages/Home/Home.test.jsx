import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home.page';

describe('<Home />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<Home />);
    const label = getByTestId('Home');
    expect(label).not.toBe(null);
  });
});

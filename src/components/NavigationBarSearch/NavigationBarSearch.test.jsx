import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarSearch from './NavigationBarSearch.component';

describe('<NavigationBarSearch />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(<NavigationBarSearch />);
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
});

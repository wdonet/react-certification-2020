import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarSearch from './NavigationBarSearch.component';
import SearchProvider from '../../providers/Search.provider';

describe('<NavigationBarSearch />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBarSearch />
      </SearchProvider>
    );
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
});

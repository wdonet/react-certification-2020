import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar.component';
import SearchProvider from '../../providers/Search.provider';

describe('<NavigationBar />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBar />
      </SearchProvider>
    );
    const label = getByTestId('navigationBar');
    expect(label).not.toBe(null);
  });
});

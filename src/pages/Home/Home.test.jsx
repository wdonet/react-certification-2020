import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home.page';
import SearchProvider from '../../providers/Search.provider';

describe('<Home />', () => {
  test('Renders correctly', () => {
    const { getByText } = render(
      <SearchProvider>
        <Home />
      </SearchProvider>
    );
    const label = getByText('Loading ....');
    expect(label).not.toBe(null);
  });
  // test('Renders correctly', () => {
  //   const { getByTestId } = render(
  //     <SearchProvider>
  //       <Home />
  //     </SearchProvider>
  //   );
  //   const label = getByTestId('Home');
  //   expect(label).not.toBe(null);
  // });
});

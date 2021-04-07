import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Toggle from '../index';

import { lightTheme } from '../../../theme';

describe('Toggle', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Toggle />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

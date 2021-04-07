import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Login from '../index';
import AuthProvider from '../../../providers/Auth';

import { lightTheme } from '../../../theme';

describe('Login', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <AuthProvider>
          <ThemeProvider theme={lightTheme}>
            <Login open closeModal={() => {}} />
          </ThemeProvider>
        </AuthProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

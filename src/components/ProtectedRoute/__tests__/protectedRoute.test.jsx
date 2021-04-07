import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ProtectedRoute from '../index';
import AuthProvider from '../../../providers/Auth';

import { lightTheme } from '../../../theme';

describe('ProtectedRoute', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <AuthProvider>
            <ThemeProvider theme={lightTheme}>
              <ProtectedRoute exact path="/favorites">
                <div>Hola</div>
              </ProtectedRoute>
            </ThemeProvider>
          </AuthProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

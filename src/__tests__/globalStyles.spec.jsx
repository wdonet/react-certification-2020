import React from 'react';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';

import GlobalStyle from '../globalStyles';

describe('GlobalStyle', () => {
  it('renders and match theme styles', () => {
    const theme = ['body', 'appBar', 'card', 'cardText'].reduce(
      (acc, key) => ({
        ...acc,
        [key]: {
          color: 'white',
          backgroundColor: 'gray',
        },
      }),
      {}
    );

    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import Header from '../index';
import { LeftItems, CenterItems, RightItems } from '../styled';
import { lightTheme } from '../../../theme';

describe('Header', () => {
  test('renders left, center and right sections', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Header />
      </ThemeProvider>
    );
    const leftContainer = container.getElementsByClassName(
      LeftItems.styledComponentId
    )[0];
    expect(leftContainer).toBeTruthy();

    const centerContainer = container.getElementsByClassName(
      CenterItems.styledComponentId
    )[0];
    expect(centerContainer).toBeTruthy();

    const rightContainer = container.getElementsByClassName(
      RightItems.styledComponentId
    )[0];
    expect(rightContainer).toBeTruthy();
  });
});

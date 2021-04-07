import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import Icon from '../index';

import { lightTheme } from '../../../theme';

describe('Icon', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <Icon icon={faHeart} size="xsmall" />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

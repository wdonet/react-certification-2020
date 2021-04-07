import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import HeaderButton from '../index';
import Icon from '../../Icon';

import { lightTheme } from '../../../theme';

describe('HeaderButton', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={lightTheme}>
          <HeaderButton>
            <Icon icon={faHome} size="xsmall" />
          </HeaderButton>
        </ThemeProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu.component';
import Theme from '../App/App.styled';

describe('Menu Component Tests', () => {
  const setup = () => {
    const utils = render(
      <BrowserRouter>
        <Theme>
          <Menu />
        </Theme>
      </BrowserRouter>
    );
    return {
      ...utils,
    };
  };

  it('Should render the menu component', () => {
    const { getByTestId } = setup();
    expect(getByTestId('CustomAppBar')).toBeInTheDocument();
  });

  it('Should redirect to home', async () => {
    const { getByTestId } = setup();
    const menuButton = getByTestId('MenuButton');
    menuButton.click();
    /* TODO */
  });

  it('Should change the switch state', async () => {
    const { getByTestId } = setup();
    const themeSwitch = getByTestId('ThemeSwitch').getElementsByTagName('input')[0];
    themeSwitch.click();
    expect(themeSwitch.checked).toEqual(true);
    themeSwitch.click();
    expect(themeSwitch.checked).toEqual(false);
  });
});

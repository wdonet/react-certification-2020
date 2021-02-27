import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu.component';
import Theme from '../App/App.styled';

describe('Menu Component Tests', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Theme>
          <Menu />
        </Theme>
      </BrowserRouter>
    );
  });

  it('Should render the menu component', () => {
    expect(screen.getByTestId('CustomAppBar')).toBeInTheDocument();
  });

  it('Should change the switch state', async () => {
    const themeSwitch = screen
      .getByTestId('ThemeSwitch')
      .getElementsByTagName('input')[0];
    themeSwitch.click();
    expect(themeSwitch.checked).toEqual(true);
    themeSwitch.click();
    expect(themeSwitch.checked).toEqual(false);
  });
});

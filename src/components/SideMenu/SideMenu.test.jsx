import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenu from '.';

describe('SideMenu', () => {
  beforeEach(() => {
    render(<SideMenu />);
  });

  it('renders SideMenu and its elements', () => {
    const sideMenu = screen.getByTestId('sideMenu');
    expect(sideMenu.children.length).toEqual(1);
    expect(sideMenu.children[0].children.length).toEqual(2);
  });
});

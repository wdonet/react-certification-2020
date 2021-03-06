import React from 'react';
import { render } from '@testing-library/react';
import Header from '.';
import { SwitchContainer } from '../Switch/Switch.styled';
import { HeaderContainer, Loggin, Menu, SearchInput } from './Header.styled';

test("Header renders all of it's parts", () => {
  const { container } = render(<Header />);

  const header = document.getElementsByClassName(HeaderContainer.styledComponentId)[0];
  expect(container.children).toContain(header);

  const menu = document.getElementsByClassName(Menu.styledComponentId)[0];
  expect(header.children).toContain(menu);

  const searchInput = document.getElementsByClassName(SearchInput.styledComponentId)[0];
  expect(header.children).toContain(searchInput);

  const themeToggle = document.getElementsByClassName(
    SwitchContainer.styledComponentId
  )[0];
  expect(header.children).toContain(themeToggle);

  const loggin = document.getElementsByClassName(Loggin.styledComponentId)[0];
  expect(header.children).toContain(loggin);
});

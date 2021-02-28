import React from 'react';
import ReactDOM from 'react-dom';
import Header from '.';
import { HeaderContainer, Loggin, Menu, SearchInput, ThemeToggle } from './Header.styled';

test("Header renders all of it's parts", () => {
  const container = document.createElement('div');
  ReactDOM.render(<Header />, container);
  const header = container.getElementsByClassName(HeaderContainer.styledComponentId)[0];
  expect(container.children).toContain(header);

  const menu = container.getElementsByClassName(Menu.styledComponentId)[0];
  expect(header.children).toContain(menu);

  const searchInput = container.getElementsByClassName(SearchInput.styledComponentId)[0];
  expect(header.children).toContain(searchInput);

  const themeToggle = container.getElementsByClassName(ThemeToggle.styledComponentId)[0];
  expect(header.children).toContain(themeToggle);

  const loggin = container.getElementsByClassName(Loggin.styledComponentId)[0];
  expect(header.children).toContain(loggin);
});

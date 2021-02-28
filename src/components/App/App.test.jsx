import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderContainer } from '../Header/Header.styled';
import App from '.';

test('Header renders on all screens', () => {
  const container = document.createElement('div');
  ReactDOM.render(<App />, container);
  const header = container.getElementsByClassName(HeaderContainer.styledComponentId)[0];
  expect(container.children).toContain(header);
});

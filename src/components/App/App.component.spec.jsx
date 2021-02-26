import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('App component', () => {
  it(`contains the whole app in one child`, () => {
    const { container } = render(<App />);

    expect(container.children.length).toBe(1);
  });
});

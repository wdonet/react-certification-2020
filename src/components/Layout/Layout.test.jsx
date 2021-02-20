import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '.';

describe('Layout', () => {
  const children = <h1>hello</h1>;

  beforeEach(() => {
    render(<Layout>{children}</Layout>);
  });

  it('renders all children', () => {
    const layout = screen.getByTestId('layout');
    expect(layout.children.length).toEqual(1);
    expect(screen.getByText('hello').tagName).toBe('H1');
  });
});

import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';
import Switch from './Switch';

const build = (Component = <Switch />) => {
  const { container } = render(Component);
  return { container };
};

describe('Switch', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });
});

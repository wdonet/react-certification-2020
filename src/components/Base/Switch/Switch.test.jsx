import React from 'react';
import 'jest-styled-components';
import Switch from './Switch';
import { render } from '@testing-library/react';

const build = (Component = <Switch/>) => {
  const { container } = render(Component);
  return { container };
};

describe('Switch', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });
});

// describe('Switch styles and props', () => {
//   it('applies default styling', () => {
//     const tree = mount(<Switch />);
//   });
// });

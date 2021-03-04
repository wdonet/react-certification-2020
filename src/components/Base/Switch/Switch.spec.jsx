import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByRole, render } from '@testing-library/react';
import Switch from './Switch';

const build = (Component = <Switch />) => {
  const { container } = render(Component);
  return { container };
};

describe('Swithc functionality', () => {
  it("triggers 'onClick' funcion", () => {
    const onClickFunction = jest.fn();
    const { container } = build(<Switch onClick={onClickFunction} />);
    fireEvent.click(getByRole(container, 'switch'));
    expect(onClickFunction).toHaveBeenCalledTimes(1);
  });
});

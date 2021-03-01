import { fireEvent, getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Searchbar from './Searchbar.component';

describe('Searchbar component', () => {
  it('should focus input clicking on searchbar', () => {
    const { container } = render(<Searchbar />);
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');
    const initialClassName = input.className;
    fireEvent.click(searchbar);
    expect(initialClassName).not.toBe(input.className);
  });

  it('should trigger input events: focus, change and blur', () => {
    const { container } = render(<Searchbar />);
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');
    const initialClassName = input.className;

    fireEvent.click(searchbar);
    userEvent.type(input, 'Foo');
    expect(input.value).toBe('Foo');

    fireEvent.blur(input);
    fireEvent.click(searchbar);
    expect(initialClassName).not.toBe(input.className);
  });

  it('should trigger search event', () => {
    const { container } = render(<Searchbar />);
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');
    const form = getByTestId(container, 'form-search');

    jest.spyOn(global.console, 'log');
    fireEvent.click(searchbar);
    userEvent.type(input, 'Foo');
    fireEvent.submit(form);

    expect(console.log).toHaveBeenCalled();
  });
});

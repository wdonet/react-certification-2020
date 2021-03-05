import { fireEvent, getByTestId, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SearchProvider from '../../providers/Search';
import Searchbar from './Searchbar.component';

describe('Searchbar component', () => {
  it('should focus input clicking on searchbar', () => {
    const { container } = render(
      <SearchProvider>
        <Searchbar />
      </SearchProvider>
    );
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');
    const initialClassName = input.className;
    fireEvent.click(searchbar);
    expect(initialClassName).not.toBe(input.className);
  });

  it('should trigger input events: focus, change and blur', () => {
    const { container } = render(
      <BrowserRouter>
        <SearchProvider>
          <Searchbar />
        </SearchProvider>
      </BrowserRouter>
    );
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');
    const initialClassName = input.className;

    expect(input.value).toBe('Music');
    fireEvent.click(searchbar);
    fireEvent.change(input, { target: { value: '' } });
    userEvent.type(input, 'Foo');
    fireEvent.blur(input);
    fireEvent.click(searchbar);
    expect(input.value).toBe('Foo');
    expect(initialClassName).not.toBe(input.className);
  });

  it('should trigger search event', () => {
    window.history.pushState({}, 'Test Title', '/foo');

    const { container } = render(
      <BrowserRouter>
        <SearchProvider>
          <Searchbar />
        </SearchProvider>
      </BrowserRouter>
    );
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');
    const form = getByTestId(container, 'form-search');

    expect(window.location.pathname).toBe('/foo');
    fireEvent.click(searchbar);
    userEvent.type(input, 'Bar');
    fireEvent.submit(form);
    expect(window.location.pathname).toBe('/');
  });

  it('should open search bar if it is not active', () => {
    window.history.pushState({}, 'Test Title', '/foo');

    const { container } = render(
      <BrowserRouter>
        <SearchProvider>
          <Searchbar />
        </SearchProvider>
      </BrowserRouter>
    );
    const searchbar = getByTestId(container, 'searchbar');
    const input = getByTestId(container, 'input-search');

    fireEvent.click(searchbar);
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.blur(input);
    fireEvent.click(searchbar);
    expect(input.value).toBe('');
  });

  it('Validates VideoCard snapshot', () => {
    const component = renderer.create(
      <BrowserRouter>
        <SearchProvider>
          <Searchbar />
        </SearchProvider>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Should throw an error if context is not valid in Private component', () => {
    const spyContext = jest.spyOn(React, 'useContext').mockImplementation(() => null);

    expect(() =>
      render(
        <BrowserRouter>
          <SearchProvider>
            <Searchbar />
          </SearchProvider>
        </BrowserRouter>
      )
    ).toThrow(`Can't use "useSearch" without an SearchProvider!`);
    expect(spyContext).toHaveBeenCalled();
  });
});

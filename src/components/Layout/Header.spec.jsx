import React from 'react';
import 'jest-styled-components';
import { fireEvent, getByRole } from '@testing-library/dom';
import { contextWrapper, renderWithTheme } from '../../utils/testing';
import Header from './Header';
import SearchContext from '../../providers/SearchContext';

const build = (Component = <Header />) => {
  const contextValue = { search: jest.fn() };
  const Wrap = contextWrapper(SearchContext, contextValue, Component);
  const { container } = renderWithTheme(Wrap);
  return {
    container,
    searchInput: () => getByRole(container, 'search'),
    contextValue,
  };
};

describe('Header', () => {
  it('renders', () => {
    const { container } = build();
    expect(container).toMatchSnapshot();
  });

  it('fires user search until presses enter', () => {
    const EXPECTED_TEXT = 'Hello, ';
    const TRIGGER_TYPING = 'there';
    const { searchInput, contextValue } = build();
    fireEvent.change(searchInput(), { target: { value: TRIGGER_TYPING } });
    fireEvent.change(searchInput(), { target: { value: EXPECTED_TEXT } });
    expect(searchInput().value).toBe(EXPECTED_TEXT);
    expect(contextValue.search).not.toHaveBeenCalled();
    fireEvent.keyPress(searchInput(), { key: 'Enter', code: 13, charCode: 13 });
    expect(contextValue.search).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '.';

describe('SearchInput', () => {
  it('renders with initial word to search', () => {
    render(<SearchInput />);
    expect(screen.getByDisplayValue('wizeline')).toBeTruthy();
  });

  it('triggers change on enter', () => {
    const onChange = jest.fn();

    render(<SearchInput />);

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });

    expect(onChange).toHaveBeenCalled();
  });

  it('only fires on enter keydown', () => {
    const onChange = jest.fn();

    render(<SearchInput />);

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Space' });

    expect(onChange).not.toHaveBeenCalled();
  });
});

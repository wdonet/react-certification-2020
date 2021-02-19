import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../SearchInput.component';

describe('Test SearchInput component', () => {
  it('expect to render correctly', () => {
    const { getByRole } = render(<SearchInput />);

    expect(getByRole('textbox')).toBeTruthy();
  });
});

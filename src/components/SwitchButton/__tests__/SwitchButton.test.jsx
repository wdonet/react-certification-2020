import React from 'react';
import { render } from '@testing-library/react';
import SwitchButton from '../SwitchButton.component';

describe('Test SwitchButton component', () => {
  it('expect to render correctly toggled false', () => {
    const { getByText, getByRole } = render(
      <SwitchButton toggled={false} onChange={jest.fn()} />
    );

    expect(getByText('Dark Mode').tagName).toBe('DIV');
    expect(getByRole('checkbox', { checked: false, hidden: true })).toBeTruthy();
  });

  it('expect to render correctly toggled true', () => {
    const { getByRole } = render(<SwitchButton toggled onChange={jest.fn()} />);

    expect(getByRole('checkbox', { checked: true, hidden: true })).toBeTruthy();
  });
});

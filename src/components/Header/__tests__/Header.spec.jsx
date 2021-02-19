import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from '..';
import { StyledSwitch } from '../Header.styles';

describe('<Header />', () => {
  it('renders search bar', () => {
    render(<Header />);

    expect(screen.getByLabelText('search')).toBeInTheDocument();
  });

  it('typing on search bar', () => {
    render(<Header />);

    const searchElement = screen.getByLabelText('search');
    const value = 'wizeline';

    fireEvent.change(searchElement, { target: { value } });
    expect(searchElement.value).toBe(value);
  });

  it('renders dark mode switch', () => {
    render(<Header />);

    expect(screen.getByLabelText('dark mode switch')).toBeInTheDocument();
  });

  it('executes dark mode switch onChange event', () => {
    let checked = false;
    const handleOnChange = jest.fn(() => {
      checked = !checked;
    });
    const ariaLabel = 'mock switch';

    render(
      <StyledSwitch aria-label={ariaLabel} checked={checked} onChange={handleOnChange} />
    );

    const element = screen
      .getByLabelText(ariaLabel)
      .querySelector('input[type="checkbox"]');

    fireEvent.click(element);
    expect(handleOnChange).toHaveBeenCalled();
    expect(checked).toBeTruthy();
  });

  it('shows account menu', () => {
    const renderRes = render(<Header />);

    const element = renderRes.container.querySelector('button[aria-controls="menuId"]');

    fireEvent.click(element);

    expect(element.querySelector('svg')).toBeInTheDocument();
    expect(screen.getByTestId('menu-testid')).toBeVisible();
  });
});
